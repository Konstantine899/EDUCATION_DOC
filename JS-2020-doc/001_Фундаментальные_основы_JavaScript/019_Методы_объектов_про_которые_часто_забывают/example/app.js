let obj1 = {
  name: "Konstantine",
  info: {
    skills: ["html", "css"],
  },
};

let obj2 = {
  name: "Ivan",
  age: 20,
};

let newObj = Object.assign({}, obj2, obj1);
newObj = Object.assign({}, obj1);

newObj = JSON.parse(JSON.stringify(obj1));
// console.log(newObj.info === obj1.info);

let keys = Object.keys(obj2);
console.log(keys);
let values = Object.values(obj2);
console.log(values);
let entries = Object.entries(obj2);
console.log(entries);
let fromEntries = Object.fromEntries([
  ["a", "value"],
  ["b", "b_value"],
]);
console.log(fromEntries);
