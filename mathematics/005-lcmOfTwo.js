'use strict';

/////////////////////////////////
//using loops

function lcmLoops(a,b){

    let g = Math.max(a,b);
    let s = Math.min(a,b);

    for(let i=g;i<=a*b;i+=g){
        if(i%s===0){
            return i;
        }
        return a*b;
    }
}
let a=10,b=5;

console.log(`LCM of two number ${a} and ${b} are: ${lcmLoops(a,b)}`);


//////////////////////////
// formula hcf and lcm

function gcd(a,b){
    return b===0?a:gcd(b,a%b);
}

function lcm(a,b){
    return a*b/gcd(a,b);
}

console.log(`LCM of two number ${a} and ${b} are with formula: ${lcmLoops(a,b)}`);
