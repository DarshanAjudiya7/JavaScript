// if : <,>,<=,>=,==,!=,===,!==

const IsUserLoggedIn = true

if(IsUserLoggedIn){

}

const temp = 51

// if(temp < 50){
//     console.log("temperature is less than 50.")
// }
// else{
//     console.log("temperature is greater than 50.")
// }
// console.log("always executed.")

2 == "2" //true
2 === "2" //false. because, also check datatype...

const score = 300

// if(score>200){
//     let power = "fly"
//     console.log(`user power : ${power}`)
// }

// console.log(`user power : ${power}`)

const balance = 2000

// if(balance>1000) console.log("yes"), console.log('done')

// if(balance<1000){
//     console.log("less than 1000")
// }else if(balance<1200){
//     console.log("less than 1200")
// }else if(balance<1500){
//     console.log("less than 1500")
// }else if(balance<2500){
//     console.log("less than 2500")
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log('Allow to buy course')
}

if(LoggedInFromEmail || LoggedInFromGoogle || false){
     console.log("user logged in..")
}

