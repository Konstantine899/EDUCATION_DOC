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
  //удаление объекта книги из массива
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }

  //добавление и обновление обекта книги в массиве
  if (index === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
  }
};

//Функция обновления списка покупок
const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;
  console.log("updateCartItem", quantity);
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

//Функция обновления заказа
const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  //ищу объект книги в коллекции книг
  const book = books.find(({ id }) => id === bookId);
  // Обновление элемента
  // ищу объект по index элемента в массиве
  //или же по другому получаю индекс существующего элемента
  const itemIndex = books.findIndex(({ id }) => id === bookId);
  //itemIndex переменная в которой содержится индекс массива, получаю искомый объект
  const item = cartItems[itemIndex];

  //Обновление списка покупок
  const newItem = updateCartItem(book, item, quantity);

  // Обновление элемента в массиве
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
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
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVE_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVE_FROM_CART":
      //Нахожу элемент с нужным id
      const item = state.cartItems.find(({ id }) => id === action.payload);
      // Уменьшаю заказ на количество книг в заказе
      return updateOrder(state, action.payload, -item.count);

    default:
      return state;
  }
};

export default reducer;
