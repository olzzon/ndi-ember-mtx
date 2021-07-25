import '../styles/MainPage.css'

import React, { useState, useEffect } from 'react'
//@ts-ignore
import Files from 'react-files'
import { io } from 'socket.io-client'

const userUrlId =
    new URLSearchParams(window.location.search).get('username') || ''
// @ts-ignore
const socket = io({ extraHeaders: { userurl: userUrlId } })

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
        socket.emit('restart_server')
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
