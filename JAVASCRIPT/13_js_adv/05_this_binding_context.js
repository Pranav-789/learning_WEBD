const person = {
    name: "Pranav",

    greet(){
        console.log(`Hi, I am ${this.name}`);
    }
}

person.greet();

const greetFn = person.greet;

greetFn();//context not passed

const boundGreet = person.greet.bind({name: "John"});
boundGreet();