import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
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

export const { set, remove } = notificationSlice.actions
export default notificationSlice.reducer
