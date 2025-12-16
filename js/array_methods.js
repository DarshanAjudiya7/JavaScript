//array all methods are here. like push, pop, shift, unshift, splice, slice, map, filter, reduce, forEach etc.
// array is a special type of object in javascript which can hold multiple values in a single variable.

const oddNumbers = [1, 3, 5, 7, 9,11,13,15,17,19,21,23,25];
const animals = ['cat', 'dog', 'elephant', 'tiger'];
const evenNumbers = [2, 4, 6, 8, 10];

const join_two_arrays = oddNumbers.concat(animals,evenNumbers); // gives string concatenation of both arrays

oddNumbers.shift(); // removes first element
oddNumbers.unshift(11); // adds element at first
evenNumbers.indexOf(6); // gives index of element 6, id don't exist gives -1.
animals.includes('dog'); // gives true
animals.includes('fog'); // gives false
const rvrs = animals.reverse(); // reverses the array
oddNumbers.sort(); // sorts the array in alphabetical order
animals.sort(); // sorts the array in alphabetical order. Capital letters first then small letters.
const splicedArray = oddNumbers.splice(2, 3, 13, 15, 17); // removes 3 elements from index 2 and adds 13,15,17 at index 2
const slicedArray = evenNumbers.slice(1, 4); // gives new array from index 1 to 3 (4-1)
//slice doesn't modify original array.
//splice modifies original array. we can remove 2 and add 2 or more elements at same time.