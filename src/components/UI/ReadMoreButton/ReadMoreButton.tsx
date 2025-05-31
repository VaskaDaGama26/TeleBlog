import React from "react";
import classes from "./ReadMoreButton.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ReadMoreButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {label}
    </button>
  );
};

export default ReadMoreButton;
