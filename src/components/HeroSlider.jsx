import React, { useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Button from "./Button"

const HeroSlider = props => {
    const sliders = props.sliders

    const timeOut = props.timeOut ? props.timeOut : 3000

    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === sliders.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    }, [activeSlide, sliders])

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? sliders.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut)
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])

    return (
        <div className="hero-slider">
            {sliders.map((item, index) => (
                <HeroSliderItem
                    key={index}
                    item={item}
                    active={index === activeSlide}
                />
            ))}
            {props.control ? (
                <div className="hero-slider__control">
                    <div
                        className="hero-slider__control__item"
                        onClick={prevSlide}
                    >
                        <i className="bx bx-chevron-left"></i>
                    </div>
                    <div className="hero-slider__control__item">
                        <div className="index">
                            {activeSlide + 1}/{sliders.length}
                        </div>
                    </div>
                    <div
                        className="hero-slider__control__item"
                        onClick={nextSlide}
                    >
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

HeroSlider.propTypes = {
    sliders: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const HeroSliderItem = props => (
    <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
        <div className="hero-slider__item__info">
            <div className={`hero-slider__item__info__title color-main`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info__description">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info__btn">
                <Link to={props.item.path}>
                    <Button icon="bx bx-cart" animate={true}>
                        Read more
                    </Button>
                </Link>
            </div>
        </div>
        <div className="hero-slider__item__image">
            <div className={`shape bg-main`}></div>
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default HeroSlider
