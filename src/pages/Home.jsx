import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Helmet from "../components/Helmet"
import HeroSlider from "../components/HeroSlider"
import Section, { SectionTitle, SectionBody } from "../components/Section"
import PolicyCart from "../components/PolicyCard"
import Grid from "../components/Grid"
import ProductCart from "../components/ProductCard"

import policy from "../assets/fake-data/policy"
import banner from "../assets/data-main/fake/img/banner/banner-demo.png"
import heroSliderData from "../assets/data-main/fake/hero-slider"

import { set } from "../redux/loginSlice"
import { getAll } from "../redux/data-loading/productDataSlice"
import handleProductData from "../utils/handleProduct"

const Home = props => {
    const dispatch = useDispatch()

    if (props.match.path === "/login") {
        dispatch(set())
    }

    const productData = useSelector(state => state.productData.data)

    const fetchData = async () => {
        await dispatch(getAll())
    }

    useEffect(() => {
        if (productData.length === 0) fetchData()
    }, [])

    return (
        <Helmet title="Homepage">
            {/* hero slider */}
            <HeroSlider control={true} sliders={heroSliderData} auto={true} />
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {policy.map((item, index) => (
                            <Link key={index} to="/policy">
                                <PolicyCart
                                    icon={item.icon}
                                    desc={item.description}
                                    name={item.name}
                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>best seller</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {handleProductData
                            .getProducts(4, productData)
                            .map((item, index) => (
                                <ProductCart
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
            {/* end best selling section */}

            {/*new arrival section */}
            <Section>
                <SectionTitle>new arrival</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {handleProductData
                            .getProducts(8, productData)
                            .map((item, index) => (
                                <ProductCart
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
            {/* end new arrival section */}

            {/* end banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* banner */}

            {/*popular product section */}
            <Section>
                <SectionTitle>popular</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {handleProductData
                            .getProducts(8, productData)
                            .map((item, index) => (
                                <ProductCart
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
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home
