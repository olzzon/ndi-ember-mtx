const ndi_mtx = require('bindings')('ndi_mtx')

let source = 0

ndi_mtx.initializeRouting('192.168.0.12:5961', 'TestTarget1', 0)
ndi_mtx.initializeRouting('127.0.0.1:5962', 'TestTarget2', 1)

setInterval(() => {
    console.log('change source in loop')
    source = source ? 0 : 1
    if (source === 1) {
        ndi_mtx.changeRoutingSource('127.0.0.1:5962', 0)
        ndi_mtx.changeRoutingSource('192.168.0.12:5961', 1)
    } else {
        ndi_mtx.changeRoutingSource('192.168.0.12:5961', 0)
        ndi_mtx.changeRoutingSource('127.0.0.1:5962', 1)
    }
}, 3000)
