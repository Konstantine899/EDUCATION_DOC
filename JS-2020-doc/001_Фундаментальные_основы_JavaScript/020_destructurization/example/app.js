// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName: name, lastName, age: years = 30 } = user;

// const {
//   info: {
//     work: default_work = "default_work",
//     skills: default_skills = "default_skills",
//   },
// } = user;

// console.log(default_work, default_skills);

// const colors = ["white", "black", "red", "#89432d"];
// const [w, b, red, green = "green"] = colors;
// // console.log(w, b, red, green);

// const names = ["Konstantine", "Ivan", "Maksim"];
// const [name1, ...otherNames] = names;
// // const [...newNames] = names;
// const newNames = [...names];
// console.log(...newNames);

// // const nestedArr = ["hello world", ["key", "value"]];
// // const [, [key, value]] = nestedArr;
// // console.log(key, value);

// const colorNames = ['some value', ...colors, ...names];
// console.log(colorNames);
const user = {
  firstName: "Konstantine",
  lastName: "Atroshchenko",
  age: 25,
  info: {
    work: "myWork",
    skills: ["html", "css"],
  },
};

const newUser = { ...user, age: 30 };

const {
  info: {
    skills: [html, css],
  },
} = newUser;
// console.log(html, css);

function myPerson({
  lastName = "&",
  firstName = "&",
  info: { skills } = {},
} = {}) {
  console.log(skills);
}
// myPerson(newUser);

function foo(x, y, ...others) {
  console.log(arguments);
  // console.log(Array.prototype.slice.call(arguments));
  const [...args] = arguments;
  console.log(others);
}
// foo(1, 2, 5, 6);

const numbers = [2, 3];
function foo2(x, y) {
  console.log(x, y);
}
foo(...numbers);
