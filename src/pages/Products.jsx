import React, { useState, useCallback, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import Helmet from "../components/Helmet"
import Grid from "../components/Grid"
import ProductCard from "../components/ProductCard"
import CheckBox from "../components/CheckBox"
import Button from "../components/Button"

// import productsData from "../assets/data-main/fake/products"
import brands from "../assets/data-main/fake/brands"

import * as categoryData from "../redux/data-loading/categoryDataSlice"
import * as productData from "../redux/data-loading/productDataSlice"

const Products = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.categoryData.data)
    const product = useSelector(state => state.productData.data)

    async function fetchData() {
        try {
            await dispatch(categoryData.getAll())
            await dispatch(productData.getAll())
        } catch (error) {
            console.log("loi", error)
        }
    }

    useEffect(() => {
        if (category.length === 0 || product.length === 0) fetchData()
    }, [])

    useEffect(() => {
        setProducts(product)
    }, [product])

    const initFilter = {
        category: [],
        brand: []
    }
    // const productList = productsData.getAllProducts()

    const [products, setProducts] = useState(product)
    const [filter, setFilter] = useState(initFilter)

    //set type to filter when checked and unset when unchecked
    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({
                        ...filter /* copy all filter before (include: brands, category) */,
                        /* copy checked category before and add new checking cate */
                        category: [...filter.category, item.name]
                    })
                    break
                case "BRAND":
                    setFilter({
                        ...filter,
                        brand: [...filter.brand, item.display]
                    })
                    break
                default:
            }
        } else {
            switch (type) {
                case "CATEGORY":
                    /* filter category checked before except item unchecked to new variable */
                    const newCategory = filter.category.filter(
                        e => e !== item.name
                    )
                    /* replace new variable to filter.category  */
                    setFilter({
                        ...filter,
                        category: newCategory
                    })
                    break
                case "BRAND":
                    const newBrand = filter.brand.filter(
                        e => e !== item.display
                    )
                    setFilter({
                        ...filter,
                        brand: newBrand
                    })
                    break
                default:
            }
        }
        window.scrollTo(0, 0)
    }

    const updateProducts = useCallback(() => {
        let temp = product

        if (filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.category.name))
        }

        if (filter.brand.length > 0) {
            temp = temp.filter(e => filter.brand.includes(e.brand))
        }

        setProducts(temp)
    }, [filter, setProducts])

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle("active")

    const clearFilter = () => setFilter(initFilter)

    return (
        <Helmet title="Products">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__widget">
                        <div
                            className="catalog__filter__widget__close"
                            onClick={() => showHideFilter()}
                        >
                            <i className="bx bx-left-arrow-alt"></i>
                        </div>
                        <div className="catalog__filter__widget__title">
                            Category
                        </div>
                        <div className="catalog__filter__widget__content">
                            {category.map((item, index) => (
                                <div
                                    key={index}
                                    className="catalog__filter__widget__content__item"
                                >
                                    <CheckBox
                                        label={item.name}
                                        onChange={input =>
                                            filterSelect(
                                                "CATEGORY",
                                                input.checked,
                                                item
                                            )
                                        }
                                        checked={filter.category.includes(
                                            item.name
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Brands
                        </div>
                        <div className="catalog__filter__widget__content">
                            {brands.map((item, index) => (
                                <div
                                    key={index}
                                    className="catalog__filter__widget__content__item"
                                >
                                    <CheckBox
                                        label={item.display}
                                        onChange={input =>
                                            filterSelect(
                                                "BRAND",
                                                input.checked,
                                                item
                                            )
                                        }
                                        checked={filter.brand.includes(
                                            item.display
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onclick={clearFilter}>
                                Clear filter
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="catalog__filter__toggle">
                    <Button size="sm" onclick={showHideFilter}>
                        filter
                    </Button>
                </div>

                <div className="catalog__content">
                    <Grid gap={20} col={3} smCol={1} mdCol={2}>
                        {products.map((item, index) => (
                            <ProductCard
                                key={index}
                                img1={item.images[0]}
                                img2={item.images[1]}
                                name={item.name}
                                price={Number(item.price)}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default Products
