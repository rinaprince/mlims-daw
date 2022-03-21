//Bookstore II

"use strict";

//Comportament amb el DOM

function main(){
    

    //Bucle for per a recòrrer l'array books.
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

    //Show the number of books.
    let number = document.querySelectorAll('p');
    alert(number.length);

    //Show the list of books.

    let buttonOne = document.querySelector('#button_one');
    document.body.append(buttonOne); //Set the button at the end

    let buttonTwo = document.querySelector('#button_two');
    document.body.append(buttonTwo); //Set the button at the end

    //Add a book.

    books.push("bookSix");

    //Delete a book.
}

document.addEventListener('DOMContentLoaded', main);