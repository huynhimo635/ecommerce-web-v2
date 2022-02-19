import React from "react"

import { Link } from "react-router-dom"

import Grid from "./Grid"

//import logo from "../assets/images/Logo-2.png"
import logo from "../assets/data-main/fake/img/logo2-removebg.png"

const footerAboutLinks = [
    {
        display: "About Us",
        path: "/about"
    },
    {
        display: "Contact Us",
        path: "/about"
    },
    {
        display: "Careers",
        path: "/about"
    },
    {
        display: "Blogs",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Terms of Use",
        path: "/about"
    },
    {
        display: "Terms of Service",
        path: "/about"
    },
    {
        display: "Data Privacy Policy",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid gap={10} col={4} smCol={1} mdCol={2}>
                    <div>
                        <div className="footer__title">Contact Us</div>
                        <div className="footer__content">
                            <p>
                                Products & Orders: <strong>0123456789</strong>
                            </p>
                            <p>
                                Question: <strong>0123456789</strong>
                            </p>
                            <p>
                                Feedback: <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">About bikeToWork:</div>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            bikeToWork privacy policy
                        </div>
                        <div className="footer__content">
                            {footerCustomerLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt=""
                                    className="footer__logo"
                                />
                            </Link>
                        </p>
                        <p>
                            "Buy a bicycle or buy happiness, both are the same
                            things"
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
