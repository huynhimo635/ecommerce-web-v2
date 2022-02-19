import React from "react"
import PropTypes from "prop-types"

import { useDispatch } from "react-redux"
import { set } from "../redux/product-modal/productModalSlice"

import { Link } from "react-router-dom"
import Button from "./Button"

import numberWithCommas from "../utils/numberWithCommas"
import convertToSlug from "../utils/convertToSlug"

const ProductCart = props => {
    const dispatch = useDispatch()

    return (
        <div className="product-cart">
            <Link to={`/products/${convertToSlug(props.name)}`}>
                <div className="product-cart__img">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt="" />
                </div>
                <h3 className="product-cart__name">{props.name}</h3>
                <div className="product-cart__price">
                    {numberWithCommas(props.price)}
                    {/* <span className="product-cart__price__old">
            <del>{numberWithCommas(399000)}</del>
          </span> */}
                </div>
            </Link>
            <div className="product-cart__btn">
                <Button
                    size="sm"
                    animate={true}
                    icon="bx bx-cart"
                    onclick={() => dispatch(set(convertToSlug(props.name)))}
                >
                    Buy now
                </Button>
            </div>
        </div>
    )
}

ProductCart.propTypes = {
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
    // slug: PropTypes.string.isRequired
}

export default ProductCart
