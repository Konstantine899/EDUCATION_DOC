console.log(1);
console.log(2);

setTimeout(() => {
  console.log(3);
  setTimeout(() => {
    console.log(5);
  }, 0);
}, 0);

console.log(4);

function a() {
  debugger;
  console.log("a");
}

function b() {
  console.log("b");
}

a();
b();
