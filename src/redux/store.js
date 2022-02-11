import {configureStore} from "@reduxjs/toolkit";
import {basketSlice} from "./basket/basketSlice";
import {productSlice} from "./product/productSlice";


export const store = configureStore({
    reducer:{
        basket:basketSlice.reducer,
        product:productSlice.reducer,

    }
})