const form = document.getElementById('registerForm');
const inputs = document.querySelectorAll('.inputForms');

const expressions = {
    usermail: /^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/,
    username: /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/,
    password: /^(?=.*\d)[a-zA-Z0-9]{8,}$/
}

const campos = {
    userMail: false,
    userName: false,
    passwrd: false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "email":
            fieldsValid(expressions.usermail, e.target, 'mail');
            break;
        case "name":
            fieldsValid(expressions.password, e.target, 'name');
            break;
        case "pass":
            fieldsValid(expressions.username, e.target, 'pass');
            passValid();
            break;
        case "conf-pass":
            passValid();
            break;
    }
}

const fieldsValid = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`form-${field}`).classList.remove('form-item-invalid');
        document.getElementById(`form-${field}`).classList.add('form-item-valid');
        document.querySelector(`#form-${field} .inputDiv .errorMssg`).classList.remove('errorMssg-active');
        campos[field] = true;
    }
    else {
        document.getElementById(`form-${field}`).classList.add('form-item-invalid');
        document.getElementById(`form-${field}`).classList.remove('form-item-valid');
        document.querySelector(`#form-${field} .inputDiv .errorMssg`).classList.add('errorMssg-active');
        campos[field] = false;
    }
}

const passValid = () => {
    const inputPass1 = document.getElementById('pass');
    const inputPass2 = document.getElementById('conf-pass');

    if (inputPass1.value !== inputPass2.value) {
        document.getElementById(`conf-pass`).classList.add('form-item-invalid');
        document.getElementById(`conf-pass`).classList.remove('form-item-valid');
        document.querySelector(`#conf-pass .inputDiv .errorMssg`).classList.add('errorMssg-active');
        campos['passwrd'] = false;
    } else {
        document.getElementById(`conf-pass`).classList.remove('form-item-invalid');
        document.getElementById(`conf-pass`).classList.add('form-item-valid');
        document.querySelector(`#conf-pass .inputDiv .errorMssg`).classList.remove('errorMssg-active');
        campos['passwrd'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.userMail && campos.userName && campos.passwrd) {
        form.reset();

        document.getElementById('mssgOkForm').classList.add('mssgOkForm-active');
        setTimeout(() => {
            document.getElementById('mssgOkForm').classList.remove('mssgOkForm-active')
        }, 3000)
    } else {
        document.getElementById('mssgOkForm').classList.remove('mssgErrForm-active')
    }
});