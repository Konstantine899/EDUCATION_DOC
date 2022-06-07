//src/services/bookStoreService
import { Component } from "react";

class BookStoreService extends Component {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Release It",
      author: "Michel T. Nygard",
      price: 45,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg",
    },
  ];
  getBookStore() {
    return new Promise((resolve, reject) => {
      if (resolve) {
        setTimeout(() => resolve(this.data), 7000);
      } else {
        reject(() => console.log(`Что то пошло не так`));
      }
    });
  }
}

export default BookStoreService;
