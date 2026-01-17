// loops with array
/**
 - how to loop through an array
 - how to loop through an array and do something with each member
 - calculate sum of all members of an array
 - find max member of an array
 - find min member of an array
 */

var arr = [10, 20, 30, 40, 50];
// loop through array and print each member
arr.forEach(function(value) {
    console.log("Member: " + value);
});


// add all members of array
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum: " + sum);

//