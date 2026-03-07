'use strict';

////////////////////////////
//
function primeFactors(n){

    let ans= [];

    for (let i=2;i<=n;i++){
        while(n%i===0 && n>0){
            ans.push(i);
            n= n/i;
        }
    }
    return ans;
}
let n = 100;

console.log(`Prime factors of ${n} is ${primeFactors(n)}`);

/////////////////////////////////////////
//Prime Factorisation Time O(sqrt(n)) and Space (1)

function primefactors1(n){

    let arr=[];
    if(n<=1) return;
    while(n%2===0) {
        arr.push(2);
        n=n/2;
    }
    while(n%3===0) {
        arr.push(3);
        n=n/3;
    }

    for(let i=5;i*i<=n;i+6){
        while(n%i===0){
            arr.push(i);
            n=n/i;
        }
        while(n%(i+2)===0){
            arr.push(i+2);
            n=n/(i+2);
        }
    }

    if(n>3) arr.push(n);

    return arr;
}
let m =18;
console.log(`Prime factor by optimised method of ${m} is: ${primefactors1(m)}`);