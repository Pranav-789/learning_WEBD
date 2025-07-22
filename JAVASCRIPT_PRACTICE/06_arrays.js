const fruits = ["apple", "banana", "cherry"];
let mixed = [42, "hello", true, null];


console.log(typeof(fruits));
console.log(typeof(mixed));

//although they are arrays, their type will be object

// let nums = new Array(3, 4, 5);

// console.log(nums);
// console.log(typeof(nums)); // still object
let nested = [[1, 2], [3, 4]];
// Objects = key-value pairs ({name: "Pranav"}), Arrays = ordered values (["Pranav", 19])

fruits[2] = "pomegranate";
console.log(fruits); // arrays are immutable
fruits[6] = 'cherry'; // you can add values at random index, the remaining index will be undefined/empty
console.log(fruits);

let colors = ['red', 'green'];
colors.push('blue'); // add at back
console.log(colors);
colors.pop(); // pop from back
console.log(colors);
colors.unshift('yellow');// insert at start
console.log(colors);
colors.shift() // pop from start
console.log(colors);

const nums = [10, 20, 30, 40, 50];
const subNums = nums.slice(1, 4); // shallow copy
const sNumsII = nums; // deep copy
console.log(nums);
console.log(subNums);
subNums[1] = 0;
console.log(nums);
console.log(subNums); // slice create a shallow copy which onn immutation, cannot change orignal's array's values
sNumsII[2] = 100; // this is a change in deep copy, which will reflect on orignal array
console.log(nums);

//Changes the original array by removing or replacing existing elements and/or adding new ones.
const result = nums.splice(2, 1, 30); // splice will change the orignal array, but the deleted subarray will be returned 
// arr.splice(start, deleteCount, item1, item2, ...)
console.log(result);
console.log(nums);