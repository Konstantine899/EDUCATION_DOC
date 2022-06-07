//src/components/itemList/itemList.js
import React from "react";
import PropTypes from "prop-types";
import "./itemList.css";

const ItemList = (props) => {
  console.log(props);
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

  // Установка пропсов по умолчанию
  ItemList.defaultProps = {
    onItemSelected: () => {},
  };

  ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    //data - это массив любых объектов
    data: PropTypes.arrayOf(PropTypes.object).isRequired, // data - в нашем случае это массив объектов
    children: PropTypes.func.isRequired,
  };

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
