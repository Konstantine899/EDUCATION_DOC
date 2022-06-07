import React, { useState } from 'react';

export const InputT1 = () => {
  const [valueState, setState] = useState();

  const changeValue = ({ target }) => {
    const value = target.value;
    setState(value);
  };

  console.log(valueState);

  return (
    <input
      type={'number'}
      label={'T1'}
      value={valueState}
      onChange={changeValue}
      placeholder={'Введите T1'}
    />
  );
};
