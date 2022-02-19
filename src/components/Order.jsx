import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import InputField from "./form/InputField"
import Button from "./Button"
import Grid from "./Grid"
import Helmet from "./Helmet"
import { SectionTitle } from "./Section"

import { getMe } from "../redux/user/getMeSlice"
import orderApi from "../api/orderApi"
import { set } from "../redux/notificationSlice"
import { removeAll } from "../redux/shopping-cart/cartItemsSlice"

const Order = props => {
    let history = useHistory()

    const changeInfoRef = useRef(null)
    const dispatch = useDispatch()
    const user = useSelector(state => state.getMe.data)
    const cartItems = useSelector(state => state.cartItems.value)

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getMe(localStorage.getItem("email")))
        }
        if (user.length === 0) fetchData()
    }, [])

    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const orderItems = []
    const totalPrice = props.totalPrice

    useEffect(() => {
        if (user !== undefined) {
            setAddress(user.street)
            setPhone(user.phone)
            setCity(user.city)
            setCountry(user.country)
        }
    }, [user])

    const handleSubmit = async e => {
        e.preventDefault()

        if (cartItems.length === 0)
            return alert(
                "There are no products in the cart. Let's shopping now!"
            )
        else {
            cartItems.forEach(item =>
                orderItems.push({ product: item.id, quantity: item.quantity })
            )

            const data = {
                orderItems,
                city,
                country,
                totalPrice,
                phone,
                status: "pending",
                shippingAddress1: address,
                shippingAddress2: "",
                user: user._id,
                zip: "0000"
            }

            try {
                await orderApi.add(data)
                dispatch(removeAll())
                dispatch(set())
                history.push("/")
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <Helmet title="Payment">
            <div className="order">
                <div className="order__customer">
                    <SectionTitle>Payment Info</SectionTitle>
                    <div className="order__customer__name">
                        {user && user.name}
                    </div>
                    {user && (
                        <div className="order__customer__info">
                            <div className="order__customer__info__user">
                                <label>Address: {user.street}</label>
                                <label>Phone: {user.phone}</label>
                                <label>Country: {user.country}</label>
                                <label>City: {user.city}</label>
                            </div>
                            <Button
                                size="sm"
                                onclick={() =>
                                    changeInfoRef.current.classList.toggle(
                                        "active"
                                    )
                                }
                            >
                                Change
                            </Button>
                            <div className="break-line">
                                <br />
                                <hr />
                                <br />
                            </div>
                        </div>
                    )}
                </div>
                <div className="order__form" ref={changeInfoRef}>
                    <SectionTitle>Change Info</SectionTitle>
                    <form className="form order__form__change__info">
                        <Grid gap={0} col={1}>
                            <Grid gap={10} col={3} mdCol={1}>
                                <InputField
                                    type="text"
                                    placeHolder="Country"
                                    onChange={value => setCountry(value)}
                                    value={country}
                                />
                                <InputField
                                    type="text"
                                    placeHolder="City"
                                    onChange={value => setCity(value)}
                                    value={city}
                                />
                                <InputField
                                    type="text"
                                    placeHolder="Phone"
                                    validator={["number"]}
                                    error={er =>
                                        er
                                            ? e => onkeydown(e.preventDefault)
                                            : ""
                                    }
                                    onChange={value => setPhone(value)}
                                    value={phone}
                                />
                            </Grid>
                            <InputField
                                type="text"
                                placeHolder="Address"
                                onChange={value => setAddress(value)}
                                value={address}
                            />
                        </Grid>
                    </form>
                    <div className="break-line">
                        <br />
                        <hr />
                        <br />
                    </div>
                </div>
                <div className="order__form-of-payment">
                    <SectionTitle>Form of payment</SectionTitle>
                    <div className="order__form-of-payment__input">
                        <div className="order__form-of-payment__input__item">
                            <input
                                type="radio"
                                value="Female"
                                name="form-of-payment"
                                defaultChecked
                            />
                            <label>Cash</label>
                        </div>
                    </div>
                    <div className="submit-order">
                        <Button onclick={e => handleSubmit(e)}>
                            Check out
                        </Button>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Order
