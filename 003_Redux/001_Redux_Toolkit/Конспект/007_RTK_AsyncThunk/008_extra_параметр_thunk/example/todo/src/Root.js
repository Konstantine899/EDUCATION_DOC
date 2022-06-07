import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
