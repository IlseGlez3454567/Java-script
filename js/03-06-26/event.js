'use strict'

const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", function(){
    text.textContent = "Texto cambiado con JavaScript";
});