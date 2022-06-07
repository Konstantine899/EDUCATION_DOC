//components/Button/Button.js
import React from 'react';
import './Button.scss';

const Button = (props) => {
  console.log(props.style);
  return (
    <button
      className="btn btn-primary"
      style={props.style}
      onClick={props.action}
    >
      {props.title}
      Отправить
    </button>
  );
};

export default Button;
