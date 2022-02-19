import { configureStore } from "@reduxjs/toolkit"

import productModalSlice from "./product-modal/productModalSlice"
import cartItemsSlice from "./shopping-cart/cartItemsSlice"
import loginSlice from "./loginSlice"
import registerSlice from "./registerSlice"
import getMeReducer from "./user/getMeSlice"
import loadingSlice from "./loadingSlice"
import notificationSlice from "./notificationSlice"
import themeSlice from "./themeSlice"

import categoryDataReducer from "./data-loading/categoryDataSlice"
import productDataReducer from "./data-loading/productDataSlice"

export const store = configureStore({
    reducer: {
        register: registerSlice,
        login: loginSlice,
        getMe: getMeReducer,

        notification: notificationSlice,
        loading: loadingSlice,
        productModal: productModalSlice,
        cartItems: cartItemsSlice,
        theme: themeSlice,

        categoryData: categoryDataReducer,
        productData: productDataReducer
    }
})
