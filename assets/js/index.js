const inputName = document.querySelector('#name');
const pNameCard = document.querySelector('#cardName');
const pNameError = document.querySelector('#pNameError');

const inputNumber = document.querySelector('#cardNumber');
const pNumber = document.querySelector('#numberCard');
const pNumberError = document.querySelector('#pNumberError');

const inputDateM = document.querySelector('#month');
const spanValM = document.querySelector('#valM');
const pDateError = document.querySelector('#pDateError');

const inputDateY = document.querySelector('#year');
const spanValY = document.querySelector('#valY');

const inputCvc = document.querySelector('#cvcNumber');
const cvcNumber = document.querySelector('#cvc');
const pCvcError = document.querySelector('#pCvcError');

const main_content = document.querySelector('main');
const btnForm = document.querySelector('#btn');

function error(element, pError, pCard, text){
    if(element.value.length === 0){
        pError.setAttribute('class', 'erro');
        pCard.innerHTML = text;
        element.setAttribute('class', 'error');
    } else {
        pError.setAttribute('class', 'none');
        element.classList.remove('error');
    }
}

inputName.onkeyup = () => {
    pNameCard.innerHTML = inputName.value;
}

inputName.onblur = () => {
    error(inputName, pNameError, pNameCard, 'Jane Appleseed');
}

inputNumber.onkeyup = () => {
    pNumber.innerHTML = `${inputNumber.value.substring(0, 4)} ${inputNumber.value.substring(4, 8)} ${inputNumber.value.substring(8, 12)} ${inputNumber.value.substring(12, 16)}`;
    if(inputNumber.value.length === 16){
        inputDateM.focus();
    }
}

inputNumber.onblur = () => {
    error(inputNumber, pNumberError, pNumber, '0000 0000 0000 0000');
}

inputDateM.onkeyup = () => {
    spanValM.innerHTML = inputDateM.value;
    if(inputDateM.value.length === 2){
        inputDateY.focus();
    }
}

inputDateM.onblur = () => {
    error(inputDateM, pDateError, spanValM, '00');
}

inputDateY.onkeyup = () => {
    spanValY.innerHTML = inputDateY.value;
    if(inputDateY.value.length === 2){
        inputCvc.focus();
    }
}

inputDateY.onblur = () => {
    error(inputDateY, pDateError, spanValY, '00');
}

inputCvc.onkeyup = () => {
    cvcNumber.innerHTML = inputCvc.value;
    if(inputCvc.value.length === 3){
        inputCvc.blur();
    }
}

inputCvc.onblur = () => {
    error(inputCvc, pCvcError, cvcNumber, '000');
}

const confirmElements = "<div id='confirm'><img src='./images/icon-complete.svg' alt='Icon complete'><h1>THANK YOU!</h1><p>We've added your card details</p><button>Continue</button></div>";

btnForm.onclick = e => {    
    e.preventDefault();
    if(inputName.value.length === 0 || inputNumber.value.length === 0 || inputDateM.value.length === 0 || inputDateY.value.length === 0 || inputCvc.value.length === 0){
        alert("Check if you aren't missing anything");
    } else {
        main_content.innerHTML = confirmElements;
    }
    
}
