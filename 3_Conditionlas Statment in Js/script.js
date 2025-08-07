let age = 20
if (age >= 18){
    console.log("You are adult")
}

else{
    console.log("You are not adult")
}

let score = 85
if (score >= 80){
    console.log("Your Grade: A one")
}
else if(score >= 70){
    console.log("Your Grade: A")

}
else if(score >= 60){
    console.log("Your Grade: B")

}
else if(score >= 50){
    console.log("Your Grade: C")

}
else if(score >= 0){
    console.log("Your Grade: Fail")

}
else{
    console.log("Invalid Input")
}

// Ternary Operator

let agE = 20;
let result = (age >= 18)?"You are an adult":"You are not Adult"
console.log(result)

// Nested Ternary

let Score = 85
let grade = (Score >= 80)?"A one":
            (Score >= 70)?"A":
            (Score >= 60)?"B":
"Fail";
console.log(grade)