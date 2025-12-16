console.log("Darshna Ajudiya")

const myName = "Darshan-Aju";

const user = { 
    Fname: "Darshan", 
    'L-name': "Ajudiya", 
    Age: 20, 
    City: 'Rajkot', 
    Education: 12, 
    BirthYear: 2006,
    address: {
        street: "123 Main St",
        city: "Rajkot",
        zip: 360001,
        more: {
            landmark: "Near Park",
            state: "Gujarat",
            population: 1000000
        }
    }
}
user.age = 21; // adding new key-value pair
user['Country'] = 'India'; // adding new key-value pair using bracket notation      

// Note:
// same two empty objects name have different address...(Non-primitive)
// same two empty strings have same address...(primitive)

console.log(user.Fname);
console.log(user['L-name']);
console.log(user[myName]);
console.log(user['F' + 'name']);