import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"

import { useDispatch } from "react-redux"
import { addItem } from "../redux/shopping-cart/cartItemsSlice"
import { remove } from "../redux/product-modal/productModalSlice"
import { set } from "../redux/notificationSlice"

import Button from "./Button"

import numberWithCommas from "../utils/numberWithCommas"

const ProductView = props => {
    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined)
        product = {
            name: "",
            price: 0,
            images: [],
            category: "",
            brand: "",
            countInStock: 0
        }

    const img = product.images[0]
    const [previewImg, setPreviewImg] = useState(img)

    const [descExpand, setDescExpand] = useState(false)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = type => {
        if (type === "plus") {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.images[0])
        setDescExpand(false)
        setQuantity(1)
    }, [product])

    const addToCart = () => {
        console.log(quantity)
        dispatch(
            addItem({
                id: product.id,
                quantity: quantity,
                price: product.price
            })
        )
        dispatch(set())
    }

    const goToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                quantity: quantity,
                price: product.price
            })
        )
        dispatch(remove())
        props.history.push("/cart")
    }

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    {product.images.map((item, index) => (
                        <div
                            className="product__images__list__item"
                            onClick={() => setPreviewImg(item)}
                            key={index}
                        >
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-desc ${descExpand ? "expand" : ""}`}>
                    <div className="product-desc__title">Description</div>
                    <div
                        className="product-desc__content"
                        dangerouslySetInnerHTML={{
                            __html: product.description
                        }}
                    ></div>
                    <div className="product-desc__toggle">
                        <Button
                            size="sm"
                            onclick={() => setDescExpand(!descExpand)}
                        >
                            {descExpand ? "close" : "read more"}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.name}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Category</div>
                    <span className="product__info__item__detail">
                        {product.category.name}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Brand</div>
                    <span className="product__info__item__detail">
                        {product.brand}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Quantity</div>
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("minus")}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("plus")}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Stocking</div>
                    <span className="product__info__item__detail">
                        {numberWithCommas(Number(product.countInStock))}
                    </span>
                </div>
                <div className="product__info__item">
                    <Button onclick={() => addToCart()}>add to cart</Button>
                    <Button onclick={() => goToCart()}>buy now</Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)
