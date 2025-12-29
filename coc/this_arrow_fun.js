const user = {
    username : "Darshan",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website.`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Samir"
// user.welcomeMessage()

console.log(this)

function hcia (){
    let username = "darshuuu"
    console.log(this.username) // undefined
}

// hcia()

const hcia2 = function (){
    let username = "darshuuu"
    console.log(this.username) // undefined 
}

// hcia2()

const chai = () => {
    let username = "darshuuu"
    console.log(this) // undefined 
}

// chai()

// const addTwo = (num1,num2) => ( num1 + num2 )  // implicit conversion...  if we write return then ecplicit...
const addTwo = (num1,num2) => ({username:"darshan"})

console.log(addTwo(3,4))


