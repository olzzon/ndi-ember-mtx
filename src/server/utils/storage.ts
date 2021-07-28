import { ISource, ITarget } from '../../models/interfaces'
import { logger } from './logger'
// Node Modules:
const fs = require('fs')
const path = require('path')

export const loadSourceList = (): ISource[] => {
    let sources: ISource[] = []
    try {
        sources = JSON.parse(
            fs.readFileSync(path.resolve('storage', 'sources.json'))
        )
    } catch (error) {
        logger.error(
            'Couldn´t read sources.json file, returning empty source list ',
            error
        )
    }
    return sources
}

export const loadTargetList = (): ITarget[] => {
    let targets: ITarget[] = []
    try {
        targets = JSON.parse(
            fs.readFileSync(path.resolve('storage', 'targets.json'))
        )
    } catch (error) {
        logger.error(
            'Couldn´t read targets.json file, returning empty source list '
        )
        logger.error(error)
    }
    return targets
}
