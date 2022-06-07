//src/components/reducers/index.js
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return { ...state, books: action.payload, loading: false, error: null };
    case "FETCH_BOOKS_FAILURE":
      return { ...state, books: [], loading: false, error: action.payload };

    case "BOOK_ADDED_TO_CART":
      //Получаю id книги
      const bookId = action.payload;
      //ищу книгу в коллекции книг
      const book = state.books.find((book) => book.id === bookId);
      //формирую новый объект
      const newItem = {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price,
      };
      // добавляю newItem в массив cartItems
      return { ...state, cartItems: [...state.cartItems, newItem] };

    default:
      return state;
  }
};

export default reducer;
