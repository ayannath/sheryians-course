// types in javascript

// 1. primitive types
let str = "hello"; // string
let num = 42; // number
let isTrue = true; // boolean
let undef; // undefined
let nul = null; // null
let sym = Symbol("id"); // symbol

// 2. reference types eg: (), {}, []
let obj = { name: "Alice", age: 30 }; // object
let arr = [1, 2, 3, 4, 5]; // array
let func = function() { return "Hello World"; }; // function

// spread operator example
let arr1 = [1, 2, 3];
arr1.pop(); // modifies arr1
console.log(arr1); // [1, 2]
let arr2 = [...arr1, 4, 5, 6]; // creates a reference new array with "[...arr1]"
arr2.pop(); // modifies arr2
console.log(arr2); // [1, 2, 4, 5]

// diff between reference and primitive types
let arr3 = arr1;
arr3.pop(); // modifies arr2
console.log(arr1); // [1, 2, 4, 5]

// checking types
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof isTrue); // boolean
console.log(typeof undef); // undefined
console.log(typeof nul); // object
console.log(typeof sym); // symbol
console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof func); // function
console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true
console.log(func instanceof Function); // true
console.log(nul === null); // true
console.log(undef === undefined); // true
console.log(sym instanceof Symbol); // false
console.log(typeof sym === 'symbol'); // true

// type conversion
let num1 = "123";
let convertedNum = Number(num1);
console.log(convertedNum); // 123
console.log(typeof convertedNum); // number

let str1 = 456;
let convertedStr = String(str1);
console.log(convertedStr); // "456"
console.log(typeof convertedStr); // string