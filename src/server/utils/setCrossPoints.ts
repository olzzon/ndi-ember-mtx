import { ISource, ITarget } from "../../models/interfaces"
import { setMatrixConnection } from "../ember/emberLocalClient"
import { initializeNdiRouting } from "../ndi/ndiMatrice"
import { logger } from "./logger"

export const setAllCrossPoints = (sources: ISource[], targets: ITarget[]) => {
    targets.forEach((target: ITarget, targetIndex) => {
        logger.info(`Initializing Crosspoint Source : ${target.selectedSource} Name : ${sources[target.selectedSource].dnsSource} to ${target.label}`)
        setMatrixConnection(target.selectedSource, targetIndex)
        initializeNdiRouting(sources[target.selectedSource].dnsSource, targets[targetIndex].label, targetIndex)
    })
}
