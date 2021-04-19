const form = document.getElementById('loginForm');
const inputs = document.querySelectorAll('.inputForms');

const expressions = {
    usermail: /^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*\d)[a-zA-Z0-9]{8,}$/
}

const campos = {
    mail: false,
    passwrd: false
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
    const testingFields = document.getElementById(`log-${field}`);
    if (expression.test(input.value)) {
        testingFields.classList.remove('form-item-invalid');
        testingFields.classList.add('form-item-valid');
        document.querySelector(`#log-${field} .inputDiv .errorMssg`).classList.remove('errorMssg-active');
        campos[field] = true;
    }
    else {
        testingFields.classList.add('form-item-invalid');
        testingFields.classList.remove('form-item-valid');
        document.querySelector(`#log-${field} .inputDiv .errorMssg`).classList.add('errorMssg-active');
        campos[field] = false;
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
    if (campos.mail && campos.pass) {
        const mailValue = document.getElementById('emailInput').value;
        const passValue = document.getElementById('passInput').value;
        formCorrect.classList.add('mssgOkForm-active');
        formCorrect.style.display = 'flex';
        showValues();
        var url = 'http://localhost:4000/login';
        var data = { mailValue, passValue };
        fetch(url, {
            method: 'PUT', // or 'PUT'
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
})

function showValues() {
    document.getElementById('result1').innerHTML = document.getElementById('emailInput').value;
}