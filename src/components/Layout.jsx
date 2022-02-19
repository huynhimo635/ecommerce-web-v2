import React, { useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Routes from "../routes/Routes"

import Header from "./Header"
import Footer from "./Footer"
import ProductViewModal from "./ProductViewModal"

import Loading from "./Loading"
import Login from "./Login"
import Register from "./Register"
import Notification from "./Notification"

import { getAll } from "../redux/data-loading/productDataSlice"

const Layout = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productData.data)
    const theme = useSelector(state => state.theme.value)

    useEffect(() => {
        const fetchData = async () => await dispatch(getAll())
        if (products.length === 0) fetchData()
    }, [])

    useEffect(() => {
        document.body.style.backgroundColor = theme ? "#fff" : "#1d1d1d"
    }, [theme])

    return (
        <BrowserRouter>
            <div className={` ${theme ? "theme-light" : "theme-dark"} layout`}>
                <Loading />
                <Login />
                <Register />
                <Notification />

                <Route
                    render={props => (
                        <div>
                            <Header {...props} />
                            <div className="container">
                                <div className="main">
                                    <Routes />
                                </div>
                            </div>
                            <ProductViewModal />
                            <Footer />
                        </div>
                    )}
                />
            </div>
        </BrowserRouter>
    )
}

export default Layout
