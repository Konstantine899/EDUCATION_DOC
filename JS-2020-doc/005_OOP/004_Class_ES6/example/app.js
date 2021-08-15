// // const str = new String("hello world");
// // console.log(str);

// function Product(brand, price, discount) {
//   // 1. Создается новый объект
//   // 2. На этот объект устанавливается ссылка this
//   // 3. Функция возвращает этот объект
//   this.brand = brand;
//   this.price = price;
//   this.discount = discount;
// }

// Product.prototype.getPriceWithDiscount = function () {
//   return (this.price * (100 - this.discount)) / 100;
// };

// Product.prototype.setPrise = function (newPrise) {
//   this.price = newPrise;
// };

// const apple = new Product("Apple", 100, 15);
// const samsung = new Product("Samsung", 200, 25);
// // console.log(apple, samsung);

// // Object.create

// const protoForObj = {
//   sayHello() {
//     return "Hello World";
//   },
// };

// const obj = Object.create(protoForObj, {
//   firstName: {
//     value: "Konstantine",
//   },
// });

// //

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User.prototype.sayHello = function () {
//   return `Hello ${this.firstName} ${this.lastName}`;
// };

// const user = new User("Konstantine", "Atroshchenko");

// // Customer
// function Customer(firstName, lastName, membership) {
//   User.apply(this, arguments);
//   this.membership = membership;
// }

// Customer.prototype = Object.create(User.prototype);
// Customer.prototype.constructor = Customer;

// Customer.prototype.getMemberShip = function () {
//   return this.membership.toUpperCase();
// };

// const customer = new Customer("Ekaterina", "Zaharova", "basic");

//   ES6

const methodName = "setNewPrise";

class ProductES {
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }

  get brand() {
    return this._brand;
  }

  set brand(name) {
    this._brand = name;
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }

  [methodName](newPrice) {
    this.price = newPrice;
  }

  static plus(x, y) {
    return x + y;
  }
}

const newProduct = new ProductES("Samsung", 200, 10);
