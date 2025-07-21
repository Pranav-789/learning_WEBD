if('2' > '10'){
    console.log(true)
}
else{
    console.log(false)
}

// Both '2' and '10' are strings.

// String comparison in JavaScript is done lexicographically, like a dictionary — character by character, based on their Unicode values.

// Unicode of:

// '2' → 50

// '1' → 49

// So comparison is:

// '2' vs '1' → 50 > 49 → ✅ true

// Since '2' is already greater, it doesn’t even check the next character in '10'.

// 🔸 Hence, it prints: true

if ("2" > 10) {
  console.log(true);
} else {
  console.log(false);
}

// JavaScript detects different types (string and number), so it tries to coerce (convert) the string '2' to a number.

// "2" → 2

// Now comparison becomes:
// 2 > 10 → false
// Hence, it prints: false

const arr = [1, 20, 3, 50, 9]

const newArr = arr.sort();

console.log(newArr);

// output: [ 1, 20, 3, 50, 9 ]

//this happens due to lexographical comparison in js, all the numbers in array are converted to strings and then compared lexographically, resulting in above result

//to solve above problem we use custom comparator
const newArrII = arr.sort((a, b)=> a-b);
console.log(newArrII);