import { logger } from '../utils/logger'

const { EmberClient } = require('node-emberplus')
const emberClient = new EmberClient('127.0.0.1', 9000)

export const emberLocalClient = () => {
    emberClient
        .connect()
        .then(() => emberClient.getDirectory())
        .then(() => emberClient.getElementByPath('0.1.0'))
        .then((matrix: any) => {
            logger.info('Local Matrix Connected :', matrix)
        })
}

export const setMatrixConnection = (
    sourceIndex: number,
    targetIndex: number
) => {
    logger.info(
        'Change Ember Matrix Source :',
        sourceIndex,
        ' to Target :',
        targetIndex
    )
    emberClient
        .getElementByPath('0.1.0')
        .then((matrix: any) => {
            emberClient.matrixConnect(matrix, targetIndex + 1, [sourceIndex])
        })
        .catch((error: any) => {
            logger.error('Error connection Ember crosspoint')
        })
}
