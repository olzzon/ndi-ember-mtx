import '../styles/Matrix.css'
import * as IO from '../../models/SOCKET_IO_CONTANTS'
import { ISource, ITarget } from '../../models/interfaces'

import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socketClient = io()
socketClient.on('connect', () => {
    console.log('Connected to NDI-MTX')
})

const Matrix = () => {
    const [targets, setTargets] = useState<ITarget[]>([])
    const [sources, setSources] = useState<ISource[]>([])

    useEffect(() => {
        if (socketClient) {
            socketClient.on(
                IO.UPDATE_CLIENT,
                (sourceList: ISource[], targetList: ITarget[]) => {
                    console.log(
                        'Source List: ',
                        sourceList,
                        'Target List :',
                        targetList
                    )
                    setSources(sourceList)
                    setTargets(targetList)
                }
            )
        }
    }, [socketClient])

    const handleSourceLabel = (
        event: React.ChangeEvent<HTMLSelectElement>,
        targetIndex: number
    ) => {
        let selectedSource = event.target.selectedIndex
        console.log('Change Source Label', sources[selectedSource])
    }
    const handleChangeSource = (
        event: React.ChangeEvent<HTMLSelectElement>,
        targetIndex: number
    ) => {
        let selectedSource = event.target.selectedIndex
        targets[targetIndex].selectedSource = selectedSource
        setTargets([...targets])
        socketClient.emit(IO.CHANGE_SOURCE, selectedSource, targetIndex)
    }

    const handleTargetLabelInput = (
        event: React.ChangeEvent<any>,
        index: number
    ) => {}

    const handleRestartServer = () => {
        console.log('RESTARTING SERVER')
        socketClient.emit(IO.RESTART_SERVER)
    }

    const renderSources = () => {
        return (
            <div className="matrixsources">
                Source :
                {sources.map((source, sourceIndex) => {
                    return (
                        <form key={sourceIndex} className="matrixsource">
                            <label>
                                <option key={sourceIndex} value={sourceIndex}>
                                    {source.label}
                                </option>
                            </label>
                        </form>
                    )
                })}
            </div>
        )
    }

    const renderTargets = () => {
        return (
            <div className="matrix">
                {targets.map((target, targetIndex) => {
                    return (
                        <form key={targetIndex}>
                            <div
                                className={'matrix_target_label'}
                                onChange={(event) =>
                                    handleTargetLabelInput(event, targetIndex)
                                }>
                            {target.label}
                            </div>

                            <label className={'inputlabel'}>
                                {sources.map(
                                    (source: ISource, sourceIndex: number) => {
                                        return (
                                            <button key={sourceIndex} className="matrix_connection">
                                                {target.selectedSource === sourceIndex ? "X" : <React.Fragment/>}
                                            </button>
                                        )
                                    }
                                )}
                            </label>
                            <br />
                        </form>
                    )
                })}
            </div>
        )
    }

    return (
        <div className={'matrix'}>
            {renderSources()}
            {renderTargets()}
        </div>
    )
}

export default Matrix
