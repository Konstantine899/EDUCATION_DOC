import React from "react";
import BookList from "../bookList/bookList";
import ShoppingCartTable from "../shoppingCartTable/shoppingCartTable";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
