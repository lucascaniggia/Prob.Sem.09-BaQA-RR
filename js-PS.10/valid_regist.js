const form = document.getElementById('loginForm');
const inputs = document.querySelectorAll('.inputForms');

const expressions = {
    usermail: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /^ (?=.*\d)[a-zA - Z0 - 9]{ 8,} $ /
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "email":
            fieldsValid(expressions.usermail, e.target, 'mail');
            break;
        case "pass":
            fieldsValid(expressions.password, e.target, 'name');
            break;
        case "email":
            fieldsValid(expressions.usermail, e.target, 'pass');
            break;
        case "pass":
            fieldsValid(expressions.password, e.target, 'conf-pass');
            break;
    }
}

const fieldsValid = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`form-${field}`).classList.remove('form-item-invalid');
        document.getElementById(`form-${field}`).classList.add('form-item-valid');
        document.querySelector(`form-${field} .errorMssg`).classList.remove('errorMssg-active');
    }
    else {
        document.getElementById(`form-${field}`).classList.add('form-item-invalid');
        document.getElementById(`form-${field}`).classList.remove('form-item-valid');
        document.querySelector(`form-${field} .errorMssg`).classList.add('errorMssg-active');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

/*form.addEventListener('submit', (e) => {
    e.preventDefault();
})
*/