'use strict';

/////////////////////////////
//By reversing the number

function isPalindrome(n){
    let reverse = 0;
    let temp = Math.abs(n);

    while(temp!==0){
        reverse = Math.floor(reverse * 10 + temp%10);
        temp = Math.floor(temp/10);
    }

    return (reverse === Math.abs(n));
}


let n = 1234321;

if(isPalindrome(n)===true) console.log(`${n} is Palindrome`);
else console.log(`${n} is not palindrome`);


////////////////////////////
//by using strings

function ispalindromeString(n){
    let s = Math.abs(n).toString();
    let len = s.length;

    for(let i=0;i<len/2;i++){
        if(s[i]!==s[len-i-1]){
            return false;
        }

    }
    return true;

}

let m = 68886;
if(ispalindromeString(m)===true) console.log(`${m} is Palindrome`);
else console.log(`${m} is not Palindrome`);
