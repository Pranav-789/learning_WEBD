function multiply(a, b, c){
    return a*b*c;
}

console.log(multiply(2, 3, 5));

function curriedMultiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

const multby2 = curriedMultiply(2);
const multby2and5 = multby2(5);

console.log(multby2and5(9))

//2. Automatic Currying using arrow functions

// const add = a => b => c => a+b+c;

// console.log(add(2)(3)(4));


//making a curry utility

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args);
        }
        else{
            return function(...next){
                return curried.apply(this, args.concat(next));
            }
        }
    }
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum = curry(sum);

curriedSum(1)(2)(3)(4);       // 10
curriedSum(1, 2)(3, 4);       // 10
curriedSum(1)(2, 3, 4);       // 10
console.log(curriedSum(1, 2, 3)(4))       // 10


function add(a, b, c){
    return a+b+c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(2)(7)(9))

function curry2(fn){
    return function curried(...args){
        if(args.length >= 2){
            return fn.apply(this, args);
        }
        else{
            return function(...next){
                return curried.apply(this, args.concat(next));
            }
        }
    }
}

const multixbyy = curry2((a, b)=>a*b)(9)(16);
console.log(multixbyy);