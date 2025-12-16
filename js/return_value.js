
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
const sum = addTwoNumbers(5, 10);
console.log("Sum:", sum);

const result = addTwoNumbers(addTwoNumbers(2, 3), addTwoNumbers(4, 5));
console.log("Result of nested function calls:", result);