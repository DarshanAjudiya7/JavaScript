console.log(username); // Output: undefined
console.log(username2); // ReferenceError: Cannot access 'username2' before initialization

var username = "DarshanAju";   
const username2 = "SamirAju";

SayHello(); //  function hoisted, so no error.
// Function Declaration Hoisting definition
function SayHello(){
    console.log("Hello");
} 

sayhi(); // TypeError: sayhi is not a function
// Function Expression Hoisting definition
const sayhi = function() {
    console.log("Hi");
} // Anonymous function assigned to a variable

//we can't stop memory creation phase but we can stop code execution phase.

/*

✔ What is Hoisting? (Simple Definition)
--> Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (global or function) during the memory creation phase.

➡️ Declarations are hoisted
❌ Initializations (values) are NOT hoisted

Meaning: JavaScript knows variables and functions before executing the code.

⭐ How Hoisting Actually Works Internally

Before running any code, JavaScript engine creates the Execution Context, which has 2 phases:

1. Memory Creation Phase
--> Variables declared with var are hoisted and initialized with undefined
--> Variables declared with let & const are hoisted but NOT initialized → go into Temporal Dead Zone (TDZ)
--> Function declarations are hoisted with full function body

2. Execution Phase
--> Code runs line-by-line.

# What Exactly Is a Temporal Dead Zone in JavaScript?

--> A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer
completely initializes it with a value.

--> The temporal dead zone (TDZ) is a period in JavaScript where a variable declared with let or const cannot be accessed,
even though it exists in the scope. It begins when the code enters the variable's scope and ends when the variable is 
initialized with a value. Accessing a variable within its TDZ results in a {ReferenceError}. 

*/