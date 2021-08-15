const firstName = "Konstantine";
const lastName = "Atroshchenko";
const age = 30;

let str;

// str = "Hello my name is " + firstName + " " + lastName;

// str =
//   "<ul>" +
//   "<li>First name:" +
//   firstName +
//   "</li>" +
//   "<li>Last name:" +
//   lastName +
//   "</li>" +
//   "<li>age:" +
//   age +
//   "</li>" +
//   "</ul>";

// ES6
str = `
<ul>
<li>First name: ${ firstName }</li>
<li>last name: ${ lastName }</li>
<li>age: ${ age }</li>
<li>Math random: ${Math.floor( Math.random() * (50)) }</li>
<li>5 + 5 = ${5 + 5 }</li>
</ul>
`;
document.body.innerHTML = str;
