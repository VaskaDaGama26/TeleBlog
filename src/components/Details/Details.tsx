import React from "react";
import classes from "./Details.module.css";
import Reactions from "../UI/Reactions/Reactions";
import back from "/keyboard_backspace.svg";
import type { Post } from "../../types/Post";

import "react-loading-skeleton/dist/skeleton.css";
import ImageWithSkeleton from "../UI/ImageWithSkeleton/ImageWithSkeleton";
import { imageConfig } from "../../config/ImageConfig";

interface DetailsProps {
  postId: string;
  post: Post;
  onBack: () => void;
}

const Details: React.FC<DetailsProps> = ({ postId, post, onBack }) => {
  const { width, height, src } = imageConfig["medium"];

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <button onClick={onBack} className={classes.back__button}>
          <img src={back} alt="Вернуться к статьям" />
          Вернуться к статьям
        </button>

        <Reactions postId={postId} />
      </div>
      <div className={classes.column}>
        <h1 className={classes.heading}>{post.title}</h1>
        <div className={classes.content}>
          <ImageWithSkeleton src={src} width={width} height={height} />
          <p className={classes.desc}>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
