import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice"

const Store= configureStore({
    reducer:{
        cart: cartSlice
    }
});


export default Store;