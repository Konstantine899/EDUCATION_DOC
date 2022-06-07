import React, { useState } from "react";
import SingleComment from "./SingleComment/SingleComment";

const Comments = (props) => {
  // console.log(`comments props >`, props);
  const [textComment, setTextComment] = useState("");

  const handleInput = (event) => {
    console.log("input >>>", event.target.value);
    setTextComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT >", textComment);
  };
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      <SingleComment />
    </div>
  );
};

export default Comments;
