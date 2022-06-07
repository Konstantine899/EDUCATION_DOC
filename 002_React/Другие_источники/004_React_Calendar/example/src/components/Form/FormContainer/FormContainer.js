// containers/FormContainer/FormContainer.js
import React from 'react';

import './FormContainer.scss';

import Button from '../Button';

import InputQ1 from '../Input/InputQ1';
import InputQ2 from '../Input/InputQ2';
import InputT1 from '../Input/InputT1';
import InputT2 from '../Input/InputT2';
import InputV1 from '../Input/InputV1';
import InputV2 from '../Input/InputV2';
import InputM1 from '../Input/InputM1';
import InputM2 from '../Input/InputM2';
import InputWorkDevice from '../Input/InputWorkDevice';
import InputWorkDeviceError from '../Input/InputWorkDeviceError';
import HandlerTextArea from './../TextArea/HandlerTextArea';

const FormContainer = () => {
  return (
    <form>
      <div className="InputWrapper">
        <InputQ1 />
        <InputQ2 />
        <InputT1 />
        <InputT2 />
        <InputV1 />
        <InputV2 />
        <InputM1 />
        <InputM2 />
        <InputWorkDevice />
        <InputWorkDeviceError />
      </div>
      <div>
        <HandlerTextArea />
      </div>
      <div>
        <Button />
      </div>
    </form>
  );
};

export default FormContainer;
