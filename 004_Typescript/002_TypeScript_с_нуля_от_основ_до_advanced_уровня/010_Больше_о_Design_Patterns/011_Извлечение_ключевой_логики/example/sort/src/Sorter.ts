//src Sorter.ts
export class Sorter {
  // короткая запись
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection; // вытаскиваю длинну массива из коллекции

    //сортирую
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j]; // временная переменная
          this.collection[j] = this.collection[j + 1]; // присваиваю значение правого элемента левому
          this.collection[j + 1] = temp; // присваиваю левому элементу значение временной переменной
        }
      }
    }
  }
}
