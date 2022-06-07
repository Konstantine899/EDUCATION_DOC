//api/api.js

//Получение данных
export const loadTodos = async () => {
  return await fetch("http://localhost:3000/entities")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

//Создание todo
export const createTodo = async (title) => {
  return await fetch("http://localhost:3000/entities", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    //Сериализую данные для передачи
    body: JSON.stringify({ title, completed: false }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

// Удаление
export const removeTodo = async (id) => {
  await fetch(`http://localhost:3000/entities/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json);
  //в reducer в action.payload передаю полученный id с клиента
  return id;
};

//Обновление
export const toggleTodo = async (id, fields) => {
  //Делаю запрос на сервер и указываю что в completed мне нужно сделать reverse
  return await fetch(`http://localhost:3000/entities/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(fields),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
