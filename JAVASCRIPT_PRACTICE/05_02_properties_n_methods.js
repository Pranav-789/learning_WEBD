const name = "Pranav";
console.log(name.length);
//length is a property of the string, so they dont need ()

//but for method we have to use ()
console.log(name.charAt(1));

let lang = "JavaScript";
console.log(lang.toLowerCase()) // javascript
// converts the passed string to lowercase, smart to use over slices, whic are required of this operation, not the whole string
console.log(lang.toUpperCase()); //JAVASCRIPT

let paddedGreet = "   Hello World   ";
console.log(paddedGreet.trim()); // cleans up the trailing and preceding blanks
//but no chane in og string as it is immutable

let bio = "  Loves JS and DSA  ";
// Count real character count (excluding surrounding spaces)
let count = 0;
for(let ch of bio.trim()){
    count++; // includes internal spaces
}
console.log(count);

let word = "hello";
let word2 = word[0].toUpperCase() + word.slice(1);
console.log(word2)

//includes method
// str.includes(searchString);
let sentence = "IIIT Pune is awesome";
console.log(sentence.includes("Pune"));  // true
console.log(sentence.includes("pune"));  // false, this method is case sensitive
console.log(sentence.includes("Mumbai"));  // false

//indexOf method
let msg = "Loves JS and DSA";
console.log(msg.indexOf("JS"));  // 6
console.log(msg.indexOf("js"));  // -1, this method is also case sensitive
console.log(msg.indexOf("Python"));  // -1

//replace method
// str.replace(searchFor, replaceWith);
let greeting = "Hi there, there!";
console.log(greeting.replace("there", "Pranav")); // "Hi Pranav, there!"
console.log(greeting.replace("There", "Pranav")); // "Hi there, there!", this method is also case sensitive

//slice methode
// str.slice(startIndex, endIndex);
let college = "Indian Institute of Information Technology Pune";
console.log(college.slice(0, 6)); // "Indian"
console.log(college.slice(7, 16)); // "Institute"
console.log(college.slice(-4)); // "Pune" (starts 4 letters from end)


let mpStr = "JavaScript is awesome";
console.log(mpStr.split(" "));

let toberev = "Life is beautiful";
console.log(toberev.split(" ").reverse().join(" "));

let colors = ["Red", "Green", "Blue"];
console.log(colors.join("|"));


console.log(("Hello World").split(" ").reverse().join(" "));
console.log("level" === "level".split("").reverse().join(""));

function reverseWords(strs){
    return strs.split(" ").reverse().join(" ")
}


function isValidEmail(email){
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    return false;
}

console.log(isValidEmail("pranav@email.com"));
console.log(isValidEmail("pranav@emailcom"));
console.log(isValidEmail("pranavemail.com"));
console.log(isValidEmail("pranavemailcom"));

function capitalizeSentence(str){
    const arr =  str.split(" ")
    let newArr = [];
    for(let ele of arr){
        newArr.push(ele[0].toUpperCase() + ele.slice(1))
    }
    return newArr.join(" ");
}

console.log(capitalizeSentence("i am pranav"));

// reverse words already done