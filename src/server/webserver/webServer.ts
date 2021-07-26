const express = require('express')
const app = express()
const server = require('http').Server(app)
const socketServer = require('socket.io')(server)
const path = require('path')

import { logger } from '../utils/logger'
import * as IO from '../../models/SOCKET_IO_CONTANTS'

export const webServer = (
    sources: any[],
    targets: any[],
    crossPoints: any[]
) => {
    const socketConnection = () => {
        let socketClients: any[] = []
        // socket.io server
        socketServer.on('connection', (socket: any) => {
            logger.info('Client connected :' + socket.id)
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

            socket.on(IO.RESTART_SERVER, () => {
                logger.info('Restart SERVER!')
                process.exit(0)
            })
        })
    }
    const port: number = parseInt(process.env.PORT || '3008') || 3008
    app.use('/', express.static(path.join(__dirname, '../../client')))
    server.listen(port)
    logger.info(`Server started at http://localhost:${port}`)

    server.on('connection', () => {
        app.get('/', (req: any, res: any) => {
            res.sendFile(path.resolve('index.html'))
        })
    })
    socketConnection()
}
