import React, { Component } from "react";
import "./BookList.css";
import BookListItem from "../bookListItem/bookListItem";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

export default BookList;
