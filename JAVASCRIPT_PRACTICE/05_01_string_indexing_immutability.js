let str = "Pranav";
console.log(str[0]); // P
console.log(str[3]); // n

console.log(str[100]); // undefined (index out of range)

str[1] = 'o';
console.log(str); // strings are immutable

//correct way to change
let updated = "B" + str.slice(1);
console.log(updated);
// 📘 Real-Life Analogy:
// Think of strings like read-only books—you can read pages, but can’t edit them directly.
// To modify, you need to create a new copy with your edits.

for(let ch of str){
    console.log(ch);
}

for (let key in str) {
  console.log(key);
}

