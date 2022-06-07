// src NumbersCollection.ts

export class NumbersCollection {
  // инициализирую
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  //Сравниваю пары индексов. Если leftIndex больше возвращаю true
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  //если compare true меняю местами
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]; //Временная переменная
    this.data[leftIndex] = this.data[rightIndex]; // присваиваю правой переменно
    this.data[rightIndex] = leftHand; // Присваиваю значение временной переменной. Так и меняю местами
  }
}
