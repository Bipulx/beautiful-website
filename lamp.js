const btn = document.getElementById("checkbox");
const light = document.getElementById("light");
btn.addEventListener("click",()=>{
light.classList.toggle("show")
})

// nav bar//
const nav = document.querySelector(".btn");
var menu = document.querySelector("#menu")
nav.addEventListener("click",()=>{
 menu.classList.toggle("hide")
})