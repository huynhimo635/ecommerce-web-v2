import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value:
            localStorage.getItem("theme") &&
            localStorage.getItem("theme") === true
                ? true
                : false
    },
    reducers: {
        set: state => {
            state.value = !state.value
            localStorage.setItem("theme", state.value)
        }
    }
})

export const { set } = themeSlice.actions
export default themeSlice.reducer
