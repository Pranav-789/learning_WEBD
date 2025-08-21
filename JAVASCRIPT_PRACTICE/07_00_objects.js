const Person = {
    name: "Pranav",
    age: 19,
    isStudent: true,
}

console.log("Person: "+ typeof(Person));
console.log(Person);

const Laptop = {
    brand: "Infinix",
    price: "617$",
    ram: 32,
}

console.log(`Laptop: ${Laptop.brand}, price: ${Laptop.price}, RAM: ${Laptop.ram}`);

console.log(Laptop.name) // undefined


Laptop.price = "548$"; //objects are immutable
Laptop.processor = "Intel i9"; 
console.log(delete Laptop.ram); // return bool if value is deleted from object
console.log(Laptop);

const student = {
  name: "Aarav",
  age: 20,
  scores: {
    math: 85,
    science: 92,
  },
};

const {name} = student;
const {scores} = student;
const {math} = scores
console.log(name);
console.log(math);

console.log(`Student ${name} scored ${math} in Math`);

if(!('grade' in student)){
    student['grade'] = 'A+'
}

console.log(student)

const subject = "science";
// access marks using subject variable
if(subject in student.scores){
    console.log(student.scores[subject]);
}



for (let subject of Object.keys(student.scores)) {
  console.log(subject);
}

for (let subject of Object.values(student.scores)) {
  console.log(subject);
}

for(const [subject, marks] of Object.entries(student.scores)){
    console.log(subject + ": " + marks)
}

const userProfile = {
  username: "pranav19",
  details: {
    email: "pranav@example.com",
    preferences: {
      theme: "dark",
    },
  },
};



console.log(userProfile?.details?.preferences?.hasOwnProperty("theme"));
userProfile.details.preferences.language = "english";
console.log(userProfile);
console.log(userProfile?.details.hasOwnProperty("email"));

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,
};

// Clone using Object.assign()
const copiedBook1 = Object.assign({}, book);

// Clone using spread
const copiedBook2 = { ...book }; // both create shallow copy

// Change in copiedBook1
copiedBook1.pages = 350;

console.log("Original:", book);        // Still 320 ✅
console.log("Copied (assign):", copiedBook1); // Changed to 350 ✅

console.log("Same object?", book === copiedBook1); // false ✅
console.log(
  "Same content?",
  JSON.stringify(book) === JSON.stringify(copiedBook1)
); // false (pages changed) ❗
