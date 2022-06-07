import React from "react";
import { postAPI } from "../service/PostService";
import PostItem from "./PostItem";

const PostContainer_2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
  return (
    <div className="post__list">
      {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>Произошла ошибка</h1>}
      {/*{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}*/}
    </div>
  );
};

export default PostContainer_2;
