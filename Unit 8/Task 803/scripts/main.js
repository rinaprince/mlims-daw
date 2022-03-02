//Calculator

function main() {

    let firstNumberInput = document.querySelector('#first_number'); //This is to get the value of the first number.
    console.log(firstNumberInput.value); //And this is to show the number in the console.

    let secondNumberInput = document.querySelector('#second_number'); //To get the value of the second number.
    console.log(secondNumberInput.value);

    let sumButton = document.querySelector('#btn_sum'); //To get the value of the sum button. 

    let multiplyButton = document.querySelector('#btn_multiply'); //To get the value of the multiply button.
    //multiplyButton.onclick = multiply();
    //multiply(firstNumberInput.value, secondNumberInput.value); //To do an event. In this case to multiply.

    let divideButton = document.querySelector('#btn_divide'); //To get the value of the divide button.
    //divideButton.onclick = divide();
    //alert('You clicked on the button!'); //To do an event.

    let divResult = document.querySelector('#result'); //To get the value from the result.

    function sum() { //Function to sum two numbers.
        let firstNumber = Number(firstNumberInput.value);
        let secondNumber = Number(secondNumberInput.value);

        divResult.textContent = "Result: " + (firstNumber + secondNumber);
    }

    function multiply() { //Funtion created to multiply
        let firstNumber = Number(firstNumberInput.value);
        let secondNumber = Number(secondNumberInput.value);

        divResult.textContent = "Result: " + (firstNumber * secondNumber);
    }

    function divide() { //Funtion created to divide
        let firstNumber = Number(firstNumberInput.value);
        let secondNumber = Number(secondNumberInput.value);

        divResult.textContent = "Result: " + (firstNumber / secondNumber);
    }

    sumButton.addEventListener('click', sum);
    multiplyButton.addEventListener('click', multiply);
    divideButton.addEventListener('click', divide);
}

document.addEventListener('DOMContentLoaded', main);