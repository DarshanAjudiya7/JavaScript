function MyName(){
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");  
}
// MyName();

// function addTwoNumbers(num1, num2){ //parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){ //parameters
    // console.log("Darshan");
    return num1 + num2;
}

const result = addTwoNumbers(5, 10); // arguments
// console.log("Result :", result); // undefined

// addTwoNumbers(5, "10");
// addTwoNumbers(5,'a')

function userLogin (username = 'Guest'){ // default parameter
    if(!username ){
        return "Username is required";
    }
    return `${username} has just logged.`;
}

console.log(userLogin('Darshan'));