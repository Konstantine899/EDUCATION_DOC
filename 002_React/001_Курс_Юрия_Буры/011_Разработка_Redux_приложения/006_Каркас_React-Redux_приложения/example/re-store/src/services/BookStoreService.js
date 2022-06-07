//src/services/bookStoreService
import React, { Component } from "react";

class BookStoreService extends Component {
  getBookStore() {
    return [
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
  }
}

export default BookStoreService;
