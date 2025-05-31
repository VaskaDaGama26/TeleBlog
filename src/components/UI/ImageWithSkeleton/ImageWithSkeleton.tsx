import React, { useState } from "react";
import classes from "./ImageWithSkeleton.module.css";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

interface ImageWithSkeletonProps {
  width: string;
  height: string;
  src: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  width,
  height,
  src,
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      {!loaded && <Skeleton width={width} height={height} />}
      <img
        className={classes.article__image}
        src={src}
        alt="Изображение"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageWithSkeleton;
