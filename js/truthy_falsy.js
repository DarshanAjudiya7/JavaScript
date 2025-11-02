// 💡 TRUTHY & FALSY VALUES IN JAVASCRIPT
// In JavaScript, every value is either TRUTHY or FALSY when converted to a Boolean (true/false).

// 1️⃣ FALSY VALUES → These behave as false when tested in conditions.
// There are ONLY 7 falsy values in JavaScript:
let falsyValues = [false, 0, -0, "", null, undefined, NaN];

console.log("Falsy Values:");
for (let value of falsyValues) {
  console.log(value, "→", Boolean(value)); // All will print 'false'
}

// 2️⃣ TRUTHY VALUES → Everything else is considered true.
let truthyValues = [true, 1, "hello", "0", [], {}, function(){}, Infinity];

console.log("\nTruthy Values:");
for (let value of truthyValues) {
  console.log(value, "→", Boolean(value)); // All will print 'true'
}

// 3️⃣ Practical Example:
let username = "";
let score = 0;

if (username) {
  console.log("\nUser logged in!");
} else {
  console.log("No username provided (falsy value).");
}

if (score) {
  console.log("You have points!");
} else {
  console.log("Score is zero (falsy value).");
}

// 4️⃣ Using double NOT (!!) to quickly check truthy/falsy nature
console.log("\nCheck using !! operator:");
console.log("!!'JavaScript' →", !!'JavaScript'); // true (truthy)
console.log("!!0 →", !!0); // false (falsy)
