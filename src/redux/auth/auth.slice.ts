import { loginAuth } from "@/components/apis/auth/login";
import {  createSlice } from "@reduxjs/toolkit";

type LoginInitial = {
  userToken: string |null;
};

const initialState: LoginInitial = {
  userToken: localStorage.getItem("tokenUser"),
};


const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(loginAuth.pending, (state, action)=>{
      console.log(action);
      
    })
    builder.addCase(loginAuth.fulfilled, (state, action)=>{
      const token = state.userToken = action.payload.data.token

      // Store in localStorage
      localStorage.setItem("tokenUser", token)
    })
    builder.addCase(loginAuth.rejected, (state, action)=>{
      console.log(action);
      
      
    })
  }

   
  
});

export default counterSlice.reducer;
