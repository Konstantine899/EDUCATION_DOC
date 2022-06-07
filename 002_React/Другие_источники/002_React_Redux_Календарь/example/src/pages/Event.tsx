//pages Event.tsx
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetEvents } = useActions();

  const { guests, events } = useTypedSelector((state) => state.event); // получаю гостей из состояния
  const { user } = useTypedSelector((state) => state.auth); // получаю пользователя из состояния

  useEffect(() => {
    fetchGuests();
    fetEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add Event</Button>
      </Row>
      {/*Модальное окно*/}
      <Modal
        title={"Add Event"}
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
