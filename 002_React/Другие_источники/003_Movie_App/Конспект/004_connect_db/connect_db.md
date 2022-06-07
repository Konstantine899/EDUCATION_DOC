Перехожу <https://www.themoviedb.org/documentation/api>. Бля запутаться можно. Здесь я регистрируюсь позже перехожу сюда <https://developers.themoviedb.org/3/getting-started/introduction> Перехожу на вкладку **search**. И я хочу искать фильмы. По этому я буду использовать эту конечную точку.

Теперь мы должны создать свой собственный ключ для **API** БД. Для этого создаю в корне проекта файл **.env.local**.

Читай про получения ключа на этиъх сайтах.

API Key (v3 auth)

```
a38414f409d1f2022515b23e00c6b894
```

Example API Request

```
https://api.themoviedb.org/3/movie/550?api_key=a38414f409d1f2022515b23e00c6b894
```

API Read Access Token (v4 auth)

```
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzg0MTRmNDA5ZDFmMjAyMjUxNWIyM2UwMGM2Yjg5NCIsInN1YiI6IjYwZDQ3OWE5MGYyZmJkMDA0OGE4MTY3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LkTvxZ2LcKyX_QzztJ0u6MqYGgF6u2VHTuUSTqt2Flo
```

И так теперь я заношу ключ в **.env.local**

```
REACT_APP_TMDB_KEY = a38414f409d1f2022515b23e00c6b894

```

После чего перезапускаю проект.

И так теперь еще один **life** **hack** нажимаю правой кнопкой мыши на вкладку текущего файла и выбираю **Close Others**. Закрываются все вкладки кроме текущей.

Теперь я хочу сделать выборку из **API** БД фильмов.

Перехожу на вкладку **Try it** out которая нам позволяет работать с пробной версий.

![](img/002.png)

Копирую адрес и в **fetch** запросе переделываю его под свои нужды.

**Fetch** запрос пишу в теле функции **onChange**.

```jsx
//Add
import React, { useState } from 'react';

export const Add = () => {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US$page=1&include_adult=false&query=${e.target.value}`
    );
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

И так разберу строку для себя.

```
https://api.themoviedb.org/3/search/company?api_key=
```

То что я скопировал с сайта

Далее через **process.env** обращаюсь к переменной где у нас лежит сгенерированный ключ

```
${process.env.REACT_APP_TMDB_KEY}
```

После чего указываю язык поиска пока на Английском

```
&language=en-US
```

И далее указываю номер страницы

```
&page=1
```

Далее я добавляю

```
&include_adult=false
```

Я устанавливаю в **false** потому что определенно не хочу что бы возвращалсь фильмы для взрослых.

И далее нацеливаюсь на значения вводимые из **input**.

```
&query=${e.target.value}
```

Далее пишу промис **then** в котором прописываю **responce**

```jsx
//Add
import React, { useState } from 'react';

export const Add = () => {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US$page=1&include_adult=false&query=${e.target.value}`
    ).then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
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

![](img/003.png)

После каждого введенного запроса он нам возвращает некий результат.
