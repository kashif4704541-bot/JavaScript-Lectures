let button = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector(".new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg-winner");

let turnO = true;
const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        if (turnO === true) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});


const disableBtns = () =>{
    for(let btn of button){
        btn.disabled = true;
    }
}
const enableBtns = () =>{
    for(let btn of button){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showWinner =(winner) =>{
    msg.innerText = `Congratulation, Winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = button[pattern[0]].innerText
        let pos2Val = button[pattern[1]].innerText
        let pos3Val = button[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                alert(`Winner is Player ${pos1Val}`);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () =>{
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
}

newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
