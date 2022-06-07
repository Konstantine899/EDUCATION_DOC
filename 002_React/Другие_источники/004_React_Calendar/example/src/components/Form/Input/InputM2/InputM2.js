import React, { useState } from 'react';

export const InputM2 = () => {
  const [valueState, setState] = useState();

  const changeValue = ({ target }) => {
    const value = target.value;

    setState(value);
  };
  console.log(valueState);
  return (
    <input
      type={'number'}
      label={'M2'}
      value={valueState}
      onChange={changeValue}
      placeholder={'Введите M2'}
    />
  );
};
