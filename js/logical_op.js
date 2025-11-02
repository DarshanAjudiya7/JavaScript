const userAge = 22

const isSchoolStudent = (userAge >= 5) && (userAge <= 18)
const isCollegeStudent = (userAge >= 18) && (userAge <= 24)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4   // 0
const orResult4 = undefined || 4 + 8 * 5

//Bitwise AND & OR is Based on BINARY EXPRESIONS...

const andResult5 = 'Hello' && console.log('hello1')  //undefined 
const orResult5 = undefined || console.log('hello2') //undefined

const ex1 = 'Hello' && 4 + 8  //--> o/p is 12
const ex2 = 'Hello' || 4 + 8  //--> o/p is HELLO


let a = true;
let b = false;

// 1️⃣ Logical AND (&&)
console.log("AND Operator:");
console.log(a && b);   // false (because one condition is false)
console.log(a && true); // true (both are true)

// 2️⃣ Logical OR (||)
console.log("\nOR Operator:");
console.log(a || b);   // true (because one condition is true)
console.log(false || false); // false (both are false)

// 3️⃣ Logical NOT (!)
console.log("\nNOT Operator:");
console.log(!a);  // false (a was true)
console.log(!b);  // true (b was false)

// ⚙️ Combine operators for complex logic:
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("\nYou are allowed to enter (AND condition passed).");
}

if (age < 18 || !hasID) {
  console.log("You are NOT allowed to enter (OR/NOT condition failed).");
} else {
  console.log("Welcome! Conditions satisfied.");
}
