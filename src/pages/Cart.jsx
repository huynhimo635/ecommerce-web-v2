import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Helmet from "../components/Helmet"
import Button from "../components/Button"
import CartItem from "../components/CartItem"
import Order from "../components/Order"

import handleProductData from "../utils/handleProduct"
import { getAll } from "../redux/data-loading/productDataSlice"
import { set } from "../redux/loginSlice"

import numberWithCommas from "../utils/numberWithCommas"

const Cart = () => {
    const checkOutRef = useRef(null)
    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cartItems.value)
    const productData = useSelector(state => state.productData.data)

    const initialProduct =
        productData.length > 0
            ? handleProductData.getCartItemsInfo(cartItems, productData)
            : []

    const [products, setProducts] = useState(initialProduct)
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const fetchData = async () => {
        await dispatch(getAll())
    }
    useEffect(() => {
        if (productData.length === 0) fetchData()

        if (localStorage.getItem("tokenCustomer"))
            checkOutRef.current.classList.add("active")
    }, [])

    useEffect(() => {
        setProducts(handleProductData.getCartItemsInfo(cartItems, productData))
    }, [productData])

    useEffect(() => {
        setProducts(handleProductData.getCartItemsInfo(cartItems, productData))
        setTotalProducts(
            cartItems.reduce((total, item) => total + Number(item.quantity), 0)
        )
        setTotalPrice(
            cartItems.reduce(
                (total, item) =>
                    total + Number(item.quantity) * Number(item.price),
                0
            )
        )
    }, [cartItems])

    const onCheckOut = e => {
        e.preventDefault()

        if (
            localStorage.getItem("tokenCustomer") &&
            localStorage.getItem("tokenCustomer").length > 0
        ) {
            checkOutRef.current.classList.add("active")
            document.location.href = "#checkout"
        } else {
            dispatch(set())
        }
    }

    return (
        <Helmet title="Cart">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>Total Products: {totalProducts} </p>
                        <div className="cart__info__txt__price">
                            <span>Total price</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="block" onclick={e => onCheckOut(e)}>
                            Proceed to checkout
                        </Button>
                        <Button size="block">
                            <Link to="/products">Continue Shopping</Link>
                        </Button>
                    </div>
                </div>
                <div className="cart__list">
                    {products.map(item =>
                        item.product !== undefined ? (
                            <CartItem key={item.id} item={item} />
                        ) : (
                            ""
                        )
                    )}
                    <hr id="checkout" />
                    <div className="check-out" ref={checkOutRef}>
                        <Order totalPrice={totalPrice} />
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
