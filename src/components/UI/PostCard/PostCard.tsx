import React from "react";
import classes from "./PostCard.module.css";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import Reactions from "../Reactions/Reactions";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { imageConfig } from "../../../config/ImageConfig";

type Size = "small" | "large";

interface PostCardProps {
  size: Size;
  postId: string;
  title: string;
  body: string;
  isFeatured?: boolean;
  onReadMore: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  size,
  postId,
  title,
  body,
  isFeatured = false,
  onReadMore,
}) => {
  const { width, height, src } = imageConfig[size];

  return (
    <article className={classes.article}>
      <ImageWithSkeleton
        classes={classes.article__image}
        src={src}
        width={width}
        height={height}
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
