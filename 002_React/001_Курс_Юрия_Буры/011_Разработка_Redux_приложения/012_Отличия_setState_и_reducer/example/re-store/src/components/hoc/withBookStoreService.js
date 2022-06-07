//src/components/hoc/withBookStoreService.js
import React from "react";
import { BookStoreServiceConsumer } from "../bookStoreServiceContext/bookStoreServiceContext";

const withBookStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {/* Для того что бы получить данные я должен передать render функцию*/}
        {(bookStoreService) => {
          return <Wrapped {...props} bookStoreService={bookStoreService} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
};
export default withBookStoreService;
