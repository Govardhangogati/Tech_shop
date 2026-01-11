import { configureStore } from "@reduxjs/toolkit";

import cartOperation from "./cart/CartSlice"

export const store=configureStore({
    reducer:{
        cart:cartOperation
    }
}
    
)
