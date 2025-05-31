import React from "react";
import classes from "./Details.module.css";
import Reactions from "../UI/Reactions/Reactions";
import back from "/keyboard_backspace.svg";
import type { Post } from "../../types/Post";

interface DetailsProps {
  postId: string;
  post: Post;
  onBack: () => void;
}

const Details: React.FC<DetailsProps> = ({ postId, post, onBack }) => {
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
          <img
            src="https://placehold.jp/6c70ac/d1d1d1/848x477.png"
            alt="Изображение"
          />
          <p className={classes.desc}>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
