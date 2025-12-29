/* Execusion Context

1. Global execusion context
2. Function execution context

{}code => Memory creation phase
          Execusion phase
*/

let val1 = 10
let val2 = 20

function addNum(num1,num2){
    let total = num1 + num2
    return total
    }
let result1 = addNum(val1,val2)
let result2 = addNum(3,4)

/* 
1. Global execution -> this
2. Memory phase => val1 -> undefined
                   val2 -> undefined
                   addNum -> defination
                   result1 -> undefined
                   result2 -> undefined 
3. Execusion phase val1 -> 10
                   val2 -> 20
                   addNum -> [ new variable enviornment + execusion thread] 1. Memory phase ---> val1 -> undefined
                                                                                              |--> val2 -> undefined
                                                                                              |--> total -> undefined
                                                                            2. Execusion context --> num1 -> 10 => after execusion,
                                                                              it is deleted.
                                                                                                 |-> num2 -> 20
                                                                                                 |-> total -> 30 =>  which is 
                                                                                                   return in global ececusion 
                                                                                                   context... 
                   result1 = 30
                   result2 -> [NVE + thread] 1. Memory phase & 2. Execusion context repeatation process...
*/

/*
Call Stack --> LIFO
one(){
    two(){
        three(){
                
        }   
    }
}

op: three -> two -> one

*/



