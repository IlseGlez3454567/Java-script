'use strict'

const input = document.getElementById("box");
const message = document.getElementById("message");

input.addEventListener("keydown", function(event){

    console.log(event.key);

    if(event.key === "Enter"){
        message.textContent = "Presionaste Enter";
    }

});