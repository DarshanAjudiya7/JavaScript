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

Object.seal(user); // Prevents adding or deleting properties, but allows modification of existing properties.
Object.freeze(user.address.more); // Prevents adding, deleting, or modifying properties.
// in keyword -> to check property existence or not 
console.log('City' in user); // true
console.log('Country' in user); // false
