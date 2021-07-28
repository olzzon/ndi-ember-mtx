import ReactDOM from 'react-dom'
import React from 'react'
import MainPage from './components/mainPage'
import Matrix from './components/matrix'

ReactDOM.render(
    <React.StrictMode>
        <MainPage />
        <Matrix />
    </React.StrictMode>,
    document.getElementById('root')
)
