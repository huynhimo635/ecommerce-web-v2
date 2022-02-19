import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productApi from "../../api/productApi"

export const getAll = createAsyncThunk("products/getAll", async () => {
    const products = await productApi.getAll()
    return products
})

const productDataSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [getAll.pending]: state => {
            state.loading = true
        },

        [getAll.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },

        [getAll.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        }
    }
})

const { reducer: productDataReducer } = productDataSlice
export default productDataReducer
