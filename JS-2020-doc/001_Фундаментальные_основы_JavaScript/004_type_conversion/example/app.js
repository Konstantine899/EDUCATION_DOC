let value;
// Number to string
value = String(10);
value = String(40 + 10);
value = (10).toString();

// Boolean to String
value = String(true);

// Array to String
value = String([1, 2, 3]);

// Object to String
value = String({ name: "Konstantine" });

value = 30 + "" + undefined;
value = 30 - "5";
value = false + undefined;

// String to Number
value = Number("23");
value = Number(true);
value = Number(false);
value = Number(null);
value = Number("false");
value = Number([1, 2, 3]);

value = parseFloat("200.212px");

// Boolean
value = Boolean({});

console.log(value);
console.log(typeof value);
