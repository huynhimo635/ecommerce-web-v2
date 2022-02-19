import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import categoryApi from "../../api/categoryApi"

export const getAll = createAsyncThunk("categories/getAll", async () => {
    const categories = await categoryApi.getAll()
    return categories
})

const categoryDataSlice = createSlice({
    name: "categories",
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

const { reducer: categoryDataReducer } = categoryDataSlice
export default categoryDataReducer
