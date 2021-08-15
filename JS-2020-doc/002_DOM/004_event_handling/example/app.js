const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function () {
//   console.log("click");
// };

// btn.addEventListener("click", function (e) {
//   console.log(e);
// });

// btn.addEventListener("click", (e) => {

//   console.log(this);
//   console.log(e);
// });

// function clickhandler(e) {
//   e.preventDefault();
//   console.log(this);
//   console.log("click");
// }

// link.addEventListener("click", clickhandler);
// link.removeEventListener("click", clickhandler);

const container = document.querySelector(".container");

btn.addEventListener("click", (e) => {
  const div = document.createElement("div"); // создал div
  const nestedbtn = document.createElement("button"); // создал кнопку
  div.textContent = Math.random(); // добавил текст в div
  nestedbtn.textContent = "button"; // добавил текст в кнопку
  div.appendChild(nestedbtn); // добавил в div кнопку
  container.appendChild(div); // весь div закинул в контейнер
});

container.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.tagName === "BUTTON") {
    console.log("button clicked");
  }
});
