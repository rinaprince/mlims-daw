//Bookstore I

"use strict";

//Dades comuns

//Creació d'objectes.
let bookOne ={ 
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    publishedIn: 2001,
    alreadyRead: true,
    cover: '1-lsdv',
};

let bookTwo ={
    title: "El juego del ángel",
    author: "Carlos Ruiz Zafón",
    publishedIn: 2008,
    alreadyRead: true,
    cover: '2-ejda',
};

let bookThree ={
    title: "El prisionero del cielo",
    author: "Carlos Ruiz Zafón",
    publishedIn: 2011,
    alreadyRead: true,
    cover: '3-epdc',
};

let bookFour ={
    title: "El laberinto de los espíritus",
    author: "Carlos Ruiz Zafón",
    publishedIn: 2016,
    alreadyRead: true,
    cover: '4-elde',
};

let bookFive ={
    title: "El truco de los espejos",
    author: "Agatha Christie",
    publishedIn: 1952,
    alreadyRead: false,
    cover: '5-etde',
};

let bookSix ={
    title: "Un cadáver en la bilioteca",
    author: "Agatha Christie",
    publishedIn: 1942,
    alreadyRead: false,
    cover: '6-ucelb',
};

//Array dels llibres.
let books =[
    bookOne,
    bookTwo,
    bookThree,
    bookFour,
    bookFive,
];

books.push("bookSix");