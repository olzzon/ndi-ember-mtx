import '../styles/MainPage.css'

import React from 'react'

const MainPage = () => {
    const handleRestartServer = () => {
        console.log('RESTARTING SERVER')
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
                    RESTART SERVER
                </button>
            </div>
        </div>
    )
}

export default MainPage
