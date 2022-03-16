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

    
}

document.addEventListener('DOMContentLoaded', main);