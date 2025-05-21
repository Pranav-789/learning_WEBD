let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,

    start: function(){
        return `${this.make} car got started in ${this.year}`;
    }
}
//cannot create copies of this
// console.log(car.start());

//this problem was solve by constructor function

function Person(name, age){
    this.name = name,
    this.age = age
}

let john = new Person("John", 20);
//copies of Person can be made

// console.log(john);

//Down from here: Prototype and prototypal chain

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} can make a sound`;
} //add your own methods to the prototype

Array.prototype.pranav = function(){
    return `CUstom method ${this}`
}

let myArr = [1, 2, 3];

// console.log(myArr.pranav());

//Classes from hereon

class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is started`; 
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Ford", "Mustang");

// console.log(myCar.start());
// console.log(myCar.drive());

// let vehOne = Vehicle("Toyota", "Corolla");

// console.log(vehOne);

//Encapsulation

class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
account.deposit(30000);
// console.log(account.getBalance());

//Abstraction

class CoffeMachine{
    start(){
        //call DB
        // filter value
        return `Starting the machine`
    }

    brewCoffee(){
        //complex calc
        return `Brewing coffee`;
    }

    pressStarButton(){
        let msg1 = this.start();
        let msg2 = this.brewCoffee();

        return `${msg1} + ${msg2}`;
    }
}

let myMachine = new CoffeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStarButton());

//Polymorphism

class Bird{
    fly(){
        return `Flying....`;
    }
}

class Penguin extends Bird{

    fly(){
        return `Penguin can't fly`;
    }
}

let bird = new Bird();

let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

//static method

class Calculator{
    static add(a, b){
        return a+ b;
    }
}

let miniCalc = new Calculator();

// console.log(miniCalc.add(2, 3)); //error
//static can only be accessed inside class


//Getters and Setters

class Employee{

    #salary;

    constructor(name, salary){
        this.name = name;
        this.#salary = salary; //undersccore is nothing special, just a good practice for getter and setter
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary");
        }
        else{
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary);
emp.salary = -60000;