// const str = new String("hello world");
// console.log(str);

function Product(brand, price, discount) {
  // 1. Создается новый объект
  // 2. На этот объект устанавливается ссылка this
  // 3. Функция возвращает этот объект
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrise = function (newPrise) {
  this.price = newPrise;
};

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 25);
// console.log(apple, samsung);
