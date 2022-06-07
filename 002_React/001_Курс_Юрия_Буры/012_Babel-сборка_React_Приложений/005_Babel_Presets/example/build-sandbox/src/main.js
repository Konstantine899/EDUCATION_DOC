//src/main.js

class App {
  run = (name = "World") => {
    console.log(`Hello ${name}`);
  };
}

const app = new App();
app.run();
