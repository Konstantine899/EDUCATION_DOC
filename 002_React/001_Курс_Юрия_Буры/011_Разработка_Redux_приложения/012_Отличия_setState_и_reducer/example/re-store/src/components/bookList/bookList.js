import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../bookListItem/bookListItem";
import withBookStoreService from "../hoc/withBookStoreService";
import { booksLoaded, booksRequested } from "../../actions";
import compose from "../../utils";
import "./BookList.css";
import Spinner from "../Spinner/Spinner";

class BookList extends Component {
  componentDidMount() {
    // 1. Получить данные
    const { bookStoreService, booksLoaded, booksRequested } = this.props;
    //каждый раз когда будем переходить на BookList
    // c поощью action creator booksRequested будет устанавливаться loading:true
    booksRequested();
    //загрузка данных
    bookStoreService.getBookStore().then((data) => {
      console.log(data);
      // 2. Передать dispatch действие action в store
      booksLoaded(data);
    });
  }

  render() {
    const { books, loading } = this.props;
    //Если loading:true идет загрузка
    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

//Эта функция определяет, какие свойства
// получит компонент из Redux
const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
