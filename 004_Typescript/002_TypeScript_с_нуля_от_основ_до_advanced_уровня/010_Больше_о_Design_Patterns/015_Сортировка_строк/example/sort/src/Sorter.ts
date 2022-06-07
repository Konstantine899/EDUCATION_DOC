//src Sorter.ts

//Инструкции о том как иметь возможность быть отсортированными
interface Sortable {
  length: number; //благодоря getters get обращаюсь как к свойству

  compare(leftIndex: number, rightIndex: number): boolean; // если true меняю местами
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  // короткая запись
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection; // вытаскиваю длинну массива из коллекции

    //сортирую
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //в условии вызываю метод compare сравнивать и передаю индексы если возвращается true выполняю тело функции
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1); //вызываю метод swap менфть и передаю индексы
        }
      }
    }
  }
}
