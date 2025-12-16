// const tinder = new Object();

const tinder = {}

tinder.name = "Tinder";
tinder.version = "12.1.0";
tinder.isActive = true;
tinder.features = ['swipe', 'match', 'chat'];

console.log(tinder);

const user = {
    email : 'darshan@google.com',
    fullname: {
        userfullname : {
            firstname : 'Darshan',
            lastname : 'Patel'
        }
    }
}

// console.log(user.fullname);
// console.log(user.fullname.userfullname.firstname);

const obj1 = {
    1 : 'one',
    2 : 'two'
}

const obj2 = {
    3 : 'three',
    4 : 'four'
}

// const obj3 = { obj1, obj2}
const obj3 = Object.assign( obj1 , obj2); 
// const obj3 = Object.assign({} , obj1 , obj2); // merges obj2 into obj1. all values copied into {} empty object
const obj4 = {...obj1, ...obj2}; // spread operator to merge objects
// console.log(obj4);
// console.log(obj3);

// console.lor(obj3 === obj1); // true, because obj1 is modified and returned by Object.assign
// console.log(obj3 === obj2); // false, because obj2 is not modified

const users = [
    { id: 1, name : 'Darshan' },
    { id: 2, name : 'John' },
    { id: 3, name : 'Alice' }
]; 

// console.log(users[1].name)

console.log( Object.keys(tinder) ); // get all keys of object as array
console.log( Object.values(tinder) ); // get all values of object as array
console.log( Object.entries(tinder) ); // get all entries of object as array of [key, value] pairs

console.log( tinder.hasOwnProperty('name') ); // check if object has specific property
console.log( tinder.hasOwnProperty('Active') );