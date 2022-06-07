import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate } from "../../redux/actions/commentUpdate";

const SingleComment = ({ data: { text, id } }) => {
  const [commentText, setCommentText] = useState("");

  // Инициализирую функцию dispatch
  const dispatch = useDispatch();

  //Функция обновления ввода
  // Почему именно над useEffect? Не объясняет мелочи абсолютно. Ненавижу таких лекторов.
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  //Функция обработки ввода
  const handleInput = (event) => {
    return setCommentText(event.target.value);
  };
  return (
    <form onSubmit={handleUpdate} className="comment-item">
      <div className="comment-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
