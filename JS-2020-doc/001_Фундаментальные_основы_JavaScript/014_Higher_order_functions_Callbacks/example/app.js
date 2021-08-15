// function foo() {
//   console.log("Hello world");
// }
// foo();

// foo.field = "Konstantine";

// console.log(foo.field);

// const arr = ["Konstantine", "Ivan", "Maks", "Olga"];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }

// console.log(newArr);

// let newArr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

const names = ["Konstantine", "Ivan", "Maks", "Olga"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}
function nameLength(el) {
  // console.log(el);
  return el.length;
}

function nameToUpperCase(el) {
  // console.log(el);
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);

// console.log(result2);

function greeting(firstName) {
  return function (lastName) {
    return `Hello ${firstName} ${lastName}`;
  };
}

// const testGreeting = greeting("Konstantine");
// const fullName = testGreeting("Atroshchenko");
const fullName = greeting("Konstantine")("Atroshchenko");
// console.log(fullName);

function question(job) {
  const jobDictionary = {
    developer: " что такое JavaScript",
    teacher: "какой предмет вы ведете",
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}

const developerQuestion = question("developer");
console.log(developerQuestion("Konstantine"));
const teacherQuestions = question("teacher");
console.log(teacherQuestions("Olga"));

