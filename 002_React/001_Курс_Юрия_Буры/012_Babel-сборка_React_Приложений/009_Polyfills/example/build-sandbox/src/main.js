//src/main.js

Array.prototype.float = () => {};

class App {
  run = async (name = "World") => {
    console.log(`Hello ${name}`);
    console.log([1, 2, [3, 4]].flat());
  };
}

const app = new App();
app
  .run()
  .then(() => console.log("done"))
  .catch((error) => console.log(error));
