// Arrays

var users = ["Ayan", "Arpita", "Harsh", "Isha"]; // array literal syntax
console.log(users[0]);

// Array Methods
users.push("NewUser"); // adds at the end
console.log(users);
users.pop(); // removes from the end
console.log(users);
users.unshift("NewUser"); // adds at the beginning
console.log(users);
users.shift(); // removes from the beginning
console.log(users);

// Looping through an array
for (var i = 0; i < users.length; i++) {
    console.log("User at index " + i + ": " + users[i]);
}
// Using forEach
users.forEach(function(user, index) {
    console.log("User at index " + index + ": " + user);
});

// Array mapping:
/*
The map() method creates a new array by applying a function to each element of an existing array. It transforms each element and returns a new array without modifying the original.
*Key characteristics:
- Returns a new array (doesn't modify the original)
- Calls a function for each element
- The function receives: element, index (optional), and array (optional)
- Returns a new array with the same length as the original
*Common use cases:
- Transforming data (format, convert types)
- Extracting specific properties from objects
- Applying calculations to all elements
*/
var upperCaseUsers = users.map(function(user) {
    return user.toUpperCase();
});
console.log(upperCaseUsers);

// Double each number
const numbs = [1, 2, 3, 4, 5];
const doubled = numbs.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Extract property from objects
const users1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
const names = users1.map(user => user.name);
console.log(names); // ['Alice', 'Bob']

// Convert strings to numbers
const strings = ['1', '2', '3'];
const nums = strings.map(Number);
console.log(nums); // [1, 2, 3]

// Array filtering
var filteredUsers = users.filter(function(user) {
    return user.length > 4;
});
console.log(filteredUsers);

// Array sorting
users.sort();
console.log(users);
users.sort(function(a, b) {
    return a.length - b.length;
});
console.log(users);

// Finding an element
var foundUser = users.find(function(user) {
    return user === "Harsh";
});
console.log(foundUser);

// Checking if an element exists
var hasIsha = users.includes("Isha");
console.log(hasIsha);

// Getting the index of an element
var indexOfAyan = users.indexOf("Ayan");
console.log(indexOfAyan);

// Length of the array
console.log(users.length);

// Converting array to string
console.log(users.toString());

// Joining array elements
console.log(users.join(" - "));

// Slicing an array
var slicedUsers = users.slice(1, 3);
console.log(slicedUsers);

// Splicing an array
users.splice(1, 1, "ReplacedUser");
console.log(users);

// Concatenating arrays
var moreUsers = ["User1", "User2"];
var allUsers = users.concat(moreUsers);
console.log(allUsers);

// Reversing an array
users.reverse();
console.log(users);

// Flattening nested arrays
var nestedArray = [1, [2, 3], [4, [5, 6]]];
var flatArray = nestedArray.flat(2);
console.log(flatArray);

// Reducing an array
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log(sum);

// Finding the index of an element based on a condition
var index = users.findIndex(function(user) {
    return user.startsWith("H");
});
console.log(index);

// End of arrays.js
