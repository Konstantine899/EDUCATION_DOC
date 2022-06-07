import React, { useState } from 'react';

export const InputQ2 = () => {
  const [valueState, setState] = useState();

  const changeValue = ({ target }) => {
    const value = target.value;

    setState(value);
  };
  console.log(valueState);
  return (
    <input
      type={'number'}
      label={'Q2'}
      value={valueState}
      onChange={changeValue}
      placeholder={'Введите Q2'}
    />
  );
};
