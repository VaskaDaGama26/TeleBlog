import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import reactionsReducer from "../features/reactions/reactionsSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    reactions: reactionsReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
