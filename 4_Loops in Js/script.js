// for loooop
for (let i = 0; i < 5; i++){
    console.log("Number", i)
}

// while looop
a = 0;
while (a < 5) {
    console.log(a)
    a++;    
}

// do...while loop
let x = 0;

do {
    console.log("i is", x)
    x++;
}
while(x<5);

// for...of looop

let fruits = ["apple", "banana", "cherry"]
for(let fruit of fruits){
    console.log(fruits)
}

let str = "JavaScript"
size = 0;

for(let char of str){
    console.log(char);
    size++;
}
console.log("String size is", size)

// for...in looop
let person = {
    name: "Raza",
    age: 45,
    city: "karachi"
}
for(let key in person){
    console.log("Key :", person[key]);
}