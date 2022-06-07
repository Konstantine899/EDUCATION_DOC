import React, { useState, useEffect } from "react";

const SingleComment = ({ data: { text, id } }) => {
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (event) => {
    return event.target.value;
  };

  return (
    <form className="comment-item">
      <div className="comment-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
