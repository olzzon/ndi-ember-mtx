import '../styles/MainPage.css'
import * as IO from '../../models/SOCKET_IO_CONTANTS'

import React, { useState } from 'react'
import io from 'socket.io-client'

export const socketClient = io()

const MainPage = () => {
    const [serverOnline, setServerOnline] = useState<boolean>(false)

    socketClient
        .on('connect', () => {
            setServerOnline(true)
            console.log('Connected to NDI-MTX')
        })
        .on('disconnect', () => {
            setServerOnline(false)
        })

    const handleRestartServer = () => {
        if (window.confirm('Are you sure you will restart server ')) {
            console.log('RESTARTING SERVER')
            socketClient.emit(IO.RESTART_SERVER)
        }
    }

    return (
        <div className={'container'}>
            <div className={'header'}>NDI MTX:</div>

            <div className="buttons">
                <button
                    className={'button'}
                    onClick={() => {
                        handleRestartServer()
                    }}
                >
                    {serverOnline ? (
                        <React.Fragment>SERVER ONLINE</React.Fragment>
                    ) : (
                        <React.Fragment>SERVER OFFLINE</React.Fragment>
                    )}
                </button>
            </div>
        </div>
    )
}

export default MainPage
