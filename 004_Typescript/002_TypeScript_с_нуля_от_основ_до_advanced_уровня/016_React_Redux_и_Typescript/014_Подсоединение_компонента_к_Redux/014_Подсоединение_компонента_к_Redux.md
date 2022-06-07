# 014_Подсоединение_компонента_к_Redux

И так после того как мы установили reducers нам нужно сделать доступным этот список для нашего App компоненета для того
что бы мы могли отобразить этот список на экране.

Прежде всего для компонента App нужно сделать доступным fetchTodos action creator что бы мы могли извлекать список todos
и наш компонент будет их отображать.

Так же нам нужна функция которая берет список Todo из нашего Redux store и предоставляет их компоненту App.

```tsx
//components App.tsx
import React from "react";
import {connect} from "react-redux";
import {Todo, fetchTodos} from "../actions";
import {StoreState} from "../reducers";

export class App extends React.Component {
    render() {
        return <div>Hello</div>;
    }
}

```

Давайте опишем interface который будет описывать все props которые мы будем получать в этом компоненте.

```ts
//components App.tsx
import React from "react";
import {connect} from "react-redux";
import {Todo, fetchTodos} from "../actions";
import {StoreState} from "../reducers";

interface AppProps {
    todos: Todo[];

    fetchTodos(): any;
}

export class App extends React.Component<AppProps> {
    render() {
        return <div>Hello < /div>;
    }
}

```

Давайте теперь удостоверимся что fetchTodos и Todo они существуют в объекте props. Для этого мне нужно использовать
mapStateToProps функцию и соеденить ее при помощи connect.

```ts
//components App.tsx
import React from "react";
import {connect} from "react-redux";
import {Todo, fetchTodos} from "../actions";
import {StoreState} from "../reducers";

interface AppProps {
    todos: Todo[];

    fetchTodos(): any;
}

export class App extends React.Component<AppProps> {
    render() {
        return <div>Hello < /div>;
    }
}

const mapStateToProps = ({todos}: StoreState): { todos: Todo[] } => {
    return {todos};
};

```

state укащываю interface StoreState. Вместо state могу сразу деструктурировать todos. Так же я могу предоставить
оннотацию типа возвращаемого объекта. Эта функцию будет возвращать какой-то объект которая будет иметь свойство todos и
тип его будет массив Todo[].

И теперь это все мне нужно соеденить вместе используюя connect. Прописываю export const и далее мы можем указать
название класса, но что бы небыло коллизий имен переименую сам класс App на _App. А при соеденении указываю App.

```tsx
//components App.tsx
import React from "react";
import {connect} from "react-redux";
import {Todo, fetchTodos} from "../actions";
import {StoreState} from "../reducers";

interface AppProps {
    todos: Todo[];

    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
    render() {
        return <div>Hello</div>;
    }
}

const mapStateToProps = ({todos}: StoreState): { todos: Todo[] } => {
    return {todos};
};

export const App = connect(mapStateToProps, {fetchTodos})(_App);

```

Теперь мы должны иметь возможность внутри компонента определить жизненный цикл.