//component EventCalendar.tsx
import React, { FC } from "react";
import { Calendar } from "antd";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    //value преобразовываю к типу Date
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );
    return (
      <>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </>
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
