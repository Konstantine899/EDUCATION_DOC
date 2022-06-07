import React from "react";
import BookListContainer from "../bookListContainer/bookListContainer";
import ShoppingCartTable from "../shoppingCartTable/shoppingCartTable";

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
