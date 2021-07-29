import { logger } from '../utils/logger'

const ndi_mtx = require('bindings')('ndi_mtx')

export const initializeNdiRouting = (
    url: string,
    targetLabel: string,
    targetIndex: number
) => {
    let status = ndi_mtx.initializeRouting(url, targetLabel, targetIndex)
    if ('completed' !== status) {
        logger.error(`NDI Error : ${status}`)
    }
}

export const changeNdiRoutingSource = (url: string, targetIndex) => {
    let status = ndi_mtx.changeRoutingSource(url, targetIndex)
    if ('completed' !== status) {
        logger.error(`NDI Error : ${status}`)
    }
}
