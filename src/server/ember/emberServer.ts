import { logger } from '../utils/logger'
const fs = require('fs')
const path = require('path')

//@ts-ignore
import { EmberServer } from 'node-emberplus'
import { root } from './emberServerTree'

const emberServer = new EmberServer('0.0.0.0', 9000, root) // start server on port 9000

export const emberMtxServer = () => {
    logger.info('Setting up Ember Server')

    emberServer
        .on('event', (event: any) => {
            console.log('Ember Server Event received : ', event)
        })
        .on('error', (error: any) => {
            if (
                (error.message + '').match(/econnrefused/i) ||
                (error.message + '').match(/disconnected/i)
            ) {
                logger.error('Ember connection not establised')
            } else {
                logger.error('Ember connection unknown error' + error.message)
            }
        })
        .on("matrix-change", (info: any) => {
            console.log(`Client ${info.client} changed ${info.target} and ${info.sources}`);
         })
    logger.info('Setting up Ember Server')

    emberServer
        .listen()
        .then(() => {
            console.log('Ember Server is listening')
        })
        .catch((error: Error) => {
            console.log(error.stack)
        })
}

const emberStateToFile = () => {
    let json = JSON.stringify(emberServer.toJSON())
    logger.info('Updating emberstate in file')
    fs.writeFile(
        path.resolve('embertree.json'),
        json,
        'utf8',
        (error: Error) => {
            if (error) {
                console.log(error)
                logger.error('Error writing Ember-dump file')
            }
        }
    )
}
