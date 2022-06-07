import React, { useState } from 'react';

export const HandlerTextArea = () => {
  const [valueState, setState] = useState();

  const changeTextArea = ({ target }) => {
    const value = target.value;

    setState(value);
  };

  console.log(valueState);

  return (
    <textarea
      rows={10}
      label={'TextArea'}
      value={valueState}
      onChange={changeTextArea}
      placeholder={'Введите'}
    ></textarea>
  );
};
