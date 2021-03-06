# Как ускорить процесс разработки в WebStorm

[https://www.youtube.com/watch?v=G3O7gJR5eYE](https://www.youtube.com/watch?v=G3O7gJR5eYE)

Есть много разных способов запустить WebStorm. Самый рекомендуемый способ это использовать [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

![](img/001.jpg)

Этот инструмент позволяет кроме того как установить WebStorm, он так же позволяет его обновлять. И так же можно откатиться на предыдущую версию.
Кроме того если вам нужно пользоваться несколькими IDE то они тоже тут будут.

Мы можем установить тему Dark Purple

![](img/002.jpg)

![](img/003.jpg)

Для того что бы быстрее себя приучить к сочетаниям клавишь можно зати в help
и выбрать Keymap reference.

![](img/004.jpg)

![](img/005.jpg)

Это pdf файл который можно распечатать.


Рефакторинг кода.

Сtrl + Ctrl + A

<br/>
<br/>
<br/>

Базовая навигация (по проекту, по файлу)

![](img/006.jpg)

Или просто Ctrl + Alt + L.

![](img/007.jpg)

Resent files показывает последние файлы с которыми вы работали.

![](img/008.jpg)


![](img/009.jpg)

История перемещения коретки

![](img/010.jpg)

![](img/011.jpg)

Перейдет к другой позиции даже если эта позиция была в другом файле. Т.е. таким образом мы можем пройтись по всем тем местав в которых были.

<br/>
<br/>
<br/>

Про индексацию файлов

Это одна из самых важных фитч которая есть в IDE. Но так же индексация требует некоторого количества времени и очень часто растраивает пользователей.

Индексация нужна для того что бы вообще понять что есть в вашем проекте. Концепт ее такой.
Мы берем все файлы которые существуют в проекте проходимся по ним. Строим для них синтаксическое дерево. Анализируем эти синтаксические деревья. Вытаскиваем из них нужную нам информацию и сохраняем куда-то в индекс. 
А потом кода возникает потребность в каком-то умном поиске мы можем воспользоваться этой информацией и сделать так что бы перейти к нужному файлу максимально быстро.


![](img/012.jpg)

Кроме файлов сть классы.

и последняя самая важная вещь это Symbols. Это все сущности которые имеют какое-то имя в вашем проекте. Мы можем найти какие-то css классы. Мы можем найти какую-то функцию.
Так же он позволяет делать поиски по всяким маскам.

![](img/013.jpg)

<br/>
<br/>
<br/>

Редактирование кода.

Одна из самых важных вещей это Alt + Enter

![](img/014.jpg)

Здесь мы можем конвертировать файлы так как нам надо. Классы в arrow function  и обратно. И не только.



![](img/015.jpg)

![](img/016.jpg)

![](img/017.jpg)

![](img/018.jpg)

Так же этим круто пользоватся во время написания кода.

![](img/019.jpg)

Запуск прямо из IDE

![](img/020.jpg)


<br/>
<br/>
<br/>

Рефакторинг кода

Для useState мы предлагаем переименовать сразу две переменные. Скрин делать не буду.

Следующая вещь которую я хочу сделать это создать новый компонент. Кримеру я выделяю интересующий кусок кода.
Ctrl + Shift + A  выбираю Refactor this  и дальше выбираю Action acstract component

![](img/021.jpg)

![](img/022.jpg)

![](img/023.jpg)

![](img/024.jpg)

![](img/025.jpg)

Так же можно для каких либо фишек добавления в код исаользоват Alt + Enter.

![](img/026.jpg)

![](img/027.jpg)

Так же мы можем кусок кода перенести в другой файл.

![](img/028.jpg)

![](img/029.jpg)

![](img/030.jpg)

Есть другие способы рефакторинга. К примеру я написаю слушатель события onClick. Но еще не создал функцию которая данный клик обрабатывать. Я пишу название функции и Ctrl + Alt + V.

![](img/031.jpg)

![](img/032.jpg)

Для классов тоже есть много способов рефакторинга. Способов на самом деле не вероятное количество.

Для того что бы вывести в консоль интересующую нас переменную можно написать название переменной, поставить точку и log

![](img/033.jpg)

![](img/034.jpg)

Найди все что есть по Emmet. Реально повысит скорость разработки. Все что связано с HTML подобными языками реально помогает.

![](img/035.jpg)

![](img/036.jpg)

![](img/037.jpg)

![](img/038.jpg)


<br/>
<br/>
<br/>

Git

Для коммита очень удобно вызывать Ctrl + K

![](img/039.jpg)

Здесь можно понять что мы хотим коммитить. Что не хотим коммитить

![](img/040.jpg)

Ctrl + Shift + K можно запушить изменения.

