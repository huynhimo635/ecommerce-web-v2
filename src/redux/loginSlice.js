import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: "login",
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

export const { set, remove } = loginSlice.actions
export default loginSlice.reducer
