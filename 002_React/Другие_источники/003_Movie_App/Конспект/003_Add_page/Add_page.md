# Add page

```jsx
//Add
import React from 'react';

export const Add = () => {
  return (
    <div>
      <h1>Add page</h1>
    </div>
  );
};
```

Начинаю с этой страницы потому что внутри ее нам нужно искать фильмы в БД. Я собираюсь использовать **API** для получения результатов при поиске их в БД. И я собираюсь вернуть список фильмов. Сначало я добавлю разметку. Но по умолчанию она не будет показываться.

```jsx
//Add
import React from 'react';

export const Add = () => {
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" placeholder="Search for a  movie" />
          </div>
        </div>
      </div>
    </div>
  );
};
```

И теперь первое что я хочу сделать. Мне нужны такие вещи как входные данные которые я присваиваю в состояние **input** Для того что бы я мог изменить текст. Поскольку я что-то ввожу в **input** я использую **React**. По - этому когда состояние реагирует на изменения нам необходимо создать хук в функциональном компоненте.

Создаю состояние через **useState**.

```jsx
//Add
import React, { useState } from 'react';

export const Add = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" placeholder="Search for a  movie" />
          </div>
        </div>
      </div>
    </div>
  );
};
```

Далее начальное состояние присваиваю в **value** **input**. Так же добавляю атрибут **onChange** в результат которой помещаю функцию в которой в свою очередь и будет происходить изменение состояния.

```jsx
//Add
import React, { useState } from 'react';

export const Add = () => {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a  movie"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
```

Теперь если я что-то напишу в **input** то оно поменяет состояние.
