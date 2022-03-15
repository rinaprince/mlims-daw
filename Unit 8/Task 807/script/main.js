//Bookstore I

"use strict";

function main(){
    let bookOne ={
        title: "La sombra del viento",
        author: "Carlos Ruiz Zafón",
        publishedIn: 2001,
        alreadyRead: true,
    };

    let bookTwo ={
        title: "El juego del ángel",
        author: "Carlos Ruiz Zafón",
        publishedIn: 2008,
        alreadyRead: true,
    };

    let bookThree ={
        title: "El prisionero del cielo",
        author: "Carlos Ruiz Zafón",
        publishedIn: 2011,
        alreadyRead: true,
    };

    let bookFour ={
        title: "El laberinto de los espíritus",
        author: "Carlos Ruiz Zafón",
        publishedIn: 2016,
        alreadyRead: true,
    };

    let books =[
        bookOne,
        bookTwo,
        bookThree,
        bookFour,
    ];

    let one = document.createElement('p');
    one.innerHTML = (bookOne.title + " by " + bookOne.author);
    document.body.append(one);

    let two = document.createElement('p');
    two.innerHTML = (bookTwo.title + " by " + bookTwo.author);
    document.body.append(two);

    let three = document.createElement('p');
    three.innerHTML = (bookThree.title + " by " + bookThree.author);
    document.body.append(three);

    let four = document.createElement('p');
    four.innerHTML = (bookFour.title + " by " + bookFour.author);
    document.body.append(four);

}

document.addEventListener('DOMContentLoaded', main);