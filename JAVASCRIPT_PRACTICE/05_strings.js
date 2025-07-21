let str1 = "Pranav" + 12;
console.log(str1);

let city = "Pune"; // Assign the string "Pune" using double quotes
let message = `Hi, I am from ${city}`; // Use the variable to insert city name
console.log(message);

let favMovie = "FordvsFerrari";
let quote = "Never give up!";
let clgName = "IIIT PUNE";

console.log(
  `Hi I am Pranav, my favourite movie is ${favMovie}, favourite quote is ${quote}, and I study in ${clgName}`
);

// let error = 'She said, "Let's code!"';
// above line has error because enclosing inverted commas are close before expectation
let error = `She said, Let's code!`;

let hero = "Iron Man";
let power = "arc reactor";

let intro = `I am ${hero}, and my power source is the ${power}.`;
console.log(intro);

// Variables
let userName = "Pranav";
let movie = "Interstellar";
let seat = "E12";
let price = 350;

// Use template literal to print:
//
const msg = `
Hello ${userName},
Your seat ${seat} for the movie '${movie}' is booked.
Total price: ${price}.
`;


console.log(msg);
let x = 7;
let y = 3;

// Create a string: "The difference between x and y is 4"
console.log(`The difference between x and y is ${x - y}`);


//Escape sequences '\'
console.log("Welcome\nTo\nIIIT Pune");       // New line
console.log("Roll\tName\tMarks");            // Tab spacing
console.log("Path: C:\\Users\\Pranav");      // Backslash
console.log("She said, \"Let's win this!\"");// Quotes


let msg2 = "He replied, \"Don't worry!\"";


console.log("Name: Pranav\nBranch: CSE\nCollege: IIIT PUNE\nSUbjects: DSA JS Web Dev")


console.log(typeof "Pranav");       // "string"
console.log(typeof new String("Pranav")); // "object"
//  new String("Pranav"); this is a string class object;

let a = "hello";
let b = new String("hello");

console.log(typeof a); // string
console.log(typeof b); // object
console.log(a == b);   // shallow comparison, true
console.log(a === b);  // deep comparison false

let city2 = "Pune";
let cityObj = new String("Pune");

console.log(city2 === cityObj);  // the === check that along with values, is the data type also same
// which is not the case here, as we are comparing string with an object, so the answer will be false

