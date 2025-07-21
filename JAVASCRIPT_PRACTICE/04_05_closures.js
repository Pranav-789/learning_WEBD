// 🧠 1. What is a Closure? (Explanation)
// A closure is formed when a **function "remembers" the variables from its lexical scope, even after that outer function has finished executing.

// It means:

// Functions in JS can “remember” the environment in which they were created.

// So, inner functions retain access to variables defined in their outer function — even after the outer function has returned.

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer(); // outer() runs, count = 0, inner is returned
counter(); // prints 1
counter(); // prints 2


function secretDiary(){
    let secrets = [];

    function storeSecrets(secret){
        secrets.push(secret);
        console.log("you new secret", secret, "stored successfully");
        console.log("Your secrets so far: ", secrets);
    }

    return storeSecrets;
}

const storeMySecret = secretDiary();
storeMySecret("I have a dog named A & P");
storeMySecret("I am a beidou main");

function createGreeter(name) {
  //the name is passed on to function, which is global
  // closure includes lexical scope variable
  // so if we try this name here direclty, it should work
  // Q. does this lexical scope allow global values also, or the values declared inside outer only?
  // Global variables are not part of the closure, but they are still accessible from inside it

  return function () {
    console.log("Hello", name);
  };
}

const greetPranav = createGreeter("Pranav");
greetPranav(); // Expected: "Hello, Pranav!"

const greetAether = createGreeter("Aether");
greetAether(); // Expected: "Hello, Aether!"
