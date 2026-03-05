'use strict';

////////////////////////
//factorial iterative

function factorial(n){
    let fact=1;
    for(let i=2;i<=n;i++){
        fact*=i;

    }
    return fact;
}

let n = 4;
console.log(`Factorial of ${n} is: ${factorial(n)}`);


////////////////////////////////
// recursive method

function factorialRecursive(n){
    
    if(n===0){
        return 1
    }
    return n*factorialRecursive(n-1);
    
}

let m= 5;

console.log(`Factorial of ${m} is: ${factorialRecursive(m)}`);
