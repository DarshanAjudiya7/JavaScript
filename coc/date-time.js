// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let newdate = new Date(2024 , 0, 17);
// let newdate = new Date(2024 , 0, 17,3,5);
// let newdate = new Date("2024-01-14");
let newdate = new Date("02-17-2024");

// console.log(newdate.toDateString());
// console.log(newdate.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(newdate.getTime());
console.log(Math.floor(myTimestamp / 1000));

newdate.toLocaleDateString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});   