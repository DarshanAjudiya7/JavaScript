const username = 'DarshanAju';  
let userAge = 25;
var isAdmin = true;

function add(){
    const num1 = 10;
    const num2 = 20;
    console.log("Sum inside function:", num1 + num2); 
    return num1 + num2;
}

console.log(num1); // ReferenceError: num1 is not defined

console.log('program ended');

/* Global Scope: Variables declared outside any function have global scope.
Two Categories:
1. Window Object (in browsers)
2. Global Object (in Node.js). 
*/