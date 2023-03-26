import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from '../utils/status'
import { BASE_URL } from '../utils/apiUrl'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },

    reducers: {
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        },
    },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
  return async function fetchProductsThunk(dispatch){
    dispatch(setStatus(STATUS.LOADING));
    try {
        const response = await fetch(`${BASE_URL}products`);
        const data = await response.json();
        dispatch(setProducts(data));
        dispatch(setStatus(STATUS.IDLE));
    } catch(error) {
        dispatch(setStatus(STATUS.ERROR));
    }
  }
}