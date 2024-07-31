import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onButtonClick = () => {
        axios
            .post("http://localhost:8080/pitangTesteTecnico/api/signin", {login, password})
            .then((response) => {
                console.log(response.data.token)
                localStorage.setItem("authToken", response.data.token)
                navigate('/dashboard')
            })
            .catch((error) => {
                console.error(error)
            });
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={login}
                    placeholder="Enter your email here"
                    onChange={(ev) => setLogin(ev.target.value)}
                    className={'inputBox'}
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
            </div>
        </div>
    )
}

export default Login