import React from "react";
import classes from "./ReadMoreButton.module.css";

interface ButtonProps {
  label: string;
}

const ReadMoreButton: React.FC<ButtonProps> = ({ label }) => {
  const handleClick = () => {};
  return (
    <button onClick={handleClick} className={classes.button}>
      {label}
    </button>
  );
};

export default ReadMoreButton;
