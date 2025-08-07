let mode = document.querySelector("#mode");
let currmode = "light";

mode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        document.body.style.backgroundColor = "black";
    } else {
        currmode = "light";
        document.body.style.backgroundColor = "white";
    }
});
//Problem 2
let Mode = document.querySelector("#Mode");
let currMode = "light";

Mode.addEventListener("mouseover", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        currMode = "light";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});