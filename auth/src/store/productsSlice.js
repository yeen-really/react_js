import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://6579dae11acd268f9afa4460.mockapi.io/api/hw/products')
    const products = await response.json()
    return products;
})

const initialState = {
    list: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
           const {products} = action.payload;
           state.list = products;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {})
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.list = action.payload;
            console.log(action.payload)
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {})
    }
})

export const getProducts = (state) => state.products.list;
export const {addProducts} = productsSlice.actions;
export default productsSlice.reducer;