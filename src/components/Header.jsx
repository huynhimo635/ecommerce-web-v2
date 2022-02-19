import React, { useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import logo from "../assets/data-main/fake/img/logo2-removebg.png"
import Theme from "./Theme"

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Products",
        path: "/products"
    },
    // {
    //     display: "Accessories",
    //     path: "/accessories"
    // },
    {
        display: "Contact",
        path: "/contact"
    }
]

const Header = () => {
    //set active for current site
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    //Shrink when scrolling
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("shrink")
            } else {
                headerRef.current.classList.remove("shrink")
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    //toggle menu onClick
    const toggleRef = useRef(null)
    const themeRef = useRef(null)
    const toggleMenu = () => {
        toggleRef.current.classList.toggle("active")
        themeRef.current.classList.toggle("active")
    }
    const handleToggle = () => {
        toggleRef.current.classList.toggle("active")
        themeRef.current.classList.toggle("active")
    }

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div
                        className="header__menu__mobile-toggle"
                        onClick={toggleMenu}
                    >
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__menu__left" ref={toggleRef}>
                        <div
                            className="header__menu__left__close"
                            onClick={toggleMenu}
                        >
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {mainNav.map((item, index) => (
                            <div
                                key={index}
                                className={`header__menu__item header__menu__left__item 
                                ${index === activeNav ? "active" : ""}`}
                                onClick={() => handleToggle()}
                            >
                                <Link to={item.path}>{item.display}</Link>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <div className="theme-btn" ref={themeRef}>
                                <Theme />
                            </div>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link
                                to={
                                    localStorage.getItem("tokenCustomer") &&
                                    localStorage.getItem("tokenCustomer")
                                        .length > 0
                                        ? "/customer"
                                        : "/login"
                                }
                            >
                                <i className="bx bx-user"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
