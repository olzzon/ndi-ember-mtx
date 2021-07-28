import { logger } from "../utils/logger"

const { EmberClient } = require('node-emberplus')
const client = new EmberClient('127.0.0.1', 9000)

export const emberLocalClient = () => {
    client
        .connect()
        .then(() => client.getDirectory())
        .then(() => client.getElementByPath('0.1.0'))
        .then((matrix: any) => {
            console.log('Local Matrix Connected :', matrix)
        })
}

export const setMatrixConnection = (sourceIndex: number, targetIndex: number) => {
    console.log(' Changing Ember Matrix Source :', sourceIndex, ' Target :', targetIndex )
        client.getElementByPath('0.1.0')
        .then((matrix: any) => {
            client.matrixConnect(matrix, targetIndex + 1, [sourceIndex])
        })
        .catch((error: any)=> {
            console.log(error)
        })

    logger.info(`EmberServer Mtx Source : ${sourceIndex} to Target : ${targetIndex}`)
}
