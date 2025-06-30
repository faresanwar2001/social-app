import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./auth/auth.slice"
import PostsSlice from "./posts/posts.slice"

export const reduxStore = configureStore({
  reducer: {
    loginAuth: counterReducer,
    posts:PostsSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch