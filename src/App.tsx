import { useState } from "react";
import classes from "./index.module.css";
import Details from "./components/Details/Details";
import Heading from "./components/Heading/Heading";
import Search from "./components/Search/Search";
import PostGrid from "./components/PostGrid/PostGrid";
import type { Post } from "./types/Post";

function App() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  return (
    <div className={classes.wrapper}>
      {!selectedPost ? (
        <>
          <Heading
            heading="Блог"
            underheading="Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи"
          />
          <Search />
          <PostGrid onSelectPost={(post) => setSelectedPost(post)} />
        </>
      ) : (
        <Details
          postId={selectedPost.id}
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}

export default App;
