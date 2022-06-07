import React, { useState } from 'react';

export const InputV2 = () => {
  const [valueState, setState] = useState();

  const changeValue = ({ target }) => {
    const value = target.value;

    setState(value);
  };
  console.log(valueState);
  return (
    <input
      type={'number'}
      label={'V2'}
      value={valueState}
      onChange={changeValue}
      placeholder={'Введите V2'}
    />
  );
};
