function functionName(){
    console.log("Good Morning, sir!")
}
functionName();

function sum(x, y){
    let s = x+y;
    return s;
}
let result = sum(4, 8);
console.log(result);

// Arrow Function
let arrowSum = (a, b)=>{
    return a+b;
}
let output = arrowSum(10, 7);
console.log(output);

let arrowMul = (p, q)=>{
    return p*q;
}
let res = arrowMul(4,8);
console.log(res)