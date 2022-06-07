//src Sorter.ts
import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  // короткая запись
  constructor(public collection: NumbersCollection) {}

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
