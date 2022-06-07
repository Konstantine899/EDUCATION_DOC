# ������ Reducer. ������ � Redux. ���������

*[�������������_authReducer](##�������������_authReducer)
*[���_useTypedSelector](##���_useTypedSelector)

�� ������ ������ ���� ���� **auth** ����������� � ��� � **AppRouter.tsx** � � **Navbar.tsx**

```tsx
import React, {FC} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";

const AppRouter: FC = () => {
    const auth = true;
    return auth ? (
        <Switch>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                />
            ))}
            <Redirect to={RouteNames.EVENT}/>
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map((route) => (
                <Route path={route.path} component={route.component} key={route.path}/>
            ))}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>
    );
};

export default AppRouter;

```

```tsx
import React, {FC} from "react";
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";

const Navbar: FC = () => {
    const router = useHistory();
    const auth = true;
    return (
        <Layout.Header>
            <Row justify="end">
                {auth ? (
                    <>
                        <div style={{color: "white"}}>
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

������ ������ ������� ������ **Reducer** ������� ��� ��� ����� �������� �� ����������� � ������ �� ������ �� ������ �
������� � ������������.

������ ����� **reducers** ������ ����� **auth**, � � ��� ������ **index.ts**. � ���� ����� �� ������� ����������� �������
**authReducer**. ��� ����� ��������������� ��� �������. ������� ����������� ��������� ��������� **state** � **action**.

```ts
//reducers auth index.ts
export default function authReducer(state, action) {
}

```

��� �� ����� ������ ������ ������� ����� ������� ��������� �������� ���������. ������� ��� **initialState** � � ���� ������
����� ���� ��� **auth:false**

```ts
//reducers auth index.ts

const initialState = {
    auth: false,
};

export default function authReducer(state, action) {
}

```

��������� **reducer** ������� �����. � ���� ������ ����������� **switch** **case**, ������� � ����������� �� **action.type** �����
���������� ������ ���������.

```ts
//reducers auth index.ts

const initialState = {
    auth: false,
};

export default function authReducer(state, action) {
    switch (action.type) {
        default:
            return state;
    }
}

```

������ ��� ���� ��� �� ���� **reducer** ���� ����� ��� ���������� �������� � �������� **rootReducer**.

```ts
/*store index.ts*/
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//��������� store
export type RootState = ReturnType<typeof store.getState>; // ������� ��� ������ ���������
// ������� ��� dispatch
export type AppDispatch = typeof store.dispatch;

```

�� ��� �� �� ������������ ���� ����, ��������� **reducer-��** � ��� ����� ���� �����, ������ ����� **reducer** �� �������� ���
���� **index.ts** ����, � ��� **reducer-��** ������� ����� � ��� � ���������� ����� ������������� ���� � ����� ������ �� ������
��������������.

```ts
// store reducers index.ts
import auth from "./auth"; // authReducer

export default {
    auth,
};

```

����� ����� ���� ������������ ���������� ���������. �� �� ����� �� �������� ��� � ���� ������. � ����� ������������ �
���� � ������� �� �������������� ������� �������.

���������� ���� ������ � ���������� ��� **reducers** � ���� � ������� ������������� ������� �������. � ������� ���� ������
**reducers** � **combineReducers(reducers)**. **reducers** - ��� ������. ���� ������ � **combineReducers** ���������� �������� �� ���
����� ��������� ��� **combineReducers(..., ..., ..., � �.�.)**

```ts
/*store index.ts*/
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers"; // ���������� ��� ��������

const rootReducer = combineReducers(reducers); // ������� ������ �� ����� reducers

export const store = createStore(rootReducer, applyMiddleware(thunk));

//��������� store
export type RootState = ReturnType<typeof store.getState>; // ������� ��� ������ ���������
// ������� ��� dispatch
export type AppDispatch = typeof store.dispatch;

```

��� ������� ���� ���� �������� ������ � ��� �������������.

<br/>
<br/>
<br/>

## �������������_authReducer

����������� ������� � **authReducer**. ������ ��� ���������� ��� ������������. ������������ **state** � ������������ ���
��������� **actions** � �������� ��� ��������� ��������.

�� ����� ������ ����� **auth** ������ ��� ���� ���� � ������� ��� **types.ts**. ����� �� ������������ **interface AuthState**
������� ����� ���������� ����, ������� ����� � ����� ���������.

```ts
//store reducers auth ��������� ����
export interface AuthState {
    auth: boolean;
}

```

������ � ��� ����� **action** � ������� �������� �� ����� �������� �������� ����� ���� �� **false** � �� **true** ��������������.

�� ����� ��� ���������� ������� ��������� **interface** ������� ����� ��������� ���� **action**

```ts
//store reducers auth ��������� ����
export interface AuthState {
    auth: boolean;
}

//interface ������� ��������� ���� action
interface SetAuthAction {
    type: "SET_AUTH"; // ������������ ���� ��� action
    payload: boolean; // ��������� ������ ������� ���� action ���������
}

```

�� ��� �� �� ���������� ������� ��� **action**, �� ����� �� �������� ��������� **enum**(������������) � ������� �� ��� ��� ����
����� �������.

```ts
//store reducers auth ��������� ����
export interface AuthState {
    auth: boolean;
}

//������������ �����
export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
}

//interface ������� ��������� ���� action
interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH; // ������������ ���� ��� action
    payload: boolean; // ��������� ������ ������� ���� action ���������
}

