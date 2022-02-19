import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemsSlice"

import numberWithCommas from "../utils/numberWithCommas"
import convertToSlug from "../utils/convertToSlug"

const CartItem = props => {
    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = opt => {
        if (opt === "+") {
            dispatch(updateItem({ ...item, quantity: quantity + 1 }))
        }
        if (opt === "-") {
            //return setQuantity(quantity - 1 < 0 ? 0 : quantity - 1)
            dispatch(
                updateItem({
                    ...item,
                    quantity: quantity - 1 < 1 ? 1 : quantity - 1
                })
            )
        }
    }

    const remove = () => {
        dispatch(removeItem(item))
    }

    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={item.product.images[0]} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/products/${convertToSlug(item.product.name)}`}>
                        {`${item.product.name} - ${item.product.category.name} - ${item.product.brand}`}
                    </Link>
                </div>
                <div className="cart__item__info__price">
                    {numberWithCommas(Number(item.price))}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("-")}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("+")}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__info__del" onClick={() => remove()}>
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
