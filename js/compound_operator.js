// Compound oprators are: +=, -=, *=, /=, %=, **=, increment (++) and decrement (--) operators.

let a = 10;
a += 5;    // using += operator
a -= 3;    // using -= operator
a *= 2;    // using *= operator
a **= 2;   // using **= operator
a /= 4;    // using /= operator
a %= 5;    // using %= operator 
a = ++a;    // using ++ operator
a = --a;    // using -- operator
a = a++;    // using postfix ++ operator
a = a--;    // using postfix -- operator

console.log("Final value of a:", a);