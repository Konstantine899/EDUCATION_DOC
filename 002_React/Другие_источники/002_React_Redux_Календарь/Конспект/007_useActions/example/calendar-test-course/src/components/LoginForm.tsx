//component LoginForm.jsx
import React, { FC, useState } from "react";
import { Button, Form, Input } from "antd";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {/*Отображение ошибки*/}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="User name"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
