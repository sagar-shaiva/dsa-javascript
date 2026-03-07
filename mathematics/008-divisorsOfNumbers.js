'use strict';



//////////////////////////////////////
//Iterating till n - O(n) Time and O(1) Space

function divisors1(n){
    let arrs=[];
    for(let i=1;i<=n;i++){
        if(n%i===0){
            arrs.push(i);
        }
    }
    return arrs;

}
let m = 100;
let ans="";
let arrs = divisors1(m);

arrs.forEach(a=>{
    ans+=a+" ";
});
console.log(ans);















//////////////////////////////////////
// Finding all factors in pairs - O(sqrt(n)) Time and O(1) Space
let divisors=[];

function divisorsOfNum(n){

    for(let i=1;i*i<=n;i++){
        if(n%i===0){
            if(n/i===i){
            divisors.push(i);
        }
    else{
            divisors.push(i);
            divisors.push(n/i);
            
        }

    }
}
divisors.sort((a,b)=>a-b);

    return divisors;

}
let n= 10;
console.log(divisorsOfNum(n));