//src/reducers/updateShoppingCart.js

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
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;

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
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

//Аналог функции reducer
const updateShoppingCart = (state, action) => {
  //initialState
  if (state === undefined) {
    return { cartItems: [], orderTotal: 0 };
  }
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVE_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVE_FROM_CART":
      //Нахожу элемент с нужным id
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      // Уменьшаю заказ на количество книг в заказе
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
