import { emberLocalClient, setMatrixConnection } from "./ember/emberLocalClient"
import { emberMtxServer } from "./ember/emberServer"
import { setEmberCrossPoints } from "./utils/setEmberCrossPoints"
import { webServer } from "./webserver/webServer"

const ndi_mtx = require('bindings')('ndi_mtx')

emberMtxServer()
emberLocalClient()

// These will be moved to a file:
let sources = [
    {
        name: '',
        url: '192.168.0.12:5961'
    },
    {
        name: '',
        url: '127.0.0.1:5961'
    }
]

let targets = [
    {
        index: 0,
        name: "trg1"
    },
    {
        index: 1,
        name: "trg2"
    }
]

let crossPoints = [
{target: 0,source: 1},
{target: 1,source: 0},
]
setEmberCrossPoints(crossPoints)

let source = 0
let target = 0
setMatrixConnection(source, target)
ndi_mtx.initializeRouting(sources[source].url, targets[target].name, target)
let source1 = 1
let target1 = 1
// setMatrixConnection(source, target)
ndi_mtx.initializeRouting(sources[source1].url, targets[target1].name, target1)

setInterval(() => {
    console.log('change source in loop')
    source = (source === 0) ? 1 : 0
    // setMatrixConnection(source, target)
    ndi_mtx.changeRoutingSource(sources[source].url, target)
    source1 = (source1 === 0) ? 1 : 0
    // setMatrixConnection(source, target)
    ndi_mtx.changeRoutingSource(sources[source1].url, target1)

}, 8000)

webServer(sources, targets, crossPoints)


