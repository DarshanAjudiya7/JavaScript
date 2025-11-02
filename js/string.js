const Name = "Darshan"

const upper = Name.toUpperCase()
const lower = Name.toLowerCase()
const trim = Name.trim() // remove the space which is ahead & behind
const include = "Hi I am Darshan Ajudiya".includes("Darshan") //in braces string in exist or not in given string

// All JavaScript String Properties & Methods with Output

let str = " Hello JavaScript World! ";

// 🔹 Property
console.log("length:", str.length); 
// output: 24

// 🔹 Character Access
console.log("charAt(7):", str.charAt(7)); 
// output: J
console.log("charCodeAt(7):", str.charCodeAt(7)); 
// output: 74
console.log("at(-1):", str.at(-1)); 
// output: " "
console.log("codePointAt(7):", str.codePointAt(7)); 
// output: 74
console.log("fromCharCode(72,69,76,76,79):", String.fromCharCode(72,69,76,76,79)); 
// output: HELLO
console.log("fromCodePoint(128512):", String.fromCodePoint(128512)); 
// output: 😀

/* 🔹 Searching */
console.log("indexOf('World'):", str.indexOf("World")); 
// output: 18
console.log("lastIndexOf('o'):", str.lastIndexOf("o")); 
// output: 20
console.log("includes('Java'):", str.includes("Java")); 
// output: true
console.log("startsWith(' Hello'):", str.startsWith(" Hello")); 
// output: true
console.log("endsWith('! '):", str.endsWith("! ")); 
// output: true
console.log("search('Script'):", str.search("Script")); 
// output: 13
console.log("match(/o/g):", str.match(/o/g)); 
// output: [ 'o', 'o' ]
console.log("matchAll(/o/g):", [...str.matchAll(/o/g)]); 
// output: [ [ 'o', index: 5, input: ' Hello JavaScript World! ', groups: undefined ],
//           [ 'o', index: 20, input: ' Hello JavaScript World! ', groups: undefined ] ]

/* 🔹 Extracting */
console.log("slice(1, 6):", str.slice(1, 6)); 
// output: Hello
console.log("substring(1, 6):", str.substring(1, 6)); 
// output: Hello
console.log("substr(1, 5):", str.substr(1, 5)); 
// output: Hello

/* 🔹 Modifying */
console.log("concat:", str.concat(" Rocks!")); 
// output:  Hello JavaScript World!  Rocks!
console.log("repeat(2):", str.repeat(2)); 
// output:  Hello JavaScript World!  Hello JavaScript World! 
console.log("padStart(30,'*'):", str.trim().padStart(30, "*")); 
// output: **********Hello JavaScript World!
console.log("padEnd(30,'*'):", str.trim().padEnd(30, "*")); 
// output: Hello JavaScript World!**********
console.log("trim():", str.trim()); 
// output: Hello JavaScript World!
console.log("trimStart():", str.trimStart()); 
// output: "Hello JavaScript World! "
console.log("trimEnd():", str.trimEnd()); 
// output: " Hello JavaScript World!"

/* 🔹 Case Change */
console.log("toUpperCase():", str.toUpperCase()); 
// output:  HELLO JAVASCRIPT WORLD! 
console.log("toLowerCase():", str.toLowerCase()); 
// output:  hello javascript world! 
console.log("toLocaleUpperCase():", str.toLocaleUpperCase()); 
// output:  HELLO JAVASCRIPT WORLD! 
console.log("toLocaleLowerCase():", str.toLocaleLowerCase()); 
// output:  hello javascript world! 

/* 🔹 Split & Replace */
console.log("split(' '):", str.split(" ")); 
// output: [ '', 'Hello', 'JavaScript', 'World!', '' ]
console.log("replace('World','JS'):", str.replace("World","JS")); 
// output:  Hello JavaScript JS! 
console.log("replaceAll('o','0'):", str.replaceAll("o","0")); 
// output:  Hell0 JavaScript W0rld! 

/* 🔹 Raw & Primitive */
console.log("valueOf():", str.valueOf()); 
// output:  Hello JavaScript World! 
console.log("toString():", str.toString()); 
// output:  Hello JavaScript World! 
console.log("String.raw:", String.raw`Hello\nWorld`); 
// output: Hello\nWorld

/* 🔹 Iteration */
for (let ch of str.trim()) {
  process.stdout.write(ch + " ");
}
// output (inline): H e l l o   J a v a S c r i p t   W o r l d !

console.log("\nentries():", [...str.trim().entries()]); 
// output: [ [0,'H'], [1,'e'], [2,'l'], ... ]
console.log("keys():", [...str.trim().keys()]); 
// output: [0,1,2,3,4,...,20]
console.log("values():", [...str.trim().values()]); 
// output: ['H','e','l','l','o',' ','J','a','v','a','S','c','r','i','p','t',' ','W','o','r','l','d','!']

// 🔹 JavaScript Template Literals (Examples)

// Variables
let name = "Darshan";
let age = 20;

// 1. Normal string vs Template literal
let normal = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(normal);
// output: Hello, my name is Darshan and I am 20 years old.

let template = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(template);
// output: Hello, my name is Darshan and I am 20 years old.

// 2. Multi-line string
let multi = `This is line 1
This is line 2
This is line 3`;
console.log(multi);
/* output:
This is line 1
This is line 2
This is line 3
*/

// 3. Expressions inside ${}
let a = 10, b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
// output: The sum of 10 and 5 is 15

console.log(`Next year I will be ${age + 1} years old`);
// output: Next year I will be 21 years old

// 4. Function calls inside ${}
function greet(n) {
  return `Hello ${n}!`;
}
console.log(`${greet("Darshan")}, welcome to JS.`);
// output: Hello Darshan!, welcome to JS.

// 5. Nested template literals
let course = "JavaScript";
let msg = `I am ${name}, learning ${course} which is ${course.length > 5 ? "awesome" : "ok"}`;
console.log(msg);
// output: I am Darshan, learning JavaScript which is awesome

// 6. Tagged template literal
function highlight(strings, ...values) {
  return strings.reduce((res, str, i) => res + str + (values[i] ? values[i].toUpperCase() : ""), "");
}

let lang = "javascript";
console.log(highlight`User: ${name}, Age: ${age}, Lang: ${lang}`);
// output: User: DARSHAN, Age: 20, Lang: JAVASCRIPT

// 7. Raw template literal
console.log(String.raw`Hello\nWorld`);
// output: Hello\nWorld (keeps \n as text, no newline)
