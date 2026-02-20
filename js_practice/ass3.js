
// Q1 Remove states starting with vowels
console.log("Q1 Output:");

let states = [
  "Maharashtra", "Uttar Pradesh", "Odisha", "Assam",
  "Bihar", "Karnataka", "Andhra Pradesh", "Tamil Nadu"
];

let filteredStates = states.filter(state => {
  let first = state[0].toLowerCase();
  return !['a','e','i','o','u'].includes(first);
});

console.log(filteredStates);


// Q2 Reverse sentence words
console.log("\nQ2 Output:");

let str = "I love my India";
let reversedSentence = str.split(" ").reverse().join(" ");
console.log(reversedSentence);


// Q3 INDIA → INDONESIA using splice
console.log("\nQ3 Output:");

let string = "INDIA";
let arr = string.split("");
arr.splice(3, 0, "O", "N", "E", "S");
let newString = arr.join("");
console.log(newString);


// Q4 Count vowels and consonants
console.log("\nQ4 Output:");

let text = "JavaScript is very powerful language";
let vowels = 0;
let consonants = 0;

for (let ch of text.toLowerCase()) {
  if (/[a-z]/.test(ch)) {
    if ("aeiou".includes(ch)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// Q5 Replace wrong word
console.log("\nQ5 Output:");

function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

console.log(correctfn("I love Jav", "Jav", "Java"));

// Q6 Filter numbers > 5
console.log("\nQ6 Output:");

let inputArr = [1,2,3,9,10,7,5,4,3];
let greaterThanFive = inputArr.filter(num => num > 5);
console.log(greaterThanFive);


// Q7 Average using map & reduce
console.log("\nQ7 Output:");

const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

let averages = students.map(student => {
  let total = student.scores.reduce((sum, score) => sum + score, 0);
  return {
    name: student.name,
    average: total / student.scores.length
  };
});

console.log(averages);


// Q8 Repeated sum of digits
console.log("\nQ8 Output:");

function singleDigit(num) {
  while (num > 9) {
    num = num.toString()
             .split("")
             .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

console.log(singleDigit(456));

// Q9 Count words
console.log("\nQ9 Output:");

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is very powerful language"));

// q10
// Q10 Reverse string
// =============================
console.log("\nQ10 Output:");

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));


// Q11 Average marks using object methods
console.log("\nQ11 Output:");

let studentData = [
  {
    name: "student1",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: "student2",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: "student3",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

let finalResult = studentData.map(student => {
  let values = Object.values(student.marks);
  let total = values.reduce((sum, val) => sum + val, 0);
  return {
    name: student.name,
    average: Math.round(total / values.length)
  };
});

console.log(finalResult);
