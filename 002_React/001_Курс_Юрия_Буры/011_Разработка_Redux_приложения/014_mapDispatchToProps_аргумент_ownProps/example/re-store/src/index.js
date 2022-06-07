//index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import BookStoreService from "./services/BookStoreService";
import { BookStoreServiceProvider } from "./components/bookStoreServiceContext/bookStoreServiceContext";

import store from "./store/store";

//Создаю инстанс сервиса
const bookStoreService = new BookStoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>
);
