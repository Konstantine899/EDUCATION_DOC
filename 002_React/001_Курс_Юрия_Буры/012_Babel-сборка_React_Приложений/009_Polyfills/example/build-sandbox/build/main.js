import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.flat.js";
import "core-js/modules/es.array.unscopables.flat.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//src/main.js
Array.prototype.float = () => {};

class App {
  constructor() {
    _defineProperty(this, "run", async (name = "World") => {
      console.log(`Hello ${name}`);
      console.log([1, 2, [3, 4]].flat());
    });
  }

}

const app = new App();
app.run().then(() => console.log("done")).catch(error => console.log(error));