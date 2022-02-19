import { createSlice } from "@reduxjs/toolkit"

const registerSlice = createSlice({
    name: "register",
    initialState: {
        value: false
    },
    reducers: {
        set: state => {
            state.value = true
        },
        remove: state => {
            state.value = false
        }
    }
})

export const { set, remove } = registerSlice.actions
export default registerSlice.reducer
