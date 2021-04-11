const form = document.getElementById('loginForm');
const inputs = document.querySelectorAll('.inputForms');

const expressions = {
    usermail: /^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*\d)[a-zA-Z0-9]{8,}$/
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "email":
            fieldsValid(expressions.usermail, e.target, 'mail');
            break;
        case "pass":
            fieldsValid(expressions.password, e.target, 'pass');
            break;
    }
}

const fieldsValid = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`log-${field}`).classList.remove('form-item-invalid');
        document.getElementById(`log-${field}`).classList.add('form-item-valid');
        document.querySelector(`#log-${field} .inputDiv .errorMssg`).classList.remove('errorMssg-active');
    }
    else {
        document.getElementById(`log-${field}`).classList.add('form-item-invalid');
        document.getElementById(`log-${field}`).classList.remove('form-item-valid');
        document.querySelector(`#log-${field} .inputDiv .errorMssg`).classList.add('errorMssg-active');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})