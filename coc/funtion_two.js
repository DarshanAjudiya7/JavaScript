function calculateCarPrice (val1 ,val2, ...num1){ // rest operator
    return num1;
}

console.log(calculateCarPrice(200,300,400,500))

const user = {
    username : "Darshan",
    Age : 20
}

function obj(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.Age}.`)
}

// obj(user)

obj({
    username : "darshu",
    Age : 22  
})

const newArray = [100,200,300,400]

function returnvalue(getArray)
{
    return getArray[2];
}

console.log(returnvalue(newArray))
console.log(returnvalue([200,100,500,700]))