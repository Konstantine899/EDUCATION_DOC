// components/TextArea/TextArea.js
import React from 'react';
import './TextArea.scss';

const TextArea = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <textarea
        className="form-control"
        name={props.name}
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextArea;
