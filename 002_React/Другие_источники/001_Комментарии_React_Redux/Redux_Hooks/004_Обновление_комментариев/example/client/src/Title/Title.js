import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/actions/inputText";

const Title = (props) => {
  // console.log(`props title`, props);
  //Инициализирую поля глобального стейта
  const { text } = useSelector((state) => state.inputReducer);

  //Инициализирую функцию dispatch
  const dispatch = useDispatch();

  //функция отсеживающая событие input
  const handleChange = (event) => {
    dispatch(inputText(event.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Title;
