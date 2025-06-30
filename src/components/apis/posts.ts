import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPosts = createAsyncThunk("posts", async () => {
  // Token
  const token = localStorage.getItem("tokenUser");

  const res = await axios.get("https://linked-posts.routemisr.com/posts", {
    headers: {
       token:token || "",
    },
  });

  const payload:ApiResponse<{posts:Posts[]}> = res.data;

  if("error" in payload){
    throw new Error(payload.error)
  }
  
  return payload;  
});
