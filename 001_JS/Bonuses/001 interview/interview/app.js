const obj1 = {
  name: "Konstantine",
};

const obj2 = obj1;

obj2.name = "Ivan";

console.log(obj1);

function exm1() {
  var i;
  for (i = 0; i < 10; i++) {
    setTimeout(function () {
      // console.log(i);
    });
  }
}
exm1();

const obj3 = {
  foo() {
    console.log(this.a);
  },
  a: 1,
};

const b = obj3.foo.bind(obj3);
b();

const obj4 = {};

(function (x) {
  x.b = 20;
  x = null;
})(obj4);

console.log(obj4);

const divs = document.getElementsByClassName("div");

// const divWithId = [...divs].find((el) =>{})
// const divWithId = [].find.call(divs,(el) =>{})
const divWithId = Array.prototype.find.call(divs, (el) => {});

// console.log(1);
// setTimeout(() => console.log(2));
// setTimeout(() => console.log(3));
// console.log(4);

console.log(1);
setTimeout(() => console.log(2));
setTimeout(() => console.log(3));
new Promise((res, rej) => {
  // console.log(4);
  // setTimeout(() => console.log(4));
  setTimeout(() => console.log(4), 100);
  res = 5;
})
  .then((v) => {
    console.log(v);
    return 6;
  })
  .then((v) => console.log(v));
setTimeout(() => console.log(7));
console.log(8);

Object.defineProperty(window, "x", {
  set(val) {
    console.log(val);
    // debugger;
  },
});

function exmp2() {
  x = 10;
}

exmp2();
