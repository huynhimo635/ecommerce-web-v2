import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Helmet from "../components/Helmet"
import Section, { SectionBody, SectionTitle } from "../components/Section"
import Grid from "../components/Grid"
import ProductCard from "../components/ProductCard"
import ProductView from "../components/ProductView"

import { getAll } from "../redux/data-loading/productDataSlice"
import handleProductData from "../utils/handleProduct"

const Product = props => {
    const dispatch = useDispatch()
    const productData = useSelector(state => state.productData.data)

    const product = handleProductData.getProductBySlug(
        props.match.params.slug,
        productData
    )
    const relatedProduct = handleProductData.getProducts(8, productData)

    const fetchData = async () => await dispatch(getAll())
    useEffect(() => {
        if (productData.length === 0) fetchData()
    }, [])

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={product && product.name}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>Relate Products</SectionTitle>
                <SectionBody>
                    <Grid gap={20} col={4} smCol={1} mdCol={2}>
                        {relatedProduct.map((item, index) => (
                            <ProductCard
                                key={index}
                                img1={item.images[0]}
                                img2={item.images[1]}
                                name={item.name}
                                price={Number(item.price)}
                                //slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
