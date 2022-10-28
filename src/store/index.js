import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";


const store =configureStore({
    reducer:{
         cart:cartslice.reducer,
    }
});

export default store;