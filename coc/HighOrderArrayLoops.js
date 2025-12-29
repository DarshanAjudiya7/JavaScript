const arr=[1,2,3,4,5]

for (const val of arr) {
    // console.log(val)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps

const map = new Map();
map.set('name', 'Darshan');
map.set('age', 20);
map.set('city', 'Rajkot');

// console.log(map) ;// it's known as unique collection of key-value pairs

for (const [key, value] of map) {
    // console.log(`${key} : ${value}`);
}

const myObj = {
    firstName : 'Darshan',
    lastName : 'Patel',
    age : 20
}

// for (const i of myObj) { // TypeError: myObj is not iterable
//     console.log(i);
// }

const obj = {
    js : 'JavaScript',
    py : 'Python',
    rb : 'Ruby'
}

for (const key in obj) {
    // console.log(obj[key]);
}

// Map is not iterable but we can iterate using for...of loop.


// ForEach Loop
const languages = ["JavaScript", "Python", "Ruby", "Java"];

// languages.forEach(function(lang, index) {
//     console.log(`${index} : ${lang}`);
// });

languages.forEach((lang, index,arr) => {
    // console.log(`${index} : ${lang} ${arr}`);
}) 

// function printMe(item)
// {
//     console.log(item);
// }

// languages.forEach(printMe);

const myCoding = [
    {
        language : 'JavaScript',
        library : 'ReactJS'
    },
    {
        language : 'python',
        library : 'Django'
    },
    {
        language : 'Java',
        library : 'Spring'
    }
]

myCoding.forEach((item) => {
    // console.log(`${item.language} : ${item.library}`);
})

const values = languages.forEach((lang)=>{
    // console.log(lang);
    return lang;
})

console.log(values); // undefined because forEach doesn't return anything

