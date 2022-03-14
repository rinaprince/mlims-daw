//DOM

"use strict";

function main() {
    let elements = document.querySelectorAll('p'); //Contar els paràgrafs, treure numero de 'p'.
    alert(elements.length); //Alerta que conta i mostra el 'p'.
}

document.addEventListener('DOMContentLoaded', main);