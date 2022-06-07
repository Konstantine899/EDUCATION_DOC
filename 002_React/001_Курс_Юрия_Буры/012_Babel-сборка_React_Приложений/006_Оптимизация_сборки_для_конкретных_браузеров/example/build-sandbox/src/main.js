//src/main.js

class App {
  run = async (name = "World") => {
    console.log(`Hello ${name}`);
  };
}

const app = new App();
app
  .run()
  .then(() => console.log("done"))
  .catch((error) => console.log(error));
