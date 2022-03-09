"use strict";

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function main() {

    function generateNumbers() {
        inputFirstNumber.value = random(1, 10);
        inputSecondNumber.value = random(1, 10);    
    }

    let buttonMultiply = document.querySelector('#button-multiply');
    let buttonDivide = document.querySelector('#button-divide');
    let buttonSum = document.querySelector('#button-sum');

    let inputFirstNumber = document.querySelector("#first-number");
    let inputSecondNumber = document.querySelector("#second-number");

    generateNumbers();

    let operationsList = document.createElement('ul');
    document.body.append(operationsList);

    function multiply() {
        let firstNumber = Number(inputFirstNumber.value);
        let secondNumber = Number(inputSecondNumber.value);

        let listItem = document.createElement('li');
        listItem.innerHTML = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
        operationsList.append(listItem);        
    }

    function divide() {
        let firstNumber = Number(inputFirstNumber.value);
        let secondNumber = Number(inputSecondNumber.value);

        let listItem = document.createElement('li');
        if (secondNumber == 0) {
            listItem.innerHTML = `${firstNumber} / ${secondNumber} = Error!`;
        }
        else  {
            listItem.innerHTML = `${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`;
        }
        operationsList.append(listItem);       
    }

    function sum() {
        let firstNumber = Number(inputFirstNumber.value);
        let secondNumber = Number(inputSecondNumber.value);

        let paragraph = document.createElement('p');
        paragraph.innerHTML = "Result: " + (firstNumber + secondNumber);
     //   divResult.append(paragraph);
    }


    buttonMultiply.addEventListener('click', multiply);
    // buttonMultiply.addEventListener('click', generateNumbers);
    
    buttonDivide.addEventListener('click', divide);
    // buttonDivide.addEventListener('click', generateNumbers);

    buttonSum.addEventListener('click', sum);
    // buttonSum.addEventListener('click', generateNumbers);
    
    let buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', generateNumbers);
    }

    //buttonMultiply.onclick = multiply;
    //buttonDivide.onclick = divide;

    //alert(inputFirstNumber.value);
    //alert(inputSecondNumber.value);
}

document.addEventListener('DOMContentLoaded', main);