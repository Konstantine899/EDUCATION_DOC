// while, do while, for, for of, for in

// let i = 0;

// while (i++ < 10) {
//   console.log(i);
// }

// let i = 10;

// while (i--) {
//   console.log(i);
// }

// do {
//   console.log("action");
// } while (i > 0);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// let str = "Hello";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + "*";
// }
// console.log(res);

// let colors = ["white", "black", "yellow", "orange"];

// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
//   colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);

const users = [
  {
    name: "Konstantine",
    age: 30,
  },
  {
    name: "Oleg",
    age: 25,
  },
  {
    name: "Maks",
    age: 20,
  },
  {
    name: "Olga",
    age: 21,
  },
];

// const usersObject = {};

// for (i = 0; i < users.length; i++) {
//   usersObject[users[i].name] = users[i];
// }

// console.log(usersObject['Olga']);

// const user = {
//   name: "Konstantine",
//   age: 30,
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

for (let value of users) {
  console.log(value);
}
