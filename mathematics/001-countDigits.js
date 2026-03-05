'use strict';

///////////////////////////////////////
// iterative solution 
function countDigitsIterative(num){

    let count =0;
    if(num=== 0){
        return 1;
    }

    while(num!=0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

let n = 12345;
console.log(`Iterative Sulution: ${countDigitsIterative(n)}`);

//////////////////////////////////////
// recursion method
function countDigitsRecursion(num){

    if(Math.floor(num/10) === 0){
        return 1;

    }

    return 1 + countDigitsRecursion(Math.floor(num/10));

    
}

let m = 54321;

console.log(`Recursion Sulution: ${countDigitsRecursion(m)}`);


//////////////////////////////////
//Using log base 10 function

function countDigitsLogBase10(num){

    return Math.floor(Math.log10(num)+1);

}

let o = 9980;
console.log(`Logbase10 Sulution: ${countDigitsLogBase10(o)}`);


/////////////////////////////////////////
// covert number to string

function countDigitsString(num){
 let n = num.toString();

 return n.length;

}

let number = 123;
console.log(`string solution: ${countDigitsString(number)}`);