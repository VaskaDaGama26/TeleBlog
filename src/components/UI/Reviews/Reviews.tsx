import React from "react";
import classes from "./Reviews.module.css";

import upGreen from "/ThumbUpGreen.svg";
import downRed from "/ThumbDownRed.svg";

import upAlt from "/ThumbUpAlt.svg";
import downAlt from "/ThumbDownAlt.svg";

const Reviews = () => {
  function getRandomInt(min: number, max: number): number {
    if (min > max) throw new Error("Min не может быть больше, чем Max");

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber1 = getRandomInt(1, 50);
  const randomNumber2 = getRandomInt(1, 50);
  return (
    <div className={classes.reviews}>
      <div className={classes.like}>
        <img src={upGreen} alt="Thumb" />
        <p>{randomNumber1}</p>
      </div>
      <div className={classes.dislike}>
        <img src={downRed} alt="Thumb" />
        <p>{randomNumber2}</p>
      </div>
    </div>
  );
};

export default Reviews;
