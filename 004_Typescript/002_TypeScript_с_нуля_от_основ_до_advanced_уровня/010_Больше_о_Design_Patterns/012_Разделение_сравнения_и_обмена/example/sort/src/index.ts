//index.ts

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([4, -300, 11, 29]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
