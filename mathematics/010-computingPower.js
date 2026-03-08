'use strict';

////////////////////////////////
//Using Iteration - O(e) Time and O(1) Space

// JavaScript program to calculate pow(b, e)

// Naive iterative solution to calculate pow(b, e)
function power(b, e) {
    
    // Initialize result to 1
    let pow = 1;

    // Multiply b for e times
    for (let i = 0; i < Math.abs(e); i++) 
        pow = pow * b;

    if (e < 0)
        return 1 / pow;

    return pow;
}

// Driver Code
const b = 3.0;
const e = 5;
const res = power(b, e);
console.log(res);

////////////////////////////////////
//Using Recursion - O(e) Time and O(e) Space

// JavaScript program to calculate pow(b, e)

function power1(b, e) {
    
    // Base Case: pow(b, 0) = 1
    if (e == 0)
        return 1;
    
    if (e < 0)
        return 1 / power1(b, -e);
    
    // For all other cases
    return b * power1(b, e - 1);
}

// Driver Code
const c = 3.0;
const d = 5;
const result = power1(c, d);
console.log(result);


///////////////////////////////
//Using Inbuilt Functions - O(log e) Time and O(1) Space

// Javascript program to calculate power 
// Using builtin methods

function power2(b, e) {

    // Math.pow() is a function that
    // return floating number
    return parseInt(Math.pow(b, e));
}

// Driver Code
const f = 3.0;
const g = 5;
console.log(power2(f, g));
