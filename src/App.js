import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import Login from './pages/login/login'
import './App.css'
import {useState} from 'react'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App