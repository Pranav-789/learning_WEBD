// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet("Pranav");

//Challenge 1

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
}

let tea = makeTea("lemon tea");

// console.log(tea);

//Challenge 2

function orderTea(teaType){
    function confirmOrder() {
        return `Order confirmed for chai`;
    }

    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation); 

//Challenge 3

const calculateTotal = (price, quantity) =>{
    return price*quantity;
}

let totalCost = calculateTotal(399, 100);

//Challenge 4
function makeTea(typeOfTea){
    return `Maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea);

// console.log(order);

//Challenge 5

function createTeaMaker(name){
    return function(teaType){
        return `Making ${teaType}`;
    }
}

let teaMaker = createTeaMaker('Pranav');
let result = (teaMaker('green tea'));

console.log(result);