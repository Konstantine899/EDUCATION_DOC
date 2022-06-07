import React from "react";
import BookList from "../bookList/bookList";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
    },
    {
      id: 2,
      title: "Release It",
      author: "Michel T. Nygard",
    },
  ];
  return <BookList books={books} />;
};

export default HomePage;
