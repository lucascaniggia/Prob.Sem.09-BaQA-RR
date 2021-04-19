const form = document.getElementById('registerForm');
const inputs = document.querySelectorAll('.inputForms');

const expressions = {
    usermail: /^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/,
    username: /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/,
    password: /^(?=.*\d)[a-zA-Z0-9]{8,}$/
}

let campos = {
    mail: false,
    name: false,
    pass: false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "email":
            fieldsValid(expressions.usermail, e.target, 'mail');
            break;
        case "name":
            fieldsValid(expressions.username, e.target, 'name');
            break;
        case "pass":
            fieldsValid(expressions.password, e.target, 'pass');
            passValid();
            break;
        case "conf-pass":
            passValid();
            break;
    }
}

const fieldsValid = (expression, input, field) => {
    const testingFields = document.getElementById(`form-${field}`);
    if (expression.test(input.value)) {
        testingFields.classList.remove('form-item-invalid');
        testingFields.classList.add('form-item-valid');
        document.querySelector(`#form-${field} .inputDiv .errorMssg`).classList.remove('errorMssg-active');
        campos[field] = true;
    }
    else {
        testingFields.classList.add('form-item-invalid');
        testingFields.classList.remove('form-item-valid');
        document.querySelector(`#form-${field} .inputDiv .errorMssg`).classList.add('errorMssg-active');
        campos[field] = false;
    }
}

const passValid = () => {
    const inputPass1 = document.getElementById('pass');
    const inputPass2 = document.getElementById('conf-pass');

    const testingPass = document.querySelector('#form-conf-pass .inputDiv .errorMssg');

    if (inputPass1.value !== inputPass2.value) {
        inputPass2.classList.add('form-item-invalid');
        inputPass2.classList.remove('form-item-valid');
        testingPass.classList.add('errorMssg-active');
        campos['pass'] = false;
    } else {
        inputPass2.classList.remove('form-item-invalid');
        inputPass2.classList.add('form-item-valid');
        testingPass.classList.remove('errorMssg-active');
        campos['pass'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('focus', validarForm);
    input.addEventListener('blur', validarForm);
})

form.addEventListener('submit', (e) => {
    const formCorrect = document.getElementById('mssgOkForm');
    const formWrong = document.getElementById('mssgErrForm');
    e.preventDefault();
    if (campos.mail && campos.name && campos.pass) {
        const nameValue = document.getElementById('name').value;
        const mailRegValue = document.getElementById('email').value;
        const passRegValue = document.getElementById('pass').value;
        var url = 'http://localhost:4000/register';
        var data = { nameValue, mailRegValue, passRegValue };
        formCorrect.classList.add('mssgOkForm-active');
        formCorrect.style.display = 'flex';
        showValues();
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // data can be `string` or {object}!
        }).then(res => res.json())
            .then(json => console.log(json));
        setTimeout(() => {
            document.getElementById('mssgOkForm').classList.remove('mssgOkForm-active');
            formCorrect.style.display = 'none';
            form.reset();
        }, 5000)
    } else {
        formWrong.classList.add('mssgErrForm-active');
        formWrong.style.display = 'flex';
    }
});

function showValues() {
    document.getElementById('result1').innerHTML = document.getElementById('email').value;
    document.getElementById('result2').innerHTML = document.getElementById('name').value;
}