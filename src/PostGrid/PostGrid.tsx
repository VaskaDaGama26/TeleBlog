import React from "react";
import PostCard from "../components/UI/PostCard/PostCard";
import classes from "./PostGrid.module.css";

const PostGrid = () => {
  return (
    <div style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}>
      <PostCard isFeatured={true} title="Проектируем TODO-сервис с нуля" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PostCard title="Проектируем TODO-сервис с нуля" />
        <PostCard title="Проектируем TODO-сервис с нуля" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PostCard title="Проектируем TODO-сервис с нуля" />
        <PostCard title="Проектируем TODO-сервис с нуля" />
      </div>
    </div>
  );
};

export default PostGrid;
