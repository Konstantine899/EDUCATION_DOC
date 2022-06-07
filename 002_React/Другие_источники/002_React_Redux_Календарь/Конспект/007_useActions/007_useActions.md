# 007_useActions

��� ������ ��� ���������� ���������� ���� **actionCreators** �.�. ���������������� **dispatch**.

![](img/001.jpg)

���� ������� ���� ����� �������������� ���� ������� ���� ��������� ���. � ����� **hooks** ������ **useActions**. ��� ����� ���������� ������� ��� � ������� ��������, ����� � ����� ������� **actionCreators** ������� **bind** **dispatch**.

```ts
//hooks useActions.ts
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
};

```
� �� ����� �� ����� ���� ��� ���������� ������� **actionCreators** � ������� **bind** ���� **dispatch**. ��� ����� ������������� ������� **bindActionCreators()** �� ������ **redux**. ������ ���������� ��� ������� ��� ��� ������� **actionCreators**, ������� **actions**, � ������ **dispatch**.

![](img/002.jpg)

**actions** ��������� ����� ���������� � ��� ��� ����������, �� ����� �� �������� � �������� ��� �����. ��������� ���������� � ��� �� ������� ��������� ����� ������ �����.

�� ������ ������ � ��� ���� **action-creators** � ��� ���� ������ ��� ������ **reducer**

```ts
//store reducers auth action-creators.ts
// ������ �������
import {
  AuthActionsEnum,
  SetAuthAction,
  SetUserAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import axios from "axios";

export const AuthActionCreators = {
  //���������� actionCreators
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),
  //����������� actionCreators
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      // ��������� ������ ������������ �������
      try {
        dispatch(AuthActionCreators.setIsLoading(true)); // �������� ��� ����� ��������
        // ��� ���� ��� �� ������� ��������� ��������
        setTimeout(async () => {
          //������� ������������
          const response = await axios.get<IUser[]>("./users.json");
          //��� ������������
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          // �������� ������ �� ������������
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            //����� ��������� �� ��������������
            dispatch(AuthActionCreators.setIsAuth(true));
            //������� ���������� � ������������
            dispatch(AuthActionCreators.setUser(mockUser));
            // ������ ��������� ��������
            dispatch(AuthActionCreators.setIsLoading(false));
          } else {
            dispatch(
              AuthActionCreators.setError(`Incorrect username or password`)
            );
          }
        }, 1000);
      } catch (e) {
        dispatch(AuthActionCreators.setError("Error Login"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    // ��������� ������ ������������ �������
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (e) {
      // ����� ������� ��� ����� ��������� ������ ��������� �� �����
      dispatch(AuthActionCreators.setError("Error Logout"));
    }
  },
};

```

�� ���� **reducers** ����� ���� �����. � �� �������� ����� ��� ��� **action-creators** ����� ������� � ����� �����. 

��-����� ������ ����� **reducers** �� �������� ���� **action-creators.ts**. ������ ����� ������ �������������� ��������� ���������� ������ **allActionCreators = {}**. � � ���� ������ �� ����� ������������� ��� �� **action-creators** ������� �� ������ ������ � ��� �������.

```ts
//reducers action-creators.ts ��� action-creators
import { AuthActionCreators } from "./auth/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  //...
  //...
};

```

������������ ������� � ����. � � ������� **bindActionCreators** ������ ���������� ������� ���� ������  **allActionCreators**.

```ts
//hooks useActions.ts
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/action-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};

```

������ ����� �� ����� ������� ��� ��� ���� acti**on-creator** ��� �� ����������� ������������ **dispatch**. �� ����� ��������������� ����� **useActions**

![](img/003.jpg)

� ��������� �� ���������� ��� **action-creators**, �� ����� ����� �������� ������ ��� ���, � ������ ��� ������� ������� �������� �.�. ������� **dispatch**.

![](img/004.jpg)

�������� ������� ����� ��� ����.

```tsx
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
      {/*����������� ������*/}
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

```

���� ����� ������ � ��� **logout**

```tsx
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
      {/*����������� ������*/}
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

```

![](img/006.jpg)

![](img/007.jpg)

![](img/008.jpg)

�� ������ ������ ���� ���� ��������. ���� �� ����������� � ������� ��������, �� �� ����� ������� �� �������� ������. ���� � **localStorage** � ��� ������������ ���������. � ����������� �� ���� ���� ���� **auth** � **localstorage** ��� ���, �� ����� ������������ ���� ���������� ���� �����������.

��� ����� �������� � ��������� **App**. � ������������� **useEffect** c ������ �������� ������������, ��� ���� ��� �� **callback** ������� �� � ���� ��� �������� ��������� ���� �������� ��� ������ ������� ����������. � ������ ������ **callback** �� ������� ������� ��������

```tsx
import React, { FC, useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const App: FC = () => {
    const { setUser, setIsAuth } = useActions();
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setUser({ username: localStorage.getItem("username" || "") } as IUser);
            setIsAuth(true);
        }
    }, []);

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;

```

��� ��� ��������. ���� �� �� �������� � �������� ��������, �� ����� �� �� ���������� �� �����-������ ����� �� �������� � � ����������� �� ����� ������������� �� ������ ��� ��� �������� � ���������.