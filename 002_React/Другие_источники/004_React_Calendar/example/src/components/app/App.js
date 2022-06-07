//components/app/App.js
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Header from '../Calendar/Header';
import Monitor from '../Calendar/Monitor';
import CalendarGrid from '../Calendar/CalendarGrid';

import FormContainer from '../Form/FormContainer/FormContainer';

import './App.scss';

const FormCalendarWrapper = styled('div')``;
const ShadowWrapper = styled('div')``;
const BootstrapContainer = styled('div')``;
const BootstrapRow = styled('div')``;

function App() {
  moment.updateLocale('ru', { week: { down: 1 } });
  // const today = moment();
  const [today, setToday] = React.useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  window.moment = moment;

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'month'));
  };
  const todayHandler = () => {
    setToday(moment());
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, 'month'));
  };

  return (
    <>
      <BootstrapContainer className="container">
        <FormCalendarWrapper className="FormCalendarWrapper">
          <ShadowWrapper className="ShadowWrapper">
            <Header />
            <Monitor
              today={today}
              prevHandler={prevHandler}
              todayHandler={todayHandler}
              nextHandler={nextHandler}
            />
            <CalendarGrid startDay={startDay} today={today} />
          </ShadowWrapper>
        </FormCalendarWrapper>
        <FormContainer className="FormContainer" />
      </BootstrapContainer>
    </>
  );
}

export default App;
