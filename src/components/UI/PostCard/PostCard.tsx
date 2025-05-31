import React from "react";
import classes from "./PostCard.module.css";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import Reactions from "../Reactions/Reactions";

import small from "/558-273.svg";
import big from "/1140-600.svg";

interface PostCardProps {
  postId: string;
  title: string;
  body: string;
  isFeatured?: boolean;
  onReadMore: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  postId,
  title,
  body,
  isFeatured = false,
  onReadMore,
}) => {
  return (
    <article className={classes.article}>
      <img
        className={classes.article__image}
        // src={
        //   isFeatured === false
        //     ? "https://placehold.co/558x273"
        //     : "https://placehold.co/1140x600"
        // }
        src={isFeatured === false ? small : big}
        alt="Изображение"
      />

      <div className={classes.article__content}>
        <h2 className={classes.content__heading}>{title}</h2>
        {isFeatured === true ? (
          <p className={classes.content__desc}>{body}</p>
        ) : (
          ""
        )}

        <div
          className={
            isFeatured ? classes.content__row__featured : classes.content__row
          }
        >
          <div className={isFeatured ? classes.reactions__featured : ""}>
            <Reactions postId={postId} />
          </div>

          <ReadMoreButton onClick={onReadMore} label="Читать далее" />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
