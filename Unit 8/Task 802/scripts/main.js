//Mutiplication

let firstNumberInput = document.querySelector('#first_number'); //This is to get the value of the first number.
console.log(firstNumberInput.value); //And this is to show the number in the console.

let secondNumberInput = document.querySelector('#second_number'); //To get the value of the second number.
console.log(secondNumberInput.value);

let multiplyButton = document.querySelector('#btn_multiply'); //To get the value of the multiply button.
multiplyButton.onclick = function(){
    multiply(firstNumberInput.value, secondNumberInput.value); //To do an event. In this case to multiply.
}

let divideButton = document.querySelector('#btn_divide'); //To get the value of the divide button.
divideButton.onclick = function(){
    alert('You clicked on the button!'); //To do an event.
}

function multiply(num1, num2){ //Funtion created to multiply
    let result = num1 * num2;
    return result;
}