import React, { FC } from "react";
import { Button, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";
import { DatePicker } from "antd";

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Date Event" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Select>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
