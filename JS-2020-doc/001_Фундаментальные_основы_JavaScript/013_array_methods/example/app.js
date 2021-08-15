const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;
value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;

value = numArr.indexOf(32);
value = numArr.push(100);
value = numArr.pop();
value = numArr.unshift(111);
value = numArr.shift();
value = numArr.slice(0, 2);
value = numArr.splice(1, 0, "one", "two");
value = numArr.reverse();
value = numArr.concat(1, 2);
value = numArr.join(" ");
value = 'hello world'.split(" ");

console.log(value, numArr);
