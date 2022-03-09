//Calculator

"use strict";

function main() {

    let firstNumberInput = document.querySelector('#first_number'); //This is to get the value of the first number.
    console.log(firstNumberInput.value); //And this is to show the number in the console.

    let secondNumberInput = document.querySelector('#second_number'); //To get the value of the second number.
    console.log(secondNumberInput.value);

    let sumButton = document.querySelector('#btn_sum'); //To get the value of the sum button. 

    let multiplyButton = document.querySelector('#btn_multiply'); //To get the value of the multiply button.

    let divideButton = document.querySelector('#btn_divide'); //To get the value of the divide button.

    let divResult = document.querySelector('#result'); //To get the value from the result.

    function random(min, max){ //To do random numbers.
        const num = Math.floor(Math.random() * (max - min +1)) +min;
        return num;
    }

    function generateNumbers(){ //To generate random numbers.
        firstNumberInput.value = random(1, 10);
        secondNumberInput.value = random(1, 10);
    }

    generateNumbers();

    let operationsList = document.createElement('li');
    document.body.append(operationsList);

    function sum() { //Function to sum two numbers.
        let firstNumber = Number(firstNumberInput.value);
        let secondNumber = Number(secondNumberInput.value);

        let paragraph = document.createElement('p');
        paragraph.innerHTML = "Result: " + (firstNumber + secondNumber);
        operationsList.append(paragraph);

        divResult.textContent = "Result: " + (firstNumber + secondNumber);
    }

    function multiply() { //Funtion created to multiply
        let firstNumber = Number(firstNumberInput.value);
        let secondNumber = Number(secondNumberInput.value);

        let listItem = document.createElement('p');
        listItem.innerHTML = "Result: " + (firstNumber * secondNumber);
        operationsList.append(listItem);
        divResult.textContent = "Result: " + (firstNumber * secondNumber);
    }

    function divide() { //Funtion created to divide
        let firstNumber = Number(firstNumberInput.value);
        let secondNumber = Number(secondNumberInput.value);

        let listItem = document.createElement('p');
        listItem.innerHTML = "Result: " + (firstNumber / secondNumber);
        operationsList.append(listItem);

        divResult.textContent = "Result: " + (firstNumber / secondNumber);
    }

    sumButton.addEventListener('click', sum); //To run the button
    multiplyButton.addEventListener('click', multiply); //To run the button
    divideButton.addEventListener('click', divide); //To run the button

    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', generateNumbers);
    }

    //let divHistory = document.createElement('div'); 
    //divHistory.className = "History";
    //divHistory.innerHTML = "sum, multiply, divide"
    //document.body.append(div);
}

document.addEventListener('DOMContentLoaded', main);