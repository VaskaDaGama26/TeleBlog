import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { Post } from "../../types/Post";

interface PostsState {
  posts: Post[];
  loading: boolean;
  loaded: boolean;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  loaded: false,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.map((post: any) => ({
    ...post,
    id: post.id.toString(),
  }));
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.loaded = true;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
