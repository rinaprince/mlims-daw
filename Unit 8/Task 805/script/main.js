//Create a random checklist.

"use strict";

function main(){


    for (let i = 0; i < 10; i++){
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        document.body.append(checkbox);
    }

    //let array = new Array(); //Declaration 

}

document.addEventListener('DOMContentLoaded', main);