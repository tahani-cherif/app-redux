import { createSlice } from "@reduxjs/toolkit";


const user=createSlice({
    name:"user",
    initialState:{
        data:[],
        loading:false,
        insuccess:false,
        message:""
    }
})