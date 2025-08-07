// Arrays in JavaScript:
    // data structure used to store multiple values in a single variable. It's like a list where each item has an index

let marks = [85, 74, 70, 92, 78];
let info = ["Rahul", 94, "Mumbai"];
console.log(marks, typeof marks);
console.log(info, typeof info);

// Looping over an ARRAY

let heroes = ["Ironman", "Thor", "Hulk", "Spiderman", "Antman", "Caiptan America"];
for( let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

// Using for...of loop

for (let item of heroes){
    console.log(item)
}

// Arrays Methods
let cities = ["karachi", 'Lahore', "rawal pindi", "multan","karachi", "Islamabad"]

console.log(cities.push("Multan"), cities)          // Add element to the end of an array
console.log(cities.pop())                   // Remaove the last element of an array
console.log(cities.unshift("Peshawar"), cities)     // Add element to the start of an array
console.log(cities.shift())                         // Remove the first element 
console.log(cities.includes("karachi"))             // check whether the value exist or not
console.log(cities.indexOf("karachi"))              // return the index of given element at very first approach
console.log(cities.indexOf("karachi", 2))           // return the index of given element at very first approach after index 2

let array1 = [5, 12, 8, 130, 44];
console.log(array1.find((element) => element > 10));  // returns the first element in the provided array that satisfies the provided testing function.
console.log(array1.some((element) => element > 10));  // return true if any element in the provided array satisfies the provided testing function.
console.log(array1.every((element) => element > 10));  // return true if every element in the provided array satisfies the provided testing function.

console.log(array1.sort((a, b) => a - b));           // sort the element in ascending order
// console.log(array1.reverse());                         // reverse the all element in an array

let array2 = [45, 21, 37, 67, 12, 34,47, 55];
console.log(array1.concat(array2))                   // append the second array at the end

array1.slice(1, 3);                     //  index slicing of an array
console.log(array1)

array2.splice(2, 2, 38, 40)           // powerful method used to add, remove, or replace elements in an array.
console.log(array2)

let arr = [64, 37, 42, 49, 56]
let newArr = arr.map((val) => {        //create a new array with the result of some operation
    return val;
})
console.log(newArr);

let newarr = arr.filter((val) =>{       // Create a new array of elements that given true for a condition
    return val%2 == 0;                  
})
console.log("All even numbers in array: ", newarr);

let output = arr.reduce((prev, curr) =>{        //perform ome operation and reduce the array to a single value
    return prev+curr;
})
console.log(output);

// For...Each looop in array 
        // the forEach loop is a method used to iterate over arraysand execute a function for each element

let city = ["Paris", "Florida", "sydney"];
city.forEach((val) =>{
    console.log(val);
})


