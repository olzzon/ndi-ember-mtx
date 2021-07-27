const ndi_mtx = require('bindings')('ndi_mtx')

export const initializeNdiRouting = (url: string, targetLabel: string, targetIndex: number) => {
    ndi_mtx.initializeRouting(url, targetLabel, targetIndex)
}

export const changeNdiRoutingSource = (url: string, targetIndex) => {
    ndi_mtx.changeRoutingSource(url, targetIndex)
}
