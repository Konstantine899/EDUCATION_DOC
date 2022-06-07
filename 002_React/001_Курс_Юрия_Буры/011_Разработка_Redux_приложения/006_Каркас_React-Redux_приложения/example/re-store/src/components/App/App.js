import React from "react";
import "./App.css";
import withBookStoreService from "../hoc/withBookStoreService";

const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBookStore());
  return <div>App</div>;
};

export default withBookStoreService()(App);
