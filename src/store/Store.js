import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/Todo/CartSLice"

 export const AppStore= configureStore({
    reducer:{
        cart:cartReducer,
    }
 });


