// components modal CreateBrand
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый брэнд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Введите название бренда'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={'outline-success'}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
