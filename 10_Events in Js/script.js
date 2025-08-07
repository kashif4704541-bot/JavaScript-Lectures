let btn1 = document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn1 was clicked")
    let a = 25
    a++;
    console.log(a)
}
let box1 = document.querySelector("#box1")

box1.onmouseover = () =>{
    console.log("You are inside div box")
}

//Event Listeners
let btn2 = document.querySelector("#btn2")

function handleClick() {
  alert("Button was clicked!");
}
btn2.addEventListener("click", handleClick);


function handler1(e) {
  console.log("Button was clicked - Handler 1");
}
function handler2(e) {
  console.log("Button was clicked - Handler 2");
}
function handler3(e) {
  console.log("Button was clicked - Handler 3");
}
function handler4(e) {
  console.log("Button was clicked - Handler 4");
}

// Add listeners
btn2.addEventListener("click", handler1);
btn2.addEventListener("click", handler2);
btn2.addEventListener("click", handler3);
btn2.addEventListener("click", handler4);

// Remove handler3
btn2.removeEventListener("click", handler3);

