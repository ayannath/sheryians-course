// Level-4, return functions, 

function add(a, b) {
    return a + b; // returning the sum of a and b
}
console.log(add(5, 3)); // Output: 8 returning values from functions

function num() {
    return 42; // returning a number
}
var ans = num(); // returns 42
console.log(ans); // Output: 42

// Arrow function with return
var arr = () => {
    return 12
}
var value = arr(); // returns 12
console.log(value); // Output: 12

// why functions without "return" return undefined
function greet(name) {
    console.log("Hello, " + name + "!");
    // No return statement
}
var result = greet("Alice");
console.log(result); // Output: undefinedz