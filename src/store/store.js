import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "../services/cartSlice"
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store;