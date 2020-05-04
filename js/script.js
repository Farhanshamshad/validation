const submit = document.querySelector('.submit');
const form = document.querySelector('#form');
const username = document.querySelector('#userName');
const email = document.querySelector('#Email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'Form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'Form-control success';

}

// check is email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.value.trim())) {
        showError(input, ' Email is not valid')
    }
    else {
        showSuccess(input);
    }
}

//check is required function

function checkIsRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, ` ${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check the length username
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be least ${min} charectar`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} less then ${max} charectar`);
    }
    else {
        showSuccess(input)
    }
}
// check  is password matched
function checkMached(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Possword does not matches');
    }
}

// Function Even listener
submit.addEventListener('click', function (e) {
    e.preventDefault();
    checkIsRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    checkEmail(email)
    checkMached(password, password2)

});














// console.log(input.id)


// if (username.value === '') {
//     showError(username, "username is required");
// }
// else {
//     showSuccess(username);
// }

// if (email.value === '') {
//     showError(email, "email is required");
// }
// else if (!validateEmail(email.value)) {
//     showError(email, "email is not correct");

// }
// else {
//     showSuccess(email);
// }

// if (password.value === '') {
//     showError(password, "password is required");
// }
// else if (password.value < 6) {
//     showError(password, "password is too short");
// }
// else {
//     showSuccess(password);
// }
// if (password2.value === '') {
//     showError(password2, "password is required");
// }
// else {
//     showSuccess(password2);
// }
























