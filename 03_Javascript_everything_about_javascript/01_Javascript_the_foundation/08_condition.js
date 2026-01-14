// Level-3, Conditional Statements in JavaScript: if, else if, else > 99%, ternary operator: 1% and switch

// truthy and falsy values are:
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN, document.all
// Everything else is truthy

// Sherians Course


// 1. if statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

// 2. if-else statement
let time = 10;
if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// 3. if-else if-else statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount);

// 5. switch statement
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}
console.log("Day:", dayName);

// Note: Always use 'break' to prevent fall-through in switch cases unless intentional.
// You can also group cases in switch
let fruit = "banana";
switch (fruit) {
  case "apple":
  case "banana":
  case "orange":
    console.log("It's a fruit.");
    break;
  default:
    console.log("It's not a fruit.");
}

// Example of nested if
let num = 15;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
// Example of nested switch
let vehicle = "car";
let color = "red";
switch (vehicle) {
  case "car":
    switch (color) {
      case "red":
        console.log("Red car");
        break;
      case "blue":
        console.log("Blue car");
        break;
      default:
        console.log("Other color car");
    }
    break;
  case "bike":
    switch (color) {
      case "red":
        console.log("Red bike");
        break;
      case "blue":
        console.log("Blue bike");
        break;
      default:
        console.log("Other color bike");
    }
    break;
  default:
    console.log("Unknown vehicle type");
}

// Example of using if inside switch
let dayOfWeek = 5;
switch (dayOfWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    if (new Date().getHours() < 12) {
      console.log("Good morning, it's Friday!");
    } else {
      console.log("Good afternoon, it's Friday!");
    }
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Example of using switch inside if
let weather = "sunny";
if (weather === "sunny") {
  switch (new Date().getDay()) {
    case 0:
    case 6:
      console.log("Enjoy the sunshine!");
      break;
    default:
      console.log("It's a sunny day!");
  }
} else {
  console.log("It's not a sunny day.");
}

// Example of using ternary operator inside if
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's not hot outside.");
}

// Example of using if inside ternary operator
let marks = 75;
let result = (marks >= 40) ? (marks >= 75 ? "Distinction" : "Pass") : "Fail";
console.log("Result:", result);

