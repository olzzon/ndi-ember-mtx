const express = require( 'express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')

import { logger } from '../utils/logger'

import { emberMtxServer } from '../ember/emberServer'
import { emberLocalClient, setMatrixConnection } from '../ember/emberLocalClient'


export const webServer = (sources: any[], targets: any[], crossPoints: any[]) => {
    emberMtxServer()
    emberLocalClient()

    const port: number = parseInt(process.env.PORT || '3008') || 3008
    let socketClients: any[]
    // socket.io server
    io.on('connection', (socket: any) => {
        socketClients.push({
            id: socket.id,
        })

        socket.on('disconnecting', () => {
            socketClients = socketClients.filter((client) => {
                return client.id !== socket.id
            })
        })

        socket.once('disconnect', () => {
            logger.debug(`Socket with id: ${socket.id} disconnected`)
        })

        socket.on('get_state', () => {
            socket.emit('sources', sources)
            socket.emit('targets', targets)
            socket.emit('crosspoints', crossPoints)
        })


        socket.on('restart_server', () => {
            process.exit(0)
        })

    })

    app.use('/', express.static(path.join(__dirname, '../admin')))
    server.listen(port)
    logger.info(`Server started at http://localhost:${port}`)

    server.on('connection', () => {
        app.get('/', (req: any, res: any) => {
            res.sendFile(path.resolve('index.html'))
        })
    })
}
