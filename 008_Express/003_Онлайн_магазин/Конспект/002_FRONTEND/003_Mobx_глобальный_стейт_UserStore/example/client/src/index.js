import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userStore from './store/userStore';
import deviceStore from './store/deviceStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{ user: new userStore(), device: new deviceStore() }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
