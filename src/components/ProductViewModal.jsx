import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { remove } from "../redux/product-modal/productModalSlice"

import ProductView from "./ProductView"
import Button from "./Button"

import handleProductData from "../utils/handleProduct"

const ProductViewModal = () => {
    const dispatch = useDispatch()

    const productSlug = useSelector(state => state.productModal.value)
    const productData = useSelector(state => state.productData.data)

    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        setProduct(handleProductData.getProductBySlug(productSlug, productData))
    }, [productSlug])

    return (
        <div
            className={`product-view__modal ${
                product === undefined ? "" : "active"
            }`}
        >
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button size="sm" onclick={() => dispatch(remove())}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
