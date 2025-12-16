/* Global Execusion Context 
    1. Memory Creation Phase : define global object, this, outer environment.
    2. Code Execution Phase : assign values to variables and execute code.
*/

var username = "DarshanAju";
var username2 = "SamirAju";

console.log("Username:", username);

function addTwoNumbers(num1, num2) {
    console.log("Sum inside function:", num1 + num2); // This line will never be executed  
    return num1 + num2;
}

function SayHello(){
    addTwoNumbers(5, 10);
    console.log("Hello");
}

SayHello()

