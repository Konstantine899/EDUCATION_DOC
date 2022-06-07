//src/components/itemList/itemList.js
import React from "react";
import "./itemList.css";
import { withData } from "../../hoc-helpers/index";
import SwapiService from "../../services/SwapiService";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item; // деструктурирую из полученного объекта id
    const label = renderLabel(item); // Прокидываю объект в App, в теле компонента ItemList обрабатываю функцией и достаю интересующие меня значения
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

//Экспортирую функцию получения людей из сервиса
const { getAllPeople } = new SwapiService();

// Передаю компонент и функцию получения данных в функция высшего порядка
export default withData(ItemList, getAllPeople);
