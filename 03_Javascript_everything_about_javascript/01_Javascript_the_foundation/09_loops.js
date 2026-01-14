// Loops: Used to repeat a block of code multiple times until a certain condition is met
// for, while, do-while, foreach, for...in, for...of

// 1. For Loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) { // for(start; end; change) {}
    console.log("Iteration number: " + i);
}

// 2. While Loop
console.log("While Loop:");
let j = 0;
while (j < 5) {
    console.log("Iteration number: " + j);
    j++;
}

// 3. For each Loop (using array's forEach method)
console.log("For Each Loop:");
const numbers = [10, 20, 30, 40, 50];
numbers.forEach(number => {
    console.log(number);
});

// =====================================

// 3. Do-While Loop
console.log("Do-While Loop:");
let k = 0;
do {
    console.log("Iteration number: " + k);
    k++;
} while (k < 5);

// 4. For...In Loop (used for objects)
console.log("For...In Loop:");
const person = { name: "Alice", age: 25, city: "New York" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

// 5. For...Of Loop (used for iterable objects like arrays)
console.log("For...Of Loop:");
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
    console.log(color);
}

// 6. Nested Loops
console.log("Nested Loops:");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log("Outer loop i: " + i + ", Inner loop j: " + j);
    }
}

// 7. Break and Continue
console.log("Break and Continue:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}

// 8. Infinite Loop (commented out to prevent execution)
// console.log("Infinite Loop:");
// let n = 0;

// while (true) {
//     console.log("This will run forever unless stopped manually. Count: " + n);
//     n++;
// }

// // Note: Be cautious with infinite loops as they can crash your program or browser.

