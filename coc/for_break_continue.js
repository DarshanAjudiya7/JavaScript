// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i + 1;
//     if(element==5){
//         console.log("five")
//     }
//     console.log(element)
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop : ${i+1}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop : ${i+1} & ${j+1}`)
        // console.log(i + '*' + j + '=' + i*j)
    }
}

let myArray = ['darshan','samir','krisha']
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// break & continue

for (let i = 1; i <= 10; i++) {
    if(i==5){
        console.log('five')
        continue
    }
    console.log(`value of i is ${i}`)
}
console.log("--+++++--")
for (let i = 1; i <= 10; i++) {
    if(i==5){
        console.log('five')
        break
    }
    console.log(`value of i is ${i}`)
}