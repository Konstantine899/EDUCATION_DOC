//pages Event.tsx
import React, { FC, useState } from "react";
import EventCalendar from "../components/Calendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Layout>
      <EventCalendar events={[]} />
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
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;
