import React from "react";
import classes from "./PostCard.module.css";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import Reactions from "../Reactions/Reactions";

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
        src={
          isFeatured
            ? "https://placehold.jp/6c70ac/d1d1d1/1140x600.png"
            : "https://placehold.jp/6c70ac/d1d1d1/558x273.png"
        }
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
