//src/components/Monitor/Monitor.js
import React from 'react';
import styled from 'styled-components';
import './Monitor.scss';

const DivWrapper = styled('div')``;

const Monitor = ({ today, prevHandler, todayHandler, nextHandler }) => {
  return (
    <DivWrapper className="DivWrapper">
      <div>
        <span className="DivWrapperMonth">{today.format('MMMM')}</span>
        <span>{today.format('YYYY')}</span>
      </div>

      <div>
        <button className="ButtonWrapper" onClick={prevHandler}>
          &lt;
        </button>
        <button className="ButtonWrapper TodayButton" onClick={todayHandler}>
          Текущий месяц
        </button>
        <button className="ButtonWrapper" onClick={nextHandler}>
          &gt;
        </button>
      </div>
    </DivWrapper>
  );
};

export default Monitor;
