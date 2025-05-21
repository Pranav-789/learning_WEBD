console.log("chai code");

function sayHello() {
  console.log("I world like to say hello");
}

setTimeout(sayHello, 2000);
//not sequential exectution but on time

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
//line by line synchronous execution
