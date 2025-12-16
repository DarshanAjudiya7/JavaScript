// const fruits = ['apple', 'banana', 'cherry'];   

// const myFruits = fruits;

// myFruits.push('date');
// myFruits.push('apricot');

const user1 = {
    name: "Alice",
    age: 30, 
    address: {
        city: "New York",
        country: "USA"
    },          
    subjects: ['Math', 'Science', 'History'] 
}


const user2 = { ...user1 }; // if we use spread operator it creates a shallow copy of user1 object, but address and subjects are copy of reference.
// user2.age = 32;

const user3 = JSON.parse(JSON.stringify(user1)); // Deep copy of user1 object using JSON methods
const user4 = user1; // user4 is reference to user1 object

const username1 = "Darshan";
const username2 = username1;

// username2 = username2 + "Ajudiya";

// Primitive data types (like strings, numbers, booleans) are copied by value.
// Non-primitive data types (like objects and arrays) are copied by reference.  

const cars = ['BMW', 'Audi', 'Mercedes ']; 

const myCar = [...cars]; // Using spread operator to create a shallow copy
// const myCar = cars.slice(); // Using slice method to create a shallow copy. New array is created.
// const myCar = Array.from(cars); // Using Array.from to create a shallow copy
// const myCar = [].concat(cars); // Using concat method to create a shallow copy
