const userEmail = [" "]
const userEmail2 = ' '

if(userEmail2){
    console.log('got user mail')
}else{
    console.log('not get')
}

// falsy values : false, 0, -0, BigInt 0n, null, undefined, "", NaN
// truthy values : true, "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty..")
// }else{
//     console.log("Array isn't empty..")
// }

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("object is empty..")
}
 
// false == 0 && 0 == '' && '' == false ==> true

// Nullish Coalescing Operator (??) : null undefined

let value;
// value = null ?? 12
// value = 11 ?? 13
// value = undefined ?? 17
// value = null ?? undefined
value = null ?? 50 ?? 70

console.log(value)

// Ternary Operator
// condition ? true : false

const price = 100
price > 70 ? console.log('yesss') : console.log("nooo")
