//Challenge 1

let sum = 0;
let cnt = 1;

while(cnt <= 5){
    sum += cnt
    cnt++;
}

console.log(sum);

//Challenge 2

let countdown = [];
let j = 5;

while(j > 0){
    countdown.push(j);
    j--;
}

console.log(countdown);

//Challenge 3

// let teaCollection = [];
// let tea;

// do{
//     tea = prompt(`Enter your favourite tea (type stop to finish): `);
//     if(tea !== 'stop'){
//         teaCollection.push(tea);
//     }
// }while(tea !== "stop");
//promt works in browser console as not supported in node

//Challenge 4
let total = 0;
let adder = 1;
do {
    total += adder;
    adder++;
} while (adder <= 3);

console.log(total);

//Challenge 5

let numbers = [2, 4, 6];

let multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    multipliedNumbers.push(numbers[i] * 2);
}

console.log(multipliedNumbers);

//Challenge 6

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for(let l = 0; l < cities.length; l++){
    console.log(cities[l]);
    cityList.push(cities[l]);
}

console.log(cityList);