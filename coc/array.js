const array = [1,13,43,76,22,9];

const numbers = new Array(5,10,15,20); //second method to create array

// console.log(array);
// console.log(numbers);

array.push(55);
array.push(100);
array.pop();
array.shift();
array.unshift(10);
console.log(array);

const newArray = array.join()
console.log(newArray);
console.log(typeof newArray);

const newArray2 = array.slice(1,4);
console.log("m ",newArray2);

const newArray3 = array.splice(2,3);
console.log("s ",newArray3);
// console.log("a ",array);
