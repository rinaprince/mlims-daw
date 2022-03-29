//Bookstore Gallery

"use strict";

//Get the value of the buttons

let buttonPrev = document.querySelector('#prev');
let buttonNext = document.querySelector('#next');

let index = 0;

for (let key in books){
    buttonPrev.addEventListener('click', buttonPrev);
}



function main() {

    //To appear the title, the author and cover from the first book.

    let title = document.querySelector('h2'); //Seleccionar h2
    title.innerHTML = books[index].title; //Accedir a title dins d'un objecte

    let author = document.querySelector('h3');
    author.innerHTML = books[index].author;

    let cover = document.querySelector('img');
    // src = lsdv.jpg
    cover.src = 'media/' + books[index].cover;
    // src = media/lsdv.jpg

    

}

document.addEventListener("DOMContentLoaded", main);