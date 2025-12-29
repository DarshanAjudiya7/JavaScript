const myNumbers = [1,2,3,4,5];

const numbers = myNumbers.filter((num) => {
    return num % 2 === 0;
});

// console.log(numbers);

// const nums = []
// nums.forEach((num) => {
//     if (num % 2 === 0) { 
//         nums.push(num);
//     }
// });

// console.log(nums);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },

  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },

  { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },

  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010 },

  { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },

  { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },

  { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 },

  { title: 'Book Eight', genre: 'Science', publish: 2011,
    edition: 2016 },
];

const oldBooks = books.filter((book) => book.publish < 1990 && book.genre === 'History');

// console.log(oldBooks);


// Mapping

const number = [1,2,3,4,5,6,7,8,9,10];

// const square = number.map((n) => n * n);

// console.log(square);

const numers = number.map((n) => n * 10).map((n) => n + 5).filter((n) => n>50);

// console.log(numers);

//Reduce

const arr = [1,2,3,4,5];

const sum = arr.reduce((accumulator, currentValue) => {
  // console.log(`Accumulator: ${accumulator} , Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(sum);


const shoppingCart = [
    { product: 'Laptop', price: 1000, quantity: 1 },
    { product: 'Phone', price: 500, quantity: 2 },
    { product: 'Tablet', price: 300, quantity: 3 }
];

const totalAmount = shoppingCart.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);

console.log(totalAmount);