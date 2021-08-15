let value;

value = 1 > 2; // false
value = 1 <= 2; // true
value = 2 <= 2; // true

value = 1 == 1; // true
value = 1 == "1"; // true
value = 1 == true; // true

value = 1 === "1"; // false
value = 1 != "1"; // false
value = 1 !== "1"; // true

value = "a" > "a"; // false
value = "a" === "a"; // true
value = "a" > "A"; // true
value = "a" > "ab"; // false
value = "a".charCodeAt(); // 97
value = "A".charCodeAt(); // 65

// console.log(value);

// if (value !== 10) {
//   console.log("value: 10");
// } else {
//   console.log("else");
// }

// value = NaN;

// if (value) {
//   console.log("some actions", value);
// } else {
//   console.log("else", value);
// }

// value = null;

// console.log(!value); // true

// value = null;

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log("array is empty");
// }

// let user = {
//   name: "Konstantine",
// };

// if (user.hasOwnProperty("name")) {
//   console.log(user.name);
// } else {
//   console.log("else");
// }

// value = 1 || 0;
// console.log(value); // возвращает 1

// let serverNikname = "";
// let nikname = serverNikname || "default nikname";
// console.log(nikname);

// value = 1 && 0 && 3;

// productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//     console.log('Беру')
// }else{
//     console.log('else')
// }
// console.log(value);

value = 10;

if (value < 10) {
  console.log("value < 10", value);
} else if (value >= 10) {
  console.log("value >= 10", value);
} else {
  console.log("else");
}
