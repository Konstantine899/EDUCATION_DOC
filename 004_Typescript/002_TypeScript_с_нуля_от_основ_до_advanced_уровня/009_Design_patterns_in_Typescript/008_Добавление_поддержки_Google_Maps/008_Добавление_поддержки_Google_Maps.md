# 008_Добавление_поддержки_Google_Maps

![](img/001.jpg)

Мне нужно проделать несколько шагов.

Нам нужно перети в [http://console.developers.google.com](http://console.developers.google.com)

и сгенерировать новый google developer project. Этот проект позволит нам иметь доступ к Google maps API.

Далее включаю поддержку Google Maps в проекте.

Генерирую ключ.

Далее добавляю script в мой html файл.

![](img/002.jpg)

![](img/003.jpg)

![](img/004.jpg)

![](img/005.jpg)

![](img/006.jpg)

Включить поддержку Google maps в проекте.

![](img/007.jpg)

![](img/008.jpg)

![](img/009.jpg)

Генерирую API key

![](img/010.jpg)

![](img/011.jpg)

![](img/012.jpg)

![](img/013.jpg)

AIzaSyAbeFBkqWvz2FWLotemsvLbyXkg75J1nb0

Добавляю в html.

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

![](img/014.jpg)


