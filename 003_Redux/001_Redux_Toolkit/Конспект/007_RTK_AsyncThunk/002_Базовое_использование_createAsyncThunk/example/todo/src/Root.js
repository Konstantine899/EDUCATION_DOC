import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

export const Root = ({ store, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
