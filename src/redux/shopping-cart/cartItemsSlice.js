import { createSlice } from "@reduxjs/toolkit"

const items =
    localStorage.getItem("cartItems") !== null &&
    localStorage.getItem("cartItems") !== ""
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []

const initialState = { value: items }

export const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const item = state.value.filter(e => e.id === newItem.id)

            if (item.length > 0) {
                state.value = state.value.filter(e => e.id !== newItem.id)

                state.value = [
                    ...state.value,
                    {
                        ...newItem,
                        quantity: newItem.quantity + item[0].quantity
                    }
                ]
            } else {
                state.value = [
                    ...state.value,
                    {
                        ...newItem
                    }
                ]
            }
            localStorage.setItem("cartItems", JSON.stringify(state.value))
        },
        updateItem: (state, action) => {
            const itemUpdate = action.payload
            const item = state.value.filter(e => e.id === itemUpdate.id)

            if (item.length > 0) {
                state.value = state.value.filter(e => e.id !== itemUpdate.id)

                state.value = [
                    ...state.value,
                    {
                        ...itemUpdate
                    }
                ]
            }
            localStorage.setItem("cartItems", JSON.stringify(state.value))
        },
        removeItem: (state, action) => {
            const itemDel = action.payload

            state.value = state.value.filter(e => e.id !== itemDel.id)

            localStorage.setItem("cartItems", JSON.stringify(state.value))
        },
        removeAll: state => {
            state.value = []
            localStorage.setItem("cartItems", JSON.stringify(state.value))
        }
    }
})

export const { addItem, updateItem, removeItem, removeAll } =
    cartItemsSlice.actions
export default cartItemsSlice.reducer
