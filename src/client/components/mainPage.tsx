import '../styles/MainPage.css'
import * as IO from '../../models/SOCKET_IO_CONTANTS'

import React from 'react'
import io from 'socket.io-client'

const userUrlId =
    new URLSearchParams(window.location.search).get('username') || ''
const socketClient = io()
socketClient.on('connect', () => {
    console.log('Connected to NDI-MTX')
})

const MainPage = () => {

    const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    }

    const handleUserIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handleUserNameInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
    }

    const handleEmberTargetInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
    }

    const handleAccessId = (
        event: React.ChangeEvent<HTMLSelectElement>,
        index: number
    ) => {
    }

    const handleAccessLabelInput = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
    }

    const handleAccessPathInput = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
    }

    const handleAnonymousAccess = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
    }


    const handleAddUser = () => {
    }

    const handleRestartServer = () => {
        console.log('RESTARTING SERVER')
        socketClient.emit(IO.RESTART_SERVER)
    }

    return (
        <div className={'container'}>
            <div className={'header'}>NDI MTX:</div>
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
