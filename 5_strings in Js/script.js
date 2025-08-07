let text = "Hello JavaScript"

console.log(text.length)    // to find the lengh of string
console.log(text.trim())    // to remove the extra spaces from starting and ending
console.log(text.toUpperCase())     // uppercase the text
console.log(text.toLowerCase())     // lowercase the text
console.log(text.indexOf("Scr"))    // search the given sub string at first occurence

console.log(text.charAt(1))      // Acess the character of string
console.log(text.includes("Java"))   // check whether the given word is present in string or not
console.log(text.slice(1,6))         // index slicing 
console.log(text.replace("Java", "Python"))      // replace the part of string 

let arr = [64, 37, 72, 81]
let newArr = arr.map((val) =>{       // craete a ne array and to apply a given function to each item of an iterable
    return val
})
console.log(newArr);

let Newarr = arr.filter((val) =>{    // Creates a new array with elements that pass a test implemented by the provided function.
    return val%2 == 0;
})
console.log(Newarr);

const output = arr.reduce((prev, curr) =>{    // perform some operation & reduce the array to a single value and return it.
    return prev + curr;
})
console.log(output)

const outPut = arr.reduce((prev, curr)  =>{
    if(prev > curr){
        return prev;
    }
    else{
        return curr;
    }
})
console.log(outPut);


// Template literals

let obj = {
    item: "Pen",
    cost: 10
};
console.log(`The cost of ${obj.item} is ${obj.cost} Dollars..`)