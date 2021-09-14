import { initializeEmberLocalClient } from './ember/emberLocalClient'
import { initializeEmberServer } from './ember/emberServer'
import { setAllCrossPoints } from './utils/setCrossPoints'
import { webServer } from './webserver/webServer'

import { loadSourceList, loadTargetList } from './utils/storage'
import { logger } from './utils/logger'

initializeEmberServer().then(() => {
    initializeEmberLocalClient()
        .then(() => {
            let sources = loadSourceList()
            let targets = loadTargetList()

            setAllCrossPoints(sources, targets)
            webServer(sources, targets)
        })
        .catch((error) => {
            logger.error('Error initializing Ember and NDI Server')
        })
})
