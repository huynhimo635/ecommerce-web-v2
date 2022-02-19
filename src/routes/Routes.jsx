import React from "react"

import { Route, Switch } from "react-router-dom"

import Home from "../pages/Home"
import Products from "../pages/Products"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import Contact from "../pages/Contact"
import Customer from "../pages/Customer"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:slug" component={Product} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/customer" component={Customer} />

            <Route path="/login" component={Home} />
            <Route path="/register" component={Home} />
        </Switch>
    )
}

export default Routes
