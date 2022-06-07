# 009_Интеграция_Google_Maps

![](img/001.jpg)

Если объект google находится, значит подключение было успешным.

Обычно мы устанавливаем зависимости через npm. А здесь мы добавили script в html.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>Document</title>
</head>
<body>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbeFBkqWvz2FWLotemsvLbyXkg75J1nb0
"></script> <!--Обязательно указываю выше, Ввожу адрес-->
<script src="./src/index.ts"></script>
</body>
</html>
```

Этот скрипт будет добавлен в наш проект как глобальная переменная. Именно по этому кода я в консоли браузера написал
google все прошло успешно. Потому что переменная google глобальная.

Но есть одна проблема. Если я сейчас в нашем файле наберу название переменной то я получу ошибку. Это происходит потому
что TS не понимает что у нас есть глобальная переменная в нашем проекте. Мы должны ему понять что такая переменная
существует, а так же должны дать ему понять какие методы есть у данной переменной.

И для этого мы установим еще один файл определения типов.

![](img/002.jpg)

[https://www.npmjs.com/package/@types/googlemaps](https://www.npmjs.com/package/@types/googlemaps)

```shell
npm i @types/googlemaps
```

![](img/003.jpg)

    
