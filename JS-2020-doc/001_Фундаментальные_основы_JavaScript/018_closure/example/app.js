function getFullName(firstName, lastName) {
  return function () {
    return `${firstName} ${lastName}`;
  };
}

const getname = getFullName("Konstantine", "Atroshchenko");
// console.log(getname());

function updateValue(val = 0) {
  let x = val;
  return function (num = 0) {
    return (x += num);
  };
}

const updtVal = updateValue(2);
const updtVal2 = updateValue(4);
// console.log(updtVal(1));
// console.log(updtVal(0));
// console.log(updtVal2(2));
// console.log(updtVal2(0));

function checkCred() {
  const login = "test";
  const password = "somePassword";

  return {
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return password === value;
    },
  };
}

const check = checkCred();
// console.log(check.checkLogin('test'));

function closureExample() {
  console.log(i);
  const arrOfFunc = [];
  let value = "";

  for (var i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function () {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}
const res = closureExample();
res[0]();
res[5]();
