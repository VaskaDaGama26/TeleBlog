import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Vote = "like" | "dislike" | null;

type Reaction = {
  likes: number;
  dislikes: number;
  userVote: Vote;
};

type ReactionsState = {
  [postId: string]: Reaction;
};

const initialState: ReactionsState = {};

const reactionsSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    initReaction: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      if (!state[postId]) {
        state[postId] = {
          likes: Math.floor(Math.random() * 50) + 1,
          dislikes: Math.floor(Math.random() * 50) + 1,
          userVote: null,
        };
      }
    },
    likePost: (state, action: PayloadAction<string>) => {
      const post = state[action.payload];
      if (post && post.userVote === "like") {
        post.likes--;
        post.userVote = null;
      } else if (post && post.userVote !== "like") {
        if (post.userVote === "dislike") {
          post.dislikes--;
        }
        post.likes++;
        post.userVote = "like";
      }
    },
    dislikePost: (state, action: PayloadAction<string>) => {
      const post = state[action.payload];
      if (post && post.userVote === "dislike") {
        post.dislikes--;
        post.userVote = null;
      } else if (post && post.userVote !== "dislike") {
        if (post.userVote === "like") {
          post.likes--;
        }
        post.dislikes++;
        post.userVote = "dislike";
      }
    },
  },
});

export const { initReaction, likePost, dislikePost } = reactionsSlice.actions;
export default reactionsSlice.reducer;
