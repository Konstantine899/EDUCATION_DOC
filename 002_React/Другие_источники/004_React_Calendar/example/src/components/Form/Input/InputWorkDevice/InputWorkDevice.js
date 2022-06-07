import React, { useState } from 'react';

export const InputWorkDevice = () => {
  const [valueState, setState] = useState();

  const changeValue = ({ target }) => {
    const value = target.value;

    setState(value);
  };
  console.log(valueState);
  return (
    <input
      type={'number'}
      label={'WorkDevice'}
      value={valueState}
      onChange={changeValue}
      placeholder={'Время работы прибора'}
    />
  );
};
