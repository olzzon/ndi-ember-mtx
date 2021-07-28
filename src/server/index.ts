import { emberLocalClient } from "./ember/emberLocalClient"
import { initializeEmberServer } from "./ember/emberServer"
import { setAllCrossPoints } from "./utils/setCrossPoints"
import { webServer } from "./webserver/webServer"

import { loadSourceList, loadTargetList } from "./utils/storage"


initializeEmberServer()
emberLocalClient()

let sources = loadSourceList()
let targets = loadTargetList()

setAllCrossPoints(sources, targets)
webServer(sources, targets)
