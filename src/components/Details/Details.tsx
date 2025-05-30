import React from "react";
import classes from "./Details.module.css";
import Reviews from "../UI/Reviews/Reviews";
import back from "/keyboard_backspace.svg";

const Details = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.back}>
          <img src={back} alt="Вернуться к статьям" />
          <button className={classes.back__button}>Вернуться к статьям</button>
        </div>

        <Reviews />
      </div>
      <div className={classes.column}>
        <h1 className={classes.heading}>
          Что нужно знать об эффективной интернет-рекламе?
        </h1>
        <div className={classes.content}>
          <img
            className={classes.img}
            src="https://placehold.co/848x477"
            alt=""
          />
          <p className={classes.desc}>
            Интернет - огромный ресурс, позволяющий продвигать свои услуги
            практически на любую аудиторию. Ежедневно в сеть выходит более 5
            миллиардов людей - каждый из них может увидеть вашу рекламу и стать
            вашим потенциальным клиентом. Даже небольшого процента этой
            аудитории будет достаточно для эффективного продвижения ваших услуг.
            Это огромное преимущество интернета перед другими каналами
            коммуникации. И в этом же заключается его главный недостаток -
            переизбыток информации и высокая конкуренция.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
