//src/components/actions/index.js

// Action Creators
const booksRequested = () => {
  return { type: "FETCH_BOOKS_REQUEST" };
};

const booksLoaded = (newBooks) => {
  return { type: "FETCH_BOOKS_SUCCESS", payload: newBooks };
};

const booksError = (error) => {
  return { type: "FETCH_BOOKS_FAILURE", payload: error };
};

export const bookAddedToCart = (bookId) => {
  return { type: "BOOK_ADDED_TO_CART", payload: bookId };
};

//Удаление одной книги
export const bookRemoveFromCart = (bookId) => {
  return { type: "BOOK_REMOVE_FROM_CART", payload: bookId };
};
//удаление всех книг
export const allBooksRemoveFromCart = (bookId) => {
  return { type: "ALL_BOOKS_REMOVE_FROM_CART", payload: bookId };
};

// Функция получения книг
const fetchBooksOld = (bookStoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBookStore()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};

//action creator с использованием thunkMiddleware
const fetchBooks = (bookStoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookStoreService
    .getBookStore()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};

export { fetchBooks };
