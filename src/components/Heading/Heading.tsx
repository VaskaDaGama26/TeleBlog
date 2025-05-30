import type React from "react";
import classes from "./Heading.module.css";

interface HeadingProps {
  heading: string;
  underheading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, underheading }) => {
  return (
    <section className={classes.container}>
      <h1 className={classes.heading}>{heading}</h1>
      <p className={classes.under__heading}>{underheading}</p>
    </section>
  );
};

export default Heading;