```

�� � �������������� ������� �� **actions** � ��� �� ����, ��� ���������� ��������� **interface** � ������� �� ����� ���������
���������� ��� � ��������� **payload** ������� ����� ������� ���� **action**.

![](img/001.jpg)

���� ��� � ��� ���� ����� **action**.

��� �� ����� ������� ��������� ���������� ��� ������� ��� ��� ���������� � ���� ����� ����������.

```ts
//store reducers auth ��������� ����
export interface AuthState {
    auth: boolean;
}

//������������ �����
export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
}

//interface ������� ��������� ���� action
export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH; // ������������ ���� ��� action
    payload: boolean; // ��������� ������ ������� ���� action ���������
}

// ��������� interfaces
export type AuthAction = SetAuthAction; // ��������� ���������� ����� ��� |

```

������ �� ����� ������������ ������� � **reducer**. ��-������ ��������� ��� ��������� ��� **AuthState**. � ��-������ ��������
��� ���������� ��� ������� �� ������� ��� **action**.

```ts
//store reducers auth index.ts
import {AuthAction, AuthState} from "./types";

const initialState: AuthState = {
    auth: false,
};

export default function authReducer(state = initialState, action: AuthAction) {
    switch (action.type) {
        default:
            return state;
    }
}

```

��� �� **reducer** ������ ������ ���������� ��������. **authReducer** - ��� �������. �� ����� � �������� ������������� ��������
�� ��� �� ��������� **AuthState**. **Reducer** ������ ������ ���������� ��������� ����.

![](img/002.jpg)

```ts
//store reducers auth index.ts
import {AuthAction, AuthState} from "./types";

const initialState: AuthState = {
    auth: false,
};

export default function authReducer(
    state = initialState,
    action: AuthAction
): AuthState {
    switch (action.type) {
        default:
            return state;
    }
}

```

������ � ���� ������� **case** ������� � ������� �� ������������ **case AuthActionsEnum.SET_AUTH:** � ������ �� ��� ��
���������� ��������� **return { ...state };** �� ��� � ���������� ����� **auth** ������� �� �������� �� **action**. ������
���������� � �������� **auth: action.payload**, �.�. �� �������� �������� ������� � ������� � ���� **auth**.

� **AppRouter** c ������� ���� **useSelector**, �� ����� ������ ��� ��� ���� **auth** �� ��������� ��������. �� ����������� ���� ���
�� ����� � ����� ����� �� �������� � ����� � ��� ���� **reducers**, ����� ��������� � ��� ���������.

![](img/003.jpg)

�� ����� �� ����� ������� ���� ����������� ��� ������� ��� ����� ��������������� �������� � ������ ������.

��� ������ ��������� ����� ���������� ��� **auth** ����� �������� ��� **isAuth**

```ts
//store reducers auth index.ts
import {AuthAction, AuthActionsEnum, AuthState} from "./types";

const initialState: AuthState = {
    isAuth: false,
};

export default function authReducer(
    state = initialState,
    action: AuthAction
): AuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload};
        default:
            return state;
    }
}

```

```ts
//store reducers auth ��������� ����
export interface AuthState {
    isAuth: boolean;
}

//������������ �����
export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
}

//interface ������� ��������� ���� action
export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH; // ������������ ���� ��� action
    payload: boolean; // ��������� ������ ������� ���� action ���������
}

// ��������� interfaces
export type AuthAction = SetAuthAction; // ��������� ���������� ����� ��� |

```

## ���_useTypedSelector

������ ������ ���. ������ ����� � ������� �� **hooks**. � ��� ����� ��� ���������������� ���� ������� �� ����� � ����
���������� ���������. ������ ��� � �������� ������ ��� c ��������������� ��������� **useTypedSelector.ts**. ��� ����� ������
������� ��� ��������� ������� � ���� �������.

������������ ������ ���������, �������� �� **useTypedSelector**. � ����� �� ������� �� ���. ��� ����� ����������� ���
**TypedUseSelectorHook** ������� ������������� **react-redux**.

```ts
//hooks
import {TypedUseSelectorHook} from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<any>;

```

� �������� **Generic** ��� ��� �������� ��� ��� ������� �������� �� ��������� ������ ���������� �.�. **RootState**. � ����������
��� **useSelector** �� ������ **react-redux**.

```ts
//hooks
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

```

���� �� ������ �������, �� ��������.

������ ���� � **AppRouter** �� ������������� ���� �����, �� �� ����� ������ ����� � ��� ���� **reducer**, ����� � ��� ���� ����.
�.�. � ��� ���� ����������� � ��� �� ����� ������ �� **reducer** ��������.

![](img/004.jpg)

```tsx
import React, {FC} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector((state) => state.auth);
    return isAuth ? (
        <Switch>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                />
            ))}
            <Redirect to={RouteNames.EVENT}/>
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map((route) => (
                <Route path={route.path} component={route.component} key={route.path}/>
            ))}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>
    );
};

export default AppRouter;

```

������ �������� ���� **isAuth** � ��� ���� �� ��� ����������. �� ����� ��� ������������ ��� � **AppRouter** ��� � � �����
**Navbar**.

```tsx
import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
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

������ � **store/reducers/auth/index.ts** ��������� �������� **isAuth** �� �������� **true**.

�.�. ���������� ����� **false**

```ts
//store reducers auth index.ts
import { AuthAction, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
  isAuth: false,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
}

```

��� �������� ���������� � ����� ������� �� �������� ������.

![](img/005.jpg)

����� �� **true**, ����� ���������� �� ������� ��������. **Navbar** ������������ ��� ��������� ���������.

� ��� ��������� ������ ���������� �����. �� ��������� ��� **redux**, �� ��������� �������������.







