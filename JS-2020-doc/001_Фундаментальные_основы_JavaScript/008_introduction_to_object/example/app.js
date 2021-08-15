const user = {
  firstName: "Konstantine",
  age: 30,
  isAdmin: true,
  email: "Konstantine899@gmail.ru",
  "user-address": {
    sity: "Витебск",
  },
  skills: [
    "html",
    "css",
    "scss",
    "WebPack",
    "Babel",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Eslint",
  ],
};

let value;
let prop = "skills";

value = user.firstName;
value = user["isAdmin"];
value = user["user-address"];
value = user["user-address"].sity;
value = user["user-address"]["sity"];

value = user[prop][5];

user.firstName = "Ekaterina";
value = user.firstName;

user.info = "Some info";
value = user.info;

user["user-address"].sity = "Minsk";
user["user-address"].country = "Belarus";

user.plan = {};
user.plan.basic = "basic";

console.log(value);
console.log(user);
