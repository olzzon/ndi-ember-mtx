import { emberLocalClient, setMatrixConnection } from "./ember/emberLocalClient"
import { emberMtxServer } from "./ember/emberServer"
import { setEmberCrossPoints } from "./utils/setEmberCrossPoints"
import { webServer } from "./webserver/webServer"
import { ISource, ITarget} from '../models/interfaces'

const ndi_mtx = require('bindings')('ndi_mtx')

emberMtxServer()
emberLocalClient()

// These will be moved to a file:
let sources: ISource[] = [
    {
        label: 'SOURCE1',
        url: '192.168.0.12:5961'
    },
    {
        label: 'SOURCE2',
        url: '127.0.0.1:5961'
    }
]

let targets: ITarget[] = [
    {
        source: 0,
        label: "RED207"
    },
    {
        source: 1,
        label: "RED208"
    }
]

setEmberCrossPoints(targets)

let source = 0
let target = 0
setMatrixConnection(source, target)
ndi_mtx.initializeRouting(sources[source].url, targets[target].label, target)
let source1 = 1
let target1 = 1
// setMatrixConnection(source, target)
ndi_mtx.initializeRouting(sources[source1].url, targets[target1].label, target1)

setInterval(() => {
    console.log('change source in loop')
    source = (source === 0) ? 1 : 0
    // setMatrixConnection(source, target)
    ndi_mtx.changeRoutingSource(sources[source].url, target)
    source1 = (source1 === 0) ? 1 : 0
    // setMatrixConnection(source, target)
    ndi_mtx.changeRoutingSource(sources[source1].url, target1)

}, 20000)

webServer(sources, targets)


