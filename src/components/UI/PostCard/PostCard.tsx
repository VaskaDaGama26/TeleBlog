import React from "react";
import classes from "./PostCard.module.css";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import Reviews from "../Reviews/Reviews";

interface PostCardProps {
  title: string;
  isFeatured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ title, isFeatured = false }) => {
  return (
    <article className={classes.article}>
      <img
        className={classes.article__image}
        src={
          isFeatured === false
            ? "https://placehold.co/558x273"
            : "https://placehold.co/1140x600"
        }
        alt="Изображение"
      />

      <div className={classes.article__content}>
        <h2 className={classes.content__heading}>{title}</h2>
        {isFeatured === true ? (
          <p className={classes.content__desc}>
            Интернет - огромный ресурс, позволяющий продвигать свои услуги
            практически на любую аудиторию. Ежедневно в сеть выходит более 5
            миллиардов людей - каждый из них может увидеть вашу рекламу и стать
            вашим потенциальным клиентом. Рассказываем, как правильно
            настраивать рекламу в интернете.
          </p>
        ) : (
          ""
        )}

        <div className={classes.content__row}>
          <Reviews />
          <ReadMoreButton label="Читать далее" />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
