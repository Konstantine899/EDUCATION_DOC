# Подключение скриптов

С помощью тега 

```js
<script>
```
Данный тег можно размещать как в head так и перед закрывающим тегом body.
Обычно в html разметке такой код не пишут. его выносят в отдельный js файл.

```js
//app.js

alert('Hello world');
```
Далее подключаю данный файл в html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>Привет Заново изучаю JS</p>
    <script src="app.js"></script>
  </body>
</html>
```
После подключения данного в файла в html мы можем работать именно в данном файле. Если в html в теге script начать писать код, то данный код будет игнорироваться.