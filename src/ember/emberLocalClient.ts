import { logger } from "../utils/logger"

const { EmberClient } = require('node-emberplus')
const client = new EmberClient('127.0.0.1', 9000)

export const emberLocalClient = () => {
    client
        .connect()
        .then(() => client.getDirectory())
        .then(() => client.getElementByPath('0.1.0'))
        .then((matrix) => {
            console.log('Local Matrix Connected :', matrix)
        })
}

export const setMatrixConnection = (target: number, sourceIndex: number) => {
        client.getElementByPath('0.1.0')
        .then((matrix: any) => {
            client.matrixConnect(matrix, target, [sourceIndex])
            console.log('Matrix Connection changed')
        })
        .catch((error)=> {
            console.log(error)
        })

    logger.info(`EmberServer Mtx Source : ${sourceIndex} to Target : ${target}`)
}
