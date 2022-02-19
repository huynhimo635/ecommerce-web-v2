import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"

import InputField from "./form/InputField"
import Button from "./Button"
import { SectionTitle } from "./Section"

import userApi from "../api/userApi"
import { useDispatch, useSelector } from "react-redux"
// import { unwrapResult } from "@reduxjs/toolkit"
import { getMe } from "../redux/user/getMeSlice"
import { remove } from "../redux/loginSlice"
import * as loading from "../redux/loadingSlice"
import * as register from "../redux/registerSlice"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const isLogin = useSelector(state => state.login.value)

    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            dispatch(loading.set())
            const response = await userApi.login(email, password)
            dispatch(loading.remove())
            if (response && response.token) {
                localStorage.setItem("tokenCustomer", response.token)
                localStorage.setItem("email", email)
                await dispatch(getMe(email))
                dispatch(remove())

                // history.goBack()
                // const res = await dispatch(getMe(email))
                // const profile = unwrapResult(res)
            }
        } catch (er) {
            if (er.response !== undefined) {
                dispatch(loading.remove())
                if (er.response.status === 400)
                    setError(
                        "Email or Password is incorrect!! Please try again"
                    )
            }
        }
    }

    return (
        <div className={`login ${isLogin ? "active" : false}`}>
            <div className="login-form-contain">
                <SectionTitle>Login</SectionTitle>
                <form className="form login__form" action="/">
                    <InputField
                        className="login__form__email"
                        type="email"
                        label="email"
                        onChange={value => setEmail(value)}
                        value={email}
                    />
                    <InputField
                        className="login__form__password"
                        type="password"
                        label="password"
                        onChange={value => setPassword(value)}
                        value={password}
                    />
                    <div className="error">{error && <span>{error}</span>}</div>
                    <Button
                        className="login__form__submit"
                        onclick={e => handleSubmit(e)}
                        autoFocus
                    >
                        Login
                    </Button>
                </form>
                <div className="login-expand">
                    <Link to="/register">
                        <span
                            onClick={() => {
                                dispatch(register.set())
                                dispatch(remove())
                            }}
                        >
                            Register
                        </span>
                    </Link>

                    <Link to="/login">
                        <span>Forgot password</span>
                    </Link>
                </div>
                <div className="login-close">
                    <Button
                        size="sm"
                        onclick={() => {
                            dispatch(remove())
                            history.goBack()
                        }}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
