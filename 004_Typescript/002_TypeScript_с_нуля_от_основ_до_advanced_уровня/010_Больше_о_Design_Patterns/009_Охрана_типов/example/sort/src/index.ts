//index.ts
class Sorter {
  // короткая запись
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection; // вытаскиваю длинну массива из коллекции

    //сортирую
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //Добавляю охрану типов if collection is an array of numbers
        if (this.collection instanceof Array) {
          //if collection is an array of numbers
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j]; // временная переменная
            this.collection[j] = this.collection[j + 1]; // присваиваю значение правого элемента левому
            this.collection[j + 1] = temp; // присваиваю левому элементу значение временной переменной
          }
        }

        //if collection is a string
        //Some logics for string
        if (typeof this.collection === "string") {
        }
      }
    }
  }
}

const sorter = new Sorter([4, -3, 11, 29]);
sorter.sort();
console.log(sorter.collection);
