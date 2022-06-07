import React from "react";

const SingleComment = (props) => {
  console.log(`SingleComment props >`, props);
  return (
    <form className="comment-item">
      <div className="comment-item-delete">&times;</div>
      <input type="text" />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
