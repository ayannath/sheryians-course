// Level-4, Functions of es5 and es6, 
/*
es5- function statements, function expressions, anonymous functions, immediately invoked function expressions (IIFE)
es6- fat arrow functions:
a) basic fat arrow functions
b) fat arrow single parameter
c) fat arrow with implicit return
*/


// Function Declaration
function greet1(name) {
    return `Hello, ${name}! Welcome to JavaScript Functions.`;
}
console.log(greet1("Alice"));

// Function Expression
const greet2 = function(name) {
    return `Hi, ${name}! This is a function expression.`;
};
console.log(greet2("Bob"));

// Arrow Function es6
const greet3 = (name) => `Hey, ${name}! This is an arrow function.`;
console.log(greet3("Charlie"));

// Immediately Invoked Function Expression (IIFE)
(function(name) {
    console.log(`Greetings, ${name}! This is an IIFE.`);
})("Diana");

// Function with Default Parameters
function greet4(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(greet4());
console.log(greet4("Eve"));

// Function with Rest Parameters
function greet5(...names) {
    return names.map(name => `Hello, ${name}!`).join(" ");
}
console.log(greet5("Frank", "Grace", "Hank"));
// Recursive Function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Callback Function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}
fetchData(data => {
    console.log("Received Data:", data);
});

// parameter vs argument
function add(a, b) { // a and b are parameters
    return a + b;
}
add(2, 3); // 2 and 3 are arguments

// Hoisting example
console.log(hoistedFunction()); // Works because of hoisting

function hoistedFunction() {
    return "This function is hoisted!";
}
// Note: Function expressions and arrow functions are not hoisted.
