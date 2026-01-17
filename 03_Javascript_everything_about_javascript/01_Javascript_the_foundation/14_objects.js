// Objects in JavaScript are collections of key-value pairs. They allow us to group related data and functionality together.
// many names = array[], details of one name = object{}.
/**
 * two ways to create objects:
 * var obj = {}  or  var obj = new Object();
 * 1. Object Literal Syntax
 * 2. Object Constructor
 * Common operations on objects include:
 * - Accessing properties
 * - Modifying properties
 * - Adding new properties
 * - Deleting properties
 * - Looping through properties
 * - Checking for property existence
 * - Object methods for keys, values, and entries
 * - Nested objects
 * - Object.assign() for copying properties
 * - Spread operator for shallow copies
 * - Freezing and sealing objects
 * - Prototypes and inheritance
 * - Checking if an object is frozen or sealed
 * This code demonstrates the creation and manipulation of objects in JavaScript, showcasing various methods and properties associated with objects.
 */
 // Creating an object using object literal syntax
    const person = {
      name: "Alice",
      age: 25,
      city: "New York",
      greet: function() {
        console.log("Hello, my name is " + this.name + "!");
      }
    };
    console.log(person); // Output: { name: 'Alice', age: 25, city: 'New York', greet: [Function: greet] }

    // Accessing object properties
    console.log(person.name); // Output: Alice
    console.log(person["age"]); // Output: 25
    // Modifying object properties
    person.name = "Bob";
    console.log(person.name); // Output: Bob

    // Calling a method of the object
    person.greet(); // Output: Hello, my name is Alice!

    // Adding a new property to the object
    person.country = "USA";
    console.log(person.country); // Output: USA

    // Modifying an existing property
    person.age = 32;
    console.log(person.age); // Output: 32

    // Deleting a property from the object
    delete person.city;
    console.log(person.city); // Output: undefined

    // Looping through object properties (for...in)
    for (let key in person) {
      console.log(key + ": " + person[key]);
    }
    // Output:
    // name: Alice
    // age: 26
    // country: USA

    // Checking if a property exists in the object
    console.log("name" in person); // Output: true
    console.log("city" in person); // Output: false 
    
    // Object methods for getting keys, values, and entries
    console.log(Object.keys(person)); // Output: [ 'name', 'age', 'greet', 'country' ]
    console.log(Object.values(person)); // Output: [ 'Alice', 26, [Function: greet], 'USA' ]
    console.log(Object.entries(person)); 
    // Output: [ [ 'name', 'Alice' ], [ 'age', 26 ], [ 'greet', [Function: greet] ], [ 'country', 'USA' ] ]
    
    // Creating an object using the Object constructor
    const car = new Object();
    car.make = "Toyota";
    car.model = "Camry";
    car.year = 2020;
    console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020 }

    // Nested objects
    const student = {
      name: "Bob",
      age: 18,
      grades: {
        math: 95,
        science: 80,
        english: 88
      }
    };
    console.log(student.grades.math); // Output: 95
    console.log(student["grades"]["science"]); // Output: 80

    // Object.assign() to copy properties from one object to another
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    const returnedTarget = Object.assign(target, source);
    console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }

    // Creating a shallow copy of an object using the spread operator
    const original = { x: 10, y: 20 };
    const copy = { ...original };
    console.log(copy); // Output: { x: 10, y: 20 }

    // Modifying the copy does not affect the original
    copy.x = 30;
    console.log(original.x); // Output: 10
    console.log(copy.x); // Output: 30

    // Freezing an object to prevent modifications
    const frozenObject = Object.freeze({ prop: "value" });
    frozenObject.prop = "new value"; // This will not change the property
    console.log(frozenObject.prop); // Output: value

    // Sealing an object to prevent adding or removing properties
    const sealedObject = Object.seal({ prop: "value" });
    sealedObject.newProp = "new"; // This will not add a new property
    delete sealedObject.prop; // This will not delete the property
    console.log(sealedObject.prop); // Output: value

    // Getting the prototype of an object
    const proto = Object.getPrototypeOf(person);
    console.log(proto); // Output: {}

    // Setting the prototype of an object
    const newProto = { species: "Human" };
    Object.setPrototypeOf(person, newProto);
    console.log(person.species); // Output: Human

    // Checking if an object is frozen or sealed
    console.log(Object.isFrozen(frozenObject)); // Output: true
    console.log(Object.isSealed(sealedObject)); // Output: true

    // This code demonstrates the creation and manipulation of objects in JavaScript, showcasing various methods and properties associated with objects.

