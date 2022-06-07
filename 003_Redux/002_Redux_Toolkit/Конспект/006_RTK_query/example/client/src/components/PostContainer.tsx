import React, { useEffect, useState } from "react";
import { postAPI } from "../service/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  //Локальное состояние
  const [limit, setLimit] = useState(10);

  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, { pollingInterval: 1000 });

  return (
    <div>
      <div className="post__list">
        <button onClick={() => refetch()}>REFETCH</button>
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
