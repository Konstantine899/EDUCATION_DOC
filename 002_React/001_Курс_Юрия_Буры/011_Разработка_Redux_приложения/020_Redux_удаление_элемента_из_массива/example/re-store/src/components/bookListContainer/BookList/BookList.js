//src/components/bookListContainer/bookList.js
import React from "react";
import BookListItem from "../../bookListItem/bookListItem";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <BookListItem
            book={book}
            onAddedToCart={() => onAddedToCart(book.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
