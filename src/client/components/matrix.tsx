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
    const handleChangeSource = (sourceIndex: number, targetIndex: number) => {
        socketClient.emit(IO.CHANGE_SOURCE, sourceIndex, targetIndex)
    }

    const handleTargetLabelInput = (
        event: React.ChangeEvent<any>,
        index: number
    ) => {}

    const renderSources = () => {
        return (
            <div className="matrixsources">
                <div className="matrix_source_target_label">Source\Target</div>
                {sources.map((source, sourceIndex) => {
                    return (
                        <form key={sourceIndex} className="matrixsource">
                            {source.label}
                        </form>
                    )
                })}
            </div>
        )
    }

    const renderTargets = () => {
        return (
            <div className="matrixtargets">
                {targets.map((target, targetIndex) => {
                    return (
                        <div key={targetIndex}>
                            <div
                                className={'matrix_target_label'}
                                onChange={(event) =>
                                    handleTargetLabelInput(event, targetIndex)
                                }
                            >
                                {target.label}
                            </div>
                            {sources.map(
                                (source: ISource, sourceIndex: number) => {
                                    return (
                                        <button
                                            key={sourceIndex}
                                            className="matrix_connection_botton"
                                            onClick={() =>
                                                handleChangeSource(
                                                    sourceIndex,
                                                    targetIndex
                                                )
                                            }
                                        >
                                            {target.selectedSource ===
                                            sourceIndex ? (
                                                'X'
                                            ) : (
                                                <React.Fragment />
                                            )}
                                        </button>
                                    )
                                }
                            )}
                            <br />
                        </div>
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
