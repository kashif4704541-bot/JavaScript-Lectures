for(let i = 0; i<101; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

let gameNum = 25;
let guess;

while(guess != gameNum){
    guess = prompt("Guess the number between 1 and 100")
    
    if(guess > gameNum){
        alert("Too High, Try Again! ")
    }
    else if(guess < gameNum){
        alert("Too low, Try Again! ")
    }
    if(guess == gameNum){
        alert("Congratulation you get the right number")
    }
    else {
        alert("Please Enter invalid number..")
    }
}