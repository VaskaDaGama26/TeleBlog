import React, { useEffect } from "react";
import classes from "./Reactions.module.css";

import upGreen from "/ThumbUpGreen.svg";
import downRed from "/ThumbDownRed.svg";
import upAlt from "/ThumbUpAlt.svg";
import downAlt from "/ThumbDownAlt.svg";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  initReaction,
  likePost,
  dislikePost,
} from "../../../features/reactions/reactionsSlice";

interface ReactionsProps {
  postId: string;
}

const Reactions: React.FC<ReactionsProps> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const reaction = useAppSelector((state) => state.reactions[postId]);

  useEffect(() => {
    dispatch(initReaction(postId));
  }, [dispatch, postId]);

  if (!reaction) return null;

  const likeIcon = reaction.userVote === "like" ? upGreen : upAlt;
  const dislikeIcon = reaction.userVote === "dislike" ? downRed : downAlt;

  return (
    <div className={classes.reactions}>
      <button
        onClick={() => dispatch(likePost(postId))}
        className={classes.like}
      >
        <img src={likeIcon} alt="Thumb" />
        <p>{reaction.likes}</p>
      </button>
      <button
        onClick={() => dispatch(dislikePost(postId))}
        className={classes.dislike}
      >
        <img src={dislikeIcon} alt="Thumb" />
        <p>{reaction.dislikes}</p>
      </button>
    </div>
  );
};

export default Reactions;
