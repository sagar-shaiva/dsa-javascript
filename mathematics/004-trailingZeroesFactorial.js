'use strict';

function factorial(n){

    let fact=1;

    for(let i=1;i<=n;i++){
        fact*=i;
    }

    return fact;

}

let n=10;
console.log(`factorial of ${n} is :${factorial(n)}`);  

function trailingZeroes(n){
    let fact = factorial(n);

    let count=0;
    while(fact%10===0){
        count++;
        fact/=10;
    }
    return count;

}


console.log(`Number of trailing Zeroes: ${trailingZeroes(n)}`);


/////////////////////////////////////////////
//by repeated divided by 5

function trailingZeroByFive(m){
    let count=0;
    if(n<0) return -1;

    for(let i=5;Math.floor(m/i)>=1;i*=5){
        count+=Math.floor(m/i);

    }

    return count;
}
let m=25;
console.log(`Number of trailing Zeroes by 5 division: ${trailingZeroByFive(m)}`);
