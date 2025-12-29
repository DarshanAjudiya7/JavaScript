// Immediately Invoked Function Expressions (IIFE)

(function fn(){ // named IIFE
    console.log(`DB connected...`)
})();

// +++++ IIFE ++++
// --> global scope k pollution k problem se bachne k liye iife ka use hota hai...

( (name) => { //simple IIFE
    console.log(`device connected ${name}`)
})("darshuuu")