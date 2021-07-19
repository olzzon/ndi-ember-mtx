const ndi_mtx = require('bindings')('ndi_mtx')

let source = 0
ndi_mtx.initializeRouting('127.0.0.1:5962', 'TestTarget1')

setInterval(() => {
    console.log('change source in loop')
    source = source ? 0 : 1
    ndi_mtx.changeRoutingSource('127.0.0.1:5961')
}, 5000)
