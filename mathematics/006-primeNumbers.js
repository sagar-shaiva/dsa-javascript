'use strict';

/////////////////
//basic trial division

function isPrime(n) {
    if (n <= 1)
        return false;

    // Check divisibility from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}

// Driver Code
let n = 7;
if(isPrime(n))
	console.log("prime method 1:true");
else
	console.log("prime method 1:false");

///////////////////////////////
//Trial Division Method - O(√n) time and O(1) space

// Function to check whether a number is prime or not
function isPrime1(n) {

    // Numbers less than or equal to 1 are not prime
    if (n <= 1)
        return false;

    // Check divisibility from 2 to the square root of n
    for (let i = 2; i* i <=n; i++)
        if (n % i === 0) 
            return false;

    // If no divisors were found, n is prime
    return true;
}

// Driver Code
let m = 7; 
if(isPrime1(m))
	console.log("prime method 2:true");
else
	console.log("prime method 2:false");


////////////////////////////////////
//Optimized Trial Division Method - O(√n) Time and O(1) Space

function isPrime2(n) {
    // Check if n is 1 or 0
    if (n <= 1)
        return false;

    // Check if n is 2 or 3
    if (n === 2 || n === 3)
        return true;

    // Check whether n is divisible by 2 or 3
    if (n % 2 === 0 || n % 3 === 0)
        return false;
    
    // Check from 5 to square root of n
    // Iterate i by (i+6)
    for (let i = 5; i *i<=n ; i += 6)
        if (n % i === 0 || n % (i + 2) === 0)
            return false;

    return true;
}

// Driver Code
let o = 7;
if(isPrime2(o))
	console.log("prime method 3:true");
else
	console.log("prime method 3:false");