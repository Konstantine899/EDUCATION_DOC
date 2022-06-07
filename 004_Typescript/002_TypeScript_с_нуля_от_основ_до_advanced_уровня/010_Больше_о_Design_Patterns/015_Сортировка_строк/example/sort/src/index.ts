//index.ts

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([4, -300, 110, 29]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("ZxYmba");
const sortCharacters = new Sorter(charactersCollection);
sortCharacters.sort();
console.log(charactersCollection.data);
