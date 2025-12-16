const carCollection = [
    "BMW X5",
    "Audi A6",
    "Mercedes C-Class",
    "Tesla Model 3",
    "Toyota Fortuner",
    "Range Rover Sport",
    "Honda City",
    "Hyundai Creta",
    {},
    'brand',{ model: "Mustang", year: 2021 }
];

const username = "DarshanAju7";

// string, array are also objects in JavaScript.
// if we change any element, adderss of array will remain same.
// but if we reassign the array, address will change.
// empty object is also an element of array.

const rainbowColors = [
    "Violet",
    "Indigo",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Red"
];

carCollection.push("Ford Mustang"); // adds element at last
carCollection.pop(); // removes last element

// we can't use push, pop on array like objects. but length is zero because array can't take key-value pairs.