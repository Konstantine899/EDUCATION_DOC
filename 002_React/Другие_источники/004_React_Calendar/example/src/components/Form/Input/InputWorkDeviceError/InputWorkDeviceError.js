import React, { useState } from 'react';

export const InputWorkDeviceError = () => {
  const [valueState, setState] = useState();

  const changeValue = ({ target }) => {
    const value = target.value;
    setState(value);
  };
  console.log(valueState);

  return (
    <input
      type={'number'}
      label={'InputWorkDeviceError'}
      value={valueState}
      onChange={changeValue}
      placeholder={'Время работы прибора с ошибкой'}
    />
  );
};
