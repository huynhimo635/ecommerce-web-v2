import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "../../api/userApi"

export const getMe = createAsyncThunk("users/getMe", async email => {
    const users = await userApi.getAll()
    const res = users.find(item => item.email === email)
    if (res !== undefined) return res
    return []
})

const getMeSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [getMe.pending]: state => {
            state.loading = true
        },

        [getMe.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
            state.data = []
        },

        [getMe.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        }
    }
})

const { reducer: getMeReducer } = getMeSlice
export default getMeReducer
