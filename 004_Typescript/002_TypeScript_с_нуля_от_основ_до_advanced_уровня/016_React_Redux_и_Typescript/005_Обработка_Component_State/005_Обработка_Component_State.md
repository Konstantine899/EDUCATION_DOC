# 005_Обработка_Component_State

Рассмотрим простой state на примере счетчика.

```tsx
import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
    color?: string;
}

class App extends React.Component<AppProps> {
    state = {counter: 0};

    onIncrement = (): void => {
        this.setState({counter: this.state.counter + 1});
    };

    onDecrement = (): void => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                {this.state.counter}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));

```

Вроде просто но на самом деле здесь есть скрытая сложность. Так как тема большая рассмотрим в следующем видео.