# 001_Больше_о_Generics

Перехожу в проект в котором работал ранее features. Создаю файл generics.ts И здесь запишу класс который булет
отображать простой массив из чисел.

```ts
//generics.ts
class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index];
    }
}

```

И теперь попробуем создать такой же похожий класс. Только теперь он будет отражать массив из строк.

```ts
//generics.ts
class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {
    }

    get(index: number): string {
        return this.collection[index];
    }
}

```

У нас два очень похожих класса. Единственное отличие это тип коллекций этих классов. В первом случае у нас массив
числовых значений и при помощи метода get мы поучаем числоваое значение.

Во-втором члучае у нас массив из строковых значений. И мы получаем возвращаемое значение string из метода get.

И конечно же в идеале нам нужно эти два класса свести к одному. Одна из возможностей стделать это при помощи Generic.

Определю класс и назову его массив из чего угодно. И в этом классе указываю Generic с символом T

T - это type аргумента или параметра в функции.

Я могу вместо T указать длинное название. Но по соглашению мы обычно обозначаем Generic при помощи одной заглавной
буквы.

Теперь посмотрев на первых два класса, нам нужно везде где у нас содержится числовой тип number. Заменить его на тип T.
Заисключением этого случая когда мы записываем в параметре index:number т.к. индекс в массиве у нас числового типа.

```ts
//generics.ts
class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {
    }

    get(index: number): string {
        return this.collection[index];
    }
}

class arrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index];
    }
}

```

Еще раз напоминаю T - это как параметр. И каждый раз при создании объекта класса arrayOfAnything нам нужно передавать
аргумент конкретный <T> для этого параметра т.е. тот тип который мы хотим иметь для коллекции. И соответственно для
возвражаемого типа из метода get.

Т.е. если мы например мы хотим создать объект. И мы хотим что бы в этом объекте содержались числа, то мы в угловых
скобках указываем number. И далее в качестве аргумента передаем массив из чисел.

```ts
//generics.ts
class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {
    }

    get(index: number): string {
        return this.collection[index];
    }
}

class arrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index];
    }
}

new arrayOfAnything<number>([1, 2, 3]);

```