//Sample problem
function deleteParagraph(){
    let container = document.querySelector("#content")
    let firstPara = container.querySelector("p");

    firstPara.remove()
        // OR use 2nd Method 
    // container.removeChild(firstPara);
}

//Problem 1
let newBtn = document.createElement("button")
newBtn.innerText = "Click me!"

newBtn.style.backgroundColor = "red"
newBtn.style.color = "white"

document.querySelector("body").prepend(newBtn);

//Problem 2
let para = document.querySelector(".myClass")
para.getAttribute("myClass");
para.classList.add("newClass");