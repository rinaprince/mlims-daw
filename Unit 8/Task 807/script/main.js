//Bookstore I

"use strict";

function main(){
    //Creació d'objectes.
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

    //Array dels llibres.
    let books =[
        bookOne,
        bookTwo,
        bookThree,
        bookFour,
    ];

    //Creació d'un 'p' al que se li afegixen dades al body individualment. Es pot fer amb un for.
    /*let one = document.createElement('p');
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
    document.body.append(four);*/

    /*Bucle for que recorre l'array books. Es crea una variable book al que se li dona el valor
    book. Després, es crea un element 'p' que mostra un missatge o un altre depenent si és false o true el seu valor.*/
    for (let i = 0; i < books.length; i++){
        let book = books[i];
        if (book.alreadyRead == true){
            let message = document.createElement('p');
            message.innerHTML = (" You already read " + book.title + " by " + book.author);
            document.body.append(message);
        }
        else{
            let message = document.createElement('p');
            message.innerHTML = ("You still need to read " + book.title + " by " + book.author);
            document.body.append(message);
        }
    } 
}

document.addEventListener('DOMContentLoaded', main);