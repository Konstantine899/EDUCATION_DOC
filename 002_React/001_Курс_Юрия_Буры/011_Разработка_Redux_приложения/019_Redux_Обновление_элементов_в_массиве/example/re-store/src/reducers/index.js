//src/components/reducers/index.js
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

//Функция обновления массива и элемента в нем
const updateCartItems = (cartItems, item, index) => {
  if (index === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
  }
};

//Функция обновления списка покупок
const updateCartItem = (book, item = {}) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return { id, title, count: count + 1, total: total + book.price };
};

const reducer = (state = initialState, action) => {
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
      //ищу объект книги в коллекции книг
      const book = state.books.find((book) => book.id === bookId);
      // Обновление элемента
      // ищу объект по index элемента в массиве
      const itemIndex = state.books.findIndex(({ id }) => id === bookId);
      //itemIndex переменная в которой содержится индекс массива, получаю искомый объект
      const item = state.cartItems[itemIndex];

      //Обновление списка покупок
      const newItem = updateCartItem(book, item);

      // Обновление элемента в массиве
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      };

    default:
      return state;
  }
};

export default reducer;
