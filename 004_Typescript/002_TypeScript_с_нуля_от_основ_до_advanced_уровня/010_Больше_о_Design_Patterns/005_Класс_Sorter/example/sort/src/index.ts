//index.ts
class Sorter {
  // короткая запись
  constructor(public collection: number[]) {}

  // Задаю правило для метода sort
  sort(): void {}
}

const sorter = new Sorter([4, -3, 11, 29]);
sorter.sort();
