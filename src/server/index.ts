import { emberLocalClient } from "./ember/emberLocalClient"
import { emberMtxServer } from "./ember/emberServer"
import { setAllCrossPoints } from "./utils/setAllCrossPoints"
import { webServer } from "./webserver/webServer"

import { changeNdiRoutingSource, initializeNdiRouting } from "./ndi/ndiMatrice"
import { loadSourceList, loadTargetList } from "./utils/storage"


emberMtxServer()
emberLocalClient()

let sources = loadSourceList()
let targets = loadTargetList()

setAllCrossPoints(sources, targets)

webServer(sources, targets)


