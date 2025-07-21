let birthYear = 2000;

function calculateAge(year){
    //current year is 2025
    // therefore ans = 2025-year
    return 2025-year;
}

console.log("Age: ", calculateAge(birthYear));

//Hoisting concept:


console.log(sum(5, 7));
console.log(a);
// these both give Reference error if accessed before declaring
// let a = 10;  
// const a = 

var a = 10 // if accessed before declaring it, returns undefined
console.log(a);

function sum(a, b){
    return a+b;
}
//function can be accessed before it is declared


// greet(); // ❌ TypeError: greet is not a function, if called before declaring if greet is a function expression

var greet = function () {
  console.log("Hi!");
};
greet()
