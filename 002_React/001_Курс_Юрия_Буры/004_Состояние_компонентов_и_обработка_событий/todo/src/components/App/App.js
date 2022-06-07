import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import "./App.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
    filter: "all", // active || all || done
  };

  //Функция удаления Item
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      //сравниваю id в массиве и id полученное из props
      const idx = todoData.findIndex((element) => element.id === id);
      // [a,b,c,d,e]
      // [a,b, ,d,e]
      //копирую первую часть массива
      // копирую часть массива после удаляемого элемента
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  //Функция создания item
  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  //Функция добавления Item
  addItem = (text) => {
    //generate id ?
    const newItem = this.createTodoItem(text);
    // add element in array
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  //выношу дублируемый код из onToggleImportant и onToggleDone
  toggleProperty(arr, id, propName) {
    //сравниваю id в массиве и id полученное из props
    const idx = arr.findIndex((element) => element.id === id);
    // 1. update object
    //заношу старый item в отдельную переменную
    const oldItem = arr[idx];
    //копирую старый объект в новый и меняю лишь одно значение done
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    //2. construct new array
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  //функция отметки важного дела
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  //функция отметки выполненного дела
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  //Поиск элементов
  search(items, term) {
    return items.filter((item) => {
      if (term.length === 0) {
        return item;
      }
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  //Поиск того что вводит пользоватеь в input
  onSearch = (term) => {
    this.setState({ term: term });
  };

  //filter item-ов по значению active || all || done
  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      //items не выполненные, активные
      case "active":
        return items.filter((item) => {
          return !item.done;
        });
      // items выполненные
      case "done":
        return items.filter((item) => {
          return item.done;
        });
      default:
        return items;
    }
  }

  //Меняю значение filter: all || active || done
  onFilterChange = (filter) => {
    return this.setState({
      filter: filter,
    });
  };

  render() {
    const { todoData, term, filter } = this.state;
    //Поиск элементов
    const visibleItems = this.filter(this.search(todoData, term), filter);

    //Поиск отмеченных item
    const doneCount = todoData.filter((element) => {
      return element.done === true;
    }).length;

    //Поиск оставшихся не отмеченных item
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
