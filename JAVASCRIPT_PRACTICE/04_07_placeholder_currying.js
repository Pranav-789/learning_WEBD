function curry(fn) {
  const placeholder = (curry.placeholder = Symbol("placeholder"));
  return function curried(...args) {
    return _curried(fn, args);
  };

  function _curried(fn, argsSoFar) {
    return function (...nextArgs) {
      const mergedArgs = [];

      let i = 0,
        j = 0;
      while (i < argsSoFar.length || j < nextArgs.length) {
        if (i < argsSoFar.length && argsSoFar[i] !== placeholder) {
          mergedArgs.push(argsSoFar[i]);
          i++;
        } else if (j < nextArgs.length) {
          mergedArgs.push(nextArgs[j]);
          if (i < argsSoFar.length) i++;
          j++;
        } else if (i < argsSoFar.length) {
          mergedArgs.push(argsSoFar[i]);
          i++;
        }
      }

      const totalFilled = mergedArgs.filter((x) => x !== placeholder).length;
      if (totalFilled >= fn.length) {
        return fn(...mergedArgs);
      } else {
        return _curried(fn, mergedArgs);
      }
    };
  }
}

const _ = curry.placeholder;

const greet = curry((title, name, emoji) => `Hello ${title} ${name} ${emoji}!`);

greet(_, "Pranav")("Mr.", "👋"); // → "Hello Mr. Pranav 👋!"
console.log(greet(_, "Pranav")("Mr.", "👋"))
