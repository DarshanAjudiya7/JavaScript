const intro = console.log("this is math object file")

/* Mathematical Oparetors
   + - * / % **
*/

// In JavaScript there are many Math functions. You can use those by write "Math" in console. like E,PI etc...

// === Properties (Constants) ===
console.log("Math.E:", Math.E); //2.71
console.log("Math.LN2:", Math.LN2);
console.log("Math.LN10:", Math.LN10);
console.log("Math.LOG2E:", Math.LOG2E);
console.log("Math.LOG10E:", Math.LOG10E);
console.log("Math.PI:", Math.PI); // 3.14
console.log("Math.SQRT1_2:", Math.SQRT1_2);
console.log("Math.SQRT2:", Math.SQRT2);

// === Methods ===

// Absolute & Sign
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.sign(-20):", Math.sign(-20));
// to convert valid string into integer using -->> (+length)


// Rounding
console.log("Math.round(5.7):", Math.round(5.7)); // 6 >> Round Off wala concept
console.log("Math.ceil(5.3):", Math.ceil(5.3)); // 3 >> if (-7.5) then Ans is : (-7)
console.log("Math.floor(5.9):", Math.floor(5.9)); // 5 >> if (-2.5) then Ans is : (-3)
console.log("Math.trunc(5.9):", Math.trunc(5.9)); 
console.log("Math.fround(5.5):", Math.fround(5.5));

// Power & Roots
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.cbrt(27):", Math.cbrt(27));
console.log("Math.hypot(3,4):", Math.hypot(3, 4));

// Logs & Exponentials
console.log("Math.log(10):", Math.log(10));
console.log("Math.log1p(9):", Math.log1p(9));
console.log("Math.log10(100):", Math.log10(100));
console.log("Math.log2(8):", Math.log2(8));
console.log("Math.exp(1):", Math.exp(1));
console.log("Math.expm1(1):", Math.expm1(1));

// Trigonometry
console.log("Math.sin(Math.PI/2):", Math.sin(Math.PI / 2));
console.log("Math.cos(0):", Math.cos(0));
console.log("Math.tan(Math.PI/4):", Math.tan(Math.PI / 4));
console.log("Math.asin(1):", Math.asin(1));
console.log("Math.acos(0):", Math.acos(0));
console.log("Math.atan(1):", Math.atan(1));
console.log("Math.atan2(1,1):", Math.atan2(1, 1));
console.log("Math.sinh(1):", Math.sinh(1));
console.log("Math.cosh(1):", Math.cosh(1));
console.log("Math.tanh(1):", Math.tanh(1));
console.log("Math.asinh(1):", Math.asinh(1));
console.log("Math.acosh(2):", Math.acosh(2));
console.log("Math.atanh(0.5):", Math.atanh(0.5));

// Min, Max, Random
console.log("Math.max(1,5,3):", Math.max(1, 5, 3));
console.log("Math.min(1,5,3):", Math.min(1, 5, 3));
console.log("Math.random():", Math.random());  // O & 1 ke bich me koi bhi random number
/* >>>>> special case >>>>>
    Math.random() * 20 ---> 0 & 20 k bich me se koi bhi random number
    Math.floor(Math.random() * 20) ---> previous output convert into whole number 
*/
// Random number between 10 and 100
let num = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
console.log(num);


// Bitwise & Special
console.log("Math.imul(3, 4):", Math.imul(3, 4));
console.log("Math.clz32(1):", Math.clz32(1));
