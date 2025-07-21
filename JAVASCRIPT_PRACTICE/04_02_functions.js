function greetUser(name){
    console.log("Namaste", name, "!");
}

greetUser("Pranav")

const square = function (num) {
    return num*num;
}

console.log(square(5));

let num = 18;
const isEven = (num)=> {
    if(num%2===0){
        console.log(num, " is even!");
    }
    else{
        console.log(num, " is odd!");
    }
}

console.log(isEven(num)); //-> outputs: 18 is even! and undefined, because of log inside log

isEven(num)


//Parameter vs Argument

function Introduce(firstName, College){ // here firstname and College are parameters
    console.log(`Hello I am ${firstName}, and I study in ${College}`);
}

Introduce("Pranav", "IIIT PUNE"); // here Pranav and IIIT Pune are arguments

//Default Parameter

function greet(name = "Guest"){
    console.log("Hello ", name);
}

greet();
greet("Pranav")

function printIDCard(name="Student", college = "Unknown"){
    console.log("Name:", name);
    console.log("College:", college);
}

printIDCard();
printIDCard("Pranav");
printIDCard("Pranav", "IIIT PUNE");