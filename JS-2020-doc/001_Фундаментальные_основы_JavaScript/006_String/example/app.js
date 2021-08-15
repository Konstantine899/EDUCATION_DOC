const FirstName = "Konstantine";
const lastName = "Atroshchanka";
const age = 30;
const str = "Hello my name is Konstantine";

let value;

value = FirstName + " " + lastName;
value += " I am " + age;

value = FirstName.length;
value = FirstName[10];
value = FirstName[FirstName.length - 1];
value = lastName[lastName.length - 1];

value = FirstName.toUpperCase();
value = FirstName.concat(" ", lastName);
value = FirstName.indexOf("n", 4);
value = FirstName.includes("!");

value = str.slice(0, 5);
value = str.slice(0, -3);

value = str.replace("Konstantine", "Ekaterina");

console.log(value);
