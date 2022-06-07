import React, { useState } from 'react';

export const InputQ1 = () => {
  const [valueState, setState] = useState();

  const changeValue = ({ target }) => {
    const value = target.value;

    setState(value);
  };
  console.log(valueState);
  return (
    <input
      type={'number'}
      label={'Q1'}
      value={valueState}
      onChange={changeValue}
      placeholder={'Введите Q1'}
    />
  );
};
