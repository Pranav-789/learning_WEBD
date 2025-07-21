//Types of funtions

//1. Function Declaration

function greet(){
    console.log("Hello! dec");
}
// ✅ Hoisted
// ✅ Can be called before it's defined

greet();
//2. Function Expression
// greet2();
// ReferenceError: Cannot access 'greet2' before initialization
const greet2 = function(){
    console.log("Hello! exp");
}
// ❌ Not hoisted
// ❌ Must be defined before use

greet2();

//3. Arrow function
const greet3 = ()=>{
    console.log("Hello!, arrow");
}

greet3();

//4. Anonymouse function
setTimeout(function(){
    console.log("A function which will run after 1s")
}, 1000);

//5. Immediately Invoked Function Expression

(
    function(){
        console.log("IIFE running!");
    }
)(); // executes immediately on declaration