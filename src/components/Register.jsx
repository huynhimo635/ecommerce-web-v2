import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import InputField from "./form/InputField"
import { useDispatch, useSelector } from "react-redux"

import Button from "./Button"
import { SectionTitle } from "./Section"
import Grid from "./Grid"

import { remove } from "../redux/registerSlice"
import * as loading from "../redux/loadingSlice"
import * as notification from "../redux/notificationSlice"
import userApi from "../api/userApi"

const error = {}
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passwordHash, setPasswordHash] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")

    // const [codeAddress, setCodeAddress] = useState("")
    // const [zip, setZip] = useState("")

    const isRegister = useSelector(state => state.register.value)

    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault()

        const check = Object.values(error).indexOf(true) < 0 // Not error
        if (check) {
            const data = {
                name,
                email,
                passwordHash,
                phone,
                country,
                city,
                street
            }
            dispatch(loading.set())
            await userApi.register(data)
            dispatch(loading.remove())
            dispatch(notification.set())
            dispatch(remove())
            history.goBack()
        } else {
            alert(
                "Your required fields are invalid. Please try check it again!!"
            )
            return e.preventDefault()
        }
    }

    return (
        <div className={`login ${isRegister ? "active" : false}`}>
            <div className="register-form-contain">
                <SectionTitle>Create an account</SectionTitle>
                <form className="form register__form" action="/">
                    <Grid gap={20} col={2} mdCol={1} sm={1}>
                        {/* Name Field */}
                        <InputField
                            className="register__form__password"
                            type="text"
                            label="name"
                            onChange={value => {
                                setName(value)
                            }}
                            value={name}
                            validator={["required"]}
                            error={(label, er) => (error[label] = er)}
                        />

                        {/* Phone Field */}
                        <InputField
                            className="register__form__password"
                            type="text"
                            label="phone"
                            onChange={value => setPhone(value)}
                            value={phone}
                            validator={["required", "number"]}
                            error={(label, er) => (error[label] = er)}
                        />

                        {/* Email Field */}
                        <InputField
                            className="register__form__email"
                            type="email"
                            label="email"
                            onChange={value => setEmail(value)}
                            value={email}
                            validator={["required", "email"]}
                            error={(label, er) => (error[label] = er)}
                        />

                        {/* Password Field */}
                        <InputField
                            className="register__form__password"
                            type="password"
                            label="password"
                            onChange={value => setPasswordHash(value)}
                            value={passwordHash}
                            validator={["required", "password"]}
                            error={(label, er) => (error[label] = er)}
                        />

                        {/* Country Field */}
                        <InputField
                            className="register__form__password"
                            type="text"
                            label="country"
                            onChange={value => setCountry(value)}
                            value={country}
                        />

                        {/* City field */}
                        <InputField
                            className="register__form__password"
                            type="text"
                            label="city"
                            onChange={value => setCity(value)}
                            value={city}
                        />

                        {/* Address field */}
                    </Grid>
                    <Grid col={1}>
                        <InputField
                            className="register__form__password"
                            type="text"
                            label="Address"
                            onChange={value => setStreet(value)}
                            value={street}
                            validator={["required"]}
                            error={(label, er) => (error[label] = er)}
                        />
                    </Grid>
                </form>
                <div className="register-close">
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
                <span style={{ color: "#fd2e2e", alignSelf: "flex-start" }}>
                    ( * This field is Required )
                </span>
                <div className="register__form__submit">
                    <Button onclick={e => handleSubmit(e)} autoFocus size="md">
                        register
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Register
