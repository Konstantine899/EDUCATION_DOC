# Layout ����������. ������. Ant Design

������� �����. �����-�� ���������� �����.

� **ant.design** ���� ����� ��������� ��� **layout** <https://ant.design/components/layout/>.

![](img/001.jpg)

����� ��� ������� �������� ��������� ��������� �� ���������.

������ ��������� **Navbar.tsx**

```tsx
import React, { FC } from "react";
import { Layout, Row } from "antd";

const Navbar: FC = () => {
  return (
    <Layout.Header>
      <Row justify="end">
        <h1>String</h1>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

```

```tsx
import React, { FC } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Layout } from "antd";

const App: FC = () => {
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

**<Layout.Content>** - ��� ����� ���������.

���� �� ������ ��������� �� ����, �� ������ ��� ����� �� �����������. 

![](img/002.jpg)

��� ���� � ��� ��� ���������� ������������� ��������� css ����

![](img/003.jpg)

����� �������� �� ��� � ��������� **App.tsx**, ��� � � ���� �� �������. ������� � ���� �� ������� **App.css**. ������������ ����� ������ ��������� �������������. ����� �������� �������� ���� @, � � ������ ���� ���� ������ ~.

```css
/*App.css*/
@import '~antd/dist/antd.css';
```

```tsx
import React, { FC } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import "./App.css";

const App: FC = () => {
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

![](img/004.jpg)

��������� ������������� ������. ����������� ������� ��� ��� ������� � ������������. ������� �������� **Menu** <https://ant.design/components/layout/>

![](img/005.jpg)

```tsx
import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";

const Navbar: FC = () => {
    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key={1}>Login</Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;

```

������ ���� �� ������������.

![](img/006.jpg)

�� ����� �� �������������� ������������ ������ ����� ������� �� ���� ������������ �������� � �������. �� ������������. ������� ��� ��� �� ��� ������� �� ������ ��� ������������ �� �������� ������.

������������� ���������� **router** ����� **useHistory()**.

```tsx
import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";

const Navbar: FC = () => {
  const router = useHistory();
  return (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
            Login
          </Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

```

������ ����� �� �� ���� ����������� ������������ ��� ���. ��� ���������� ���������� **Navbar** �� �������.

```tsx
import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";

const Navbar: FC = () => {
  const router = useHistory();
  const auth = true;
  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>
              {/*��� ������������ ���� �������������*/}
              USER
            </div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log(`Logout`)} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

```

![](img/007.jpg)

