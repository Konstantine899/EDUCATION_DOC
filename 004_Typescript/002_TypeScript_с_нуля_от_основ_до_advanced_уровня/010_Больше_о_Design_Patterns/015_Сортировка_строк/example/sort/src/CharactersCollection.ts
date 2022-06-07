//src CharactersCollection.ts

export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // Сравниваю коды символов приведенных в нижний регистр
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split(""); // разделяю, разбиваю символы, при помощи пустой строки
    const leftHand = characters[leftIndex]; // Создаю временную переменную и получаю символ в массиве по индексу
    characters[leftIndex] = characters[rightIndex]; // Присваиваю значение правого индекса левому
    characters[rightIndex] = leftHand; // присваиваю значение левого индекса из временной переменно правому индексу
    this.data = characters.join(""); //Собираю строку из массива. Соеденяю символы по пустой строке
  }
}
