let colors = ["red", "green", "blue"];
console.log("Index of red: ", colors.indexOf('red')); // found, then it will return index=> 0
console.log("Index of red: ", colors.indexOf('yellow')); // -1 as the index not found

console.log("colors include red: ",  colors.includes('red')); // return bools, it is true therefore true
console.log("colors include red: ", colors.includes('yellow')); // not fount false

let numbers = [1, 2, 3, 4, 5];

let firstEven = numbers.find(num => num%2 == 0);
console.log(firstEven);

let indexOfEven = numbers.findIndex(num => num%2== 0);
console.log(indexOfEven);


const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

console.log(inventory.find(item => item.name == 'cherries'));


const prices = [100, 200, 300];

prices.forEach((price, index) => { // can pass value, index
    price+=100; // cannot immutate the array
  console.log(`Item ${index + 1}: ₹${price}`);
});

// Apply 10% discount using map
const discounted = prices.map((price) => price * 0.9); // does not change original array
console.log(discounted); // [90, 180, 270]


prices.forEach((item)=>{
    console.log(item);
})

const inBudget = discounted.filter(item => item < 100); // if no match found, returns empty array
console.log(inBudget)

const totalPrice = discounted.reduce((bill, currentPrice)=> bill += currentPrice, 0);
console.log(totalPrice)

const fruits = ["banana", "apple", "cherry"];
fruits.sort(); // ["apple", "banana", "cherry"]
console.log(fruits);

const pricesII = [41, 21, 32, 78, 9];
console.log(pricesII.sort()); // lexographical sort
console.log(pricesII.sort((a, b) => a - b));// ascending sort
console.log(pricesII.sort((a, b) => b - a));// descending sort
// sort changes the original array
console.log(pricesII);

console.log(pricesII.reverse()); // reverse also changes the original array
console.log(pricesII);

console.log('10' > '1');

const numbersII = [1, [2, 3], [4, [5, 6]]];
console.log(numbersII.flat(2)); // [1, 2, 3, 4, [5, 6]]
console.log(numbersII.flat(2).flatMap(num => num*2));


const nums = [[1], [2, 3], [4]];
const result = nums.flatMap(arr => arr.map(n => n * 2));
console.log(result); // [2, 4, 6, 8]


const students = [
  { name: "Pranav", course: "Web Dev", marks: 95 },
  { name: "Ravi", course: "App Dev", marks: 88 },
  { name: "Sneha", course: "Web Dev", marks: 72 },
  { name: "Aditi", course: "Web Dev", marks: 85 },
  { name: "Manav", course: "CyberSec", marks: 91 },
  { name: "Meera", course: "Web Dev", marks: 80 },
];


const {avg} = students.filter(({course})=> course == "Web Dev").filter(({marks})=> marks >= 80).sort((a, b)=> b.marks-a.marks).reduce(({avg, count}, {marks})=> ({
  avg: (avg * count + marks) / (count + 1),
  count: count + 1,
}), {avg:0, count: 0});
console.log(avg)