const username = 'Anurag'
let userAge = 25
var a = 50

function add() {
  debugger
  const username = 'Akash'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username)
}

function subtract() {
  const x = 15
  const y = 18
  const z = 20
  console.log(x - y)
  console.log(username)

  function child() {
    const username = 'Chirag'
    console.log(username)
    console.log(z)

    {
        let im = 'Inside Block';
        var imVar = 'Inside Block Var';
    } // Block Scope. const and let are block scoped. but var is not block scoped.
    console.log(im); // ReferenceError: im is not defined
    console.log(imVar); // 'Inside Block Var'

    function grandChild() {
      const username = 'Deepak'
      console.log(username)
      console.log(a)
    }
    grandChild()
  }
  child()
}

add()
subtract()

console.log('Program Ended')
/* 
1. Lexical Scope (Static Scope)

Definition
Lexical Scope means:
👉 A variable can be accessed based on where it is written in the code — not from where it is called.
JavaScript uses lexical scoping, meaning the scope is decided at the time of writing the code, not at runtime.

Key Idea
Inner functions can access:

their own variables
variables of their parent function
variables of the global scope
But parent functions cannot access variables of child function.

2. Block Scope

Definition
A block in JavaScript is anything inside { }.
Block scope means variables declared with let and const are only accessible inside that block.

# EXTRA NOTES

✅ What is Module Scope?

Module Scope means:
👉 Every JavaScript module (a file using ES6 import/export) has its own private scope.
👉 Variables, functions, and classes declared inside a module are not accessible outside unless explicitly exported.

Each JS file is treated as a separate module.

🙌 Why do we need Module Scope?
Module scope helps in:
✔ Avoiding global variable pollution
✔ Organizing code into reusable components
✔ Avoiding naming conflicts
✔ Improving security by hiding implementation details

📌 How Module Scope Works
❗ Important Concept:
By default, everything inside a module is private.

You must use:
export → to expose something outside
import → to use something from another module

*/