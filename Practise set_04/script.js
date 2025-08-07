let companies = ["Bloomberg","Microsoft", "Uber", "Google", "IBM","Nvidia"];
console.log(companies.shift(), companies)

let new_Arr = companies.splice(1,1, "Ola");
console.log(companies); 
console.log(companies.push("Amazon"), companies);


let arr = [1,2,3,4,5];
arr.forEach((val) =>{
    console.log(val**2) ;
});

let marks = [85, 97, 44, 37, 76, 60];
sum = 0;
for(let mark of marks){
    sum = sum + mark;
}
let average = sum/marks.length
console.log("Average of marks of entire class students is: ", average);

let prices = [250, 645, 300, 900, 50];
for(let i = 0; i < prices.length; i++){
    let discount = prices[i] * 0.10;
    prices[i] -= discount;
}
console.log(prices);