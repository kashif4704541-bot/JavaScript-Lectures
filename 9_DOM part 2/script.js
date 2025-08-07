let img = document.querySelector("#bmwImg")
console.log(img.getAttribute("src"))

img.setAttribute("alt", "BMW + Rainy weather");
img.removeAttribute("id");

console.log(img.hasAttribute("alt"));

// Accessing style using Js
let head = document.querySelector(".style")
head.style.backgroundColor = "red"
head.style.fontSize = "34px"

//Inserting Elments
let container = document.querySelector("p")
let newPara = document.createElement("p")
newPara.textContent = "Inserted Paragraph"

// container.appendChild(newPara)
// container.append(newPara)

// container.prepend(newPara)
// container.before(newPara)
// container.after(newPara)

container.insertBefore(newPara, container.lastChildChild)