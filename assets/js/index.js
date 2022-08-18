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

inputName.onkeyup = () => {
    pNameCard.innerHTML = inputName.value;
}

inputName.onblur = () => {
    if(inputName.value.length === 0){
        pNameError.setAttribute('class', 'erro');
        pNameCard.innerHTML = 'Jane Appleseed';
        inputName.setAttribute('class', 'error');
    } else {
        pNameError.setAttribute('class', 'none');
        inputName.classList.remove('error');
    }
}

inputNumber.onkeyup = () => {
    pNumber.innerHTML = `${inputNumber.value.substring(0, 4)} ${inputNumber.value.substring(4, 8)} ${inputNumber.value.substring(8, 12)} ${inputNumber.value.substring(12, 16)}`;
    if(inputNumber.value.length === 16){
        inputDateM.focus();
    }
}

inputNumber.onblur = () => {
    if(inputNumber.value.length === 0){
        pNumberError.setAttribute('class', 'erro');
        pNumber.innerHTML = '0000 0000 0000 0000';
        inputNumber.setAttribute('class', 'error');
    } else {
        pNumberError.setAttribute('class', 'none');
        inputNumber.classList.remove('error');
    }
}

inputDateM.onkeyup = () => {
    spanValM.innerHTML = inputDateM.value;
    if(inputDateM.value.length === 2){
        inputDateY.focus();
    }
}

inputDateM.onblur = () => {
    if(inputDateM.value.length === 0){
        pDateError.setAttribute('class', 'erro');
        spanValM.innerHTML = '00';
        inputDateM.setAttribute('class', 'error');
    } else {
        pDateError.setAttribute('class', 'none');
        inputDateM.classList.remove('error');
    }
}

inputDateY.onkeyup = () => {
    spanValY.innerHTML = inputDateY.value;
    if(inputDateY.value.length === 2){
        inputCvc.focus();
    }
}

inputDateY.onblur = () => {
    if(inputDateY.value.length === 0){
        pDateError.setAttribute('class', 'erro');
        spanValY.innerHTML = '00';
        inputDateY.setAttribute('class', 'error');
    } else {
        pDateError.setAttribute('class', 'none');
        inputDateY.classList.remove('error');
    }
}

inputCvc.onkeyup = () => {
    cvcNumber.innerHTML = inputCvc.value;
    if(inputCvc.value.length === 3){
        inputCvc.blur();
    }
}

inputCvc.onblur = () => {
    if(inputCvc.value.length === 0){
        pCvcError.setAttribute('class', 'erro');
        cvcNumber.innerHTML = '000';
        inputCvc.setAttribute('class', 'error');
    } else {
        pCvcError.setAttribute('class', 'none');
        inputCvc.classList.remove('error');
    }
}
