//Challenge 1
let teaFlavors = ["green tea", "black tea", "oolong tea"];

let teaFl = new Array("green tea", "black tea", "oolong tea");

let firstTea = teaFlavors[0];

console.log(firstTea);

//Challenge 2

let cities = ["London", "Tokyo", "Paris", "New York"];

const favoriteCity = cities[2];

//Challenge 3

let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

//Challenge 4

let cititesVisited = ['Mumbai', 'Sydney'];
// cititesVisited[2] = 'Berlin'
cititesVisited.push("Berlin");

console.log(cititesVisited);

//Challenge 5
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

let popped = teaOrders.pop();
console.log(teaOrders);
console.log(popped);

//Challenge 6

let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTeas = popularTeas;

console.log(softCopyTeas);
softCopyTeas.pop();
console.log(popularTeas);

//Challenge 7

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities]

topCities.pop();

console.log(hardCopyCities);

//Challenge 8
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// let worldCities = [europeanCities, asianCities];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities); 

//Challenge 9

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

//Challenge 10

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);