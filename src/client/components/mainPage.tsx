import '../styles/MainPage.css'
import * as IO from '../../models/SOCKET_IO_CONTANTS'
import {ISource, ITarget} from '../../models/interfaces'

import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socketClient = io()
socketClient.on('connect', () => {
    console.log('Connected to NDI-MTX')
})

const MainPage = () => {
    const [targets, setTargets] = useState<ITarget[]>([])
    const [sources, setSources] = useState<ISource[]>([])

    useEffect(() => {
        if (socketClient) {
            socketClient.on(IO.UPDATE_CLIENT, (sourceList: ISource[], targetList: ITarget[]) => {
                console.log("Source List: ",sourceList, "Target List :", targetList)
                setSources(sourceList)
                setTargets(targetList)
            })
        }
    }, [socketClient])

    const handleChangeSource = (
        event: React.ChangeEvent<HTMLSelectElement>,
        targetIndex: number
    ) => {
        let selectedSource = event.target.selectedIndex
        targets[targetIndex].source = selectedSource
        setTargets([...targets])
        socketClient.emit(IO.CHANGE_SOURCE, selectedSource, targetIndex)
    }

    const handleTargetLabelInput = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {}

    const handleAddSource = () => {
        console.log('Adding New Source')
        setSources([...sources, { label: 'OKOK', url: '192.168.0.12:5956' }])
    }

    const handleRestartServer = () => {
        console.log('RESTARTING SERVER')
        socketClient.emit(IO.RESTART_SERVER)
    }

    const renderTarget = () => {
        return (
            <React.Fragment>
                {targets.map((target, targetIndex) => {
                    return (
                            <form>
                                Target Index : {targetIndex}
                                <label className={'inputlabel'}>
                                    Source :
                                    <select
                                        onChange={(event) =>
                                            handleChangeSource(event, targetIndex)
                                        }
                                    >
                                        {sources.map(
                                            (
                                                source: ISource,
                                                sourceIndex: number
                                            ) => {
                                                return (
                                                    <option
                                                        selected={
                                                            target.source ===
                                                            sourceIndex
                                                        }
                                                        key={sourceIndex}
                                                        value={
                                                            target.source
                                                        }
                                                    >
                                                        {source.label}
                                                    </option>
                                                )
                                            }
                                        )}
                                    </select>
                                </label>
                                <label className={'inputlabel'}>
                                    Target Label:
                                    <input
                                        type="text"
                                        value={target.label}
                                        onChange={(event) =>
                                            handleTargetLabelInput(event, targetIndex)
                                        }
                                    />
                                </label>
                                DEBUG : {target.source}
                            </form>
                    )
                })}
            </React.Fragment>
        )
    }

    return (
        <div className={'container'}>
            <div className={'header'}>NDI MTX:</div>
            {renderTarget()}
            <button
                className={'adminbutton'}
                onClick={() => {
                    handleAddSource()
                }}
            >
                ADD SOURCE
            </button>
            <button
                className={'adminbutton'}
                onClick={() => {
                    handleRestartServer()
                }}
            >
                RESTART SERVER
            </button>
        </div>
    )
}

export default MainPage
