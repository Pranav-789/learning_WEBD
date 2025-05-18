//Challenge 1

let array = ["green tea", "black tea", "chai", "oolong tea"];
let newArray = [];

for(let i = 0; i < array.length; i++){
    if(array[i] !== "chai"){
        newArray.push(array[i]);
    }
    else{
        break; //stops innermost loop
    }
}

// console.log(newArray);

//challenge 2

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if(visitedCities[i] === "Paris") continue; //skips an iteration

    visitedCities.push(cities[i]);
}

// console.log(visitedCities);

//Challenge 3
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const element of numbers) {
    if(element == 4) break;
    smallNumbers.push(element);
}

// console.log(smallNumbers);

//Challenge 4
let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTea = [];

for (const cha of tea) {
    if(cha==="herbal tea") continue;
    preferredTea.push(cha);
}

// console.log(preferredTea);

//Challenge 5

let population = {
    "London": 890000,
    "New York": 840000,
    "Paris": 2200000,
    "Berlin": 3500000,
}

let cityPopulations = {};

for (const key in population) {
    if(key == "Berlin") break;
    cityPopulations[key] = population[key];
}

// console.log(cityPopulations);

//Challenge 6

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
}

let largeCities = {};

for (const city in worldCities) {
    if(worldCities[city] < 3000000) continue;
    largeCities[city] = worldCities[city];
}

// console.log(largeCities);

//Challenge 7

let teas = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

teas.forEach((ntea) => {
    if(ntea === "chai"){
        return; //this is function
    }
    availableTeas.push(ntea);
});

// console.log(availableTeas);

//Challenge 8

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let travelledCities = [];

myWorldCities.forEach(city =>{
    if(city === 'Sydney'){
        return;
    }
    travelledCities.push(city);
})

// console.log(travelledCities);

//Challenge 9

let numarr = [2, 5, 7, 9];

let doubledNumbers = [];

for (let l = 0; l < numarr.length; l++) {
    if(numarr[l] === 7) continue;

    doubledNumbers.push(numarr[l]*2)
}

// console.log(doubledNumbers);

// Challenge 10
let teaCollection = ["green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTea = [];

for (const tea_a of teaCollection) {
    if(tea_a.length > 10) break;
    
    shortTea.push(tea_a);
}

console.log(shortTea);