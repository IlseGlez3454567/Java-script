'use strict'

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    message.textContent = "Formulario enviado con éxito";
});