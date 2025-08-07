function countVowels(a){
    let count = 0;
    for(let char of a){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Good morning, sir!"))

// Improved code 
function count_Vowels(str){
    let count = 0;
    const vowels = ["a","e","i","o","u"]

    for(char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(count_Vowels("HEllo World"))

// Problem 2
const _countVowels = (abc) =>{
    const vowels = ["a","e","i","o","u"];
    let count = {
        a : 0,
        e : 0,
        i : 0,
        o : 0,
        u : 0
    }
    for(let char of abc.toLowerCase()){
        if(vowels.includes(char)){
            count[char]++;
        }
    }
    return count;
}
let result = _countVowels("I Love JavaScript Playlist")
console.log(result);

// Problem 3
let marks = [91, 79, 87, 94, 80, 95, 85]
let highMarks = marks.filter((val) =>{
    return val >= 90
})

console.log(highMarks);

// Problem 4
let n = prompt("Enter the number: ")

let arr = [];
for(i = 1; i <= n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr) =>{
    return prev+curr;
})
let product = arr.reduce((prev, curr) =>{
    return prev*curr;
})
console.log(sum)
console.log(product)