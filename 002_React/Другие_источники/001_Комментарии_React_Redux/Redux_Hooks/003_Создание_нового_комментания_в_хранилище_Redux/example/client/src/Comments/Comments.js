import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import SingleComment from "./SingleComment/SingleComment";
import { commentCreate } from "../redux/actions/commentCreate";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");

  //Инициализирую функцию dispatch
  const dispatch = useDispatch();

  //Получаю значения из глобального state
  const { comments } = useSelector((state) => state.commentsReducer);
  console.log(comments);

  const handleInput = (event) => {
    setTextComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Создаю уникальный id для комментария
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((comment) => {
          return <SingleComment key={comment.id} data={comment} />;
        })}
    </div>
  );
};

export default Comments;
