import { useEffect } from "react";
import PostCard from "../UI/PostCard/PostCard";
import classes from "./PostGrid.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPosts } from "../../features/posts/postsSlice";
import type { Post } from "../../types/Post";

interface PostGridProps {
  onSelectPost: (post: Post) => void;
}

const PostGrid: React.FC<PostGridProps> = ({ onSelectPost }) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const loading = useAppSelector((state) => state.posts.loading);
  const loaded = useAppSelector((state) => state.posts.loaded);
  const query = useAppSelector((state) => state.search.query);

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchPosts());
    }
  }, [dispatch, loaded]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className={classes.container}>
      {filteredPosts.map((card, index) => (
        <PostCard
          size={index === 0 ? "large" : "small"}
          isFeatured={index === 0}
          key={card.id}
          postId={card.id}
          title={card.title}
          body={card.body}
          onReadMore={() => onSelectPost(card)}
        />
      ))}
    </div>
  );
};

export default PostGrid;
