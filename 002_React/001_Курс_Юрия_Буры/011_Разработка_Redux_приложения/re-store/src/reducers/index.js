//src/components/reducers/index.js
import updateBookList from "./updateBookList";
import updateShoppingCart from "./updateShoppingCart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
