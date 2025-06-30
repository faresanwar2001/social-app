import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAuth = createAsyncThunk("auth/login", async (values:LoginResponse) => {
  const res = await axios.post(
    "https://linked-posts.routemisr.com/users/signin",
    values
  );

  return res;
});