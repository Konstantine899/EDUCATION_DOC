// app.js

const url =
  'chastota-obnovleniya=170-gts;producer=asus,dell;21362=8698,8699;21368=102240/';

let arr = url.split(';');

console.table(arr);

let res = {}; // принимает результирующий объект

arr.forEach((item) => {
  let temp = item.split('=');
  res[temp[0]] = temp[1].split(',');
});

console.table(res);
