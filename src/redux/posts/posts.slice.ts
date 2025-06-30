import { GetPosts } from "@/components/apis/posts";
import { createSlice } from "@reduxjs/toolkit";

type PostsType={
    posts:Posts[]
}

const initialState:PostsType = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPosts.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      console.log(action); 
      if(action.payload.message === "success"){

          state.posts = action.payload
          console.log(state.posts);
      }
      
    });
    builder.addCase(GetPosts.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default PostsSlice.reducer
