var validationDiv = document.querySelector('.validationContent');
var validText = "Validation results:";

var formInDom = function () {
    if (document.querySelector('#form-mail') && document.querySelector('#form-name') && document.querySelector('#form-pass') && document.querySelector('#form-conf-pass')) {
        validationDiv.append(validText + " " + 'Form is found.' + " ");
        formInDom = true;
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Form is not found.' + " ");
    }
}

formInDom();

var fieldsQuant = function () {
    var fields = document.querySelectorAll('input');
    var fieldsNumber = fields.length;
    if (fieldsNumber === 4) {
        validationDiv.append('Input fields are correct.' + " ");
        fieldsQuant = true;
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append('There are missing inputs.' + " ");
    }
}

fieldsQuant();

var requiredFields = function () {
    var inputs = document.querySelectorAll('.inputForms');
    var isInputRequired = true;
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].required === false) {
            isInputRequired = false
        }
    }
    if (isInputRequired) {
        validationDiv.append('All fields are required.' + " ");
        requiredFields = true;
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append('Required attributes missing.' + " ");
    }
}

requiredFields();

var relatedLabels = function () {
    var inputs = document.querySelector('#form-mail', '#form-name', '#form-pass', '#form-conf-pass').name;
    var labels = document.querySelectorAll('label').for;
    if (inputs == labels) {
        validationDiv.append('All inputs have associated labels.' + " ");
        relatedLabels = true;
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append('There are some input label\'s missing.' + " ");
    }
}

relatedLabels();

var validButt = function () {
    var submitBtn = document.getElementsByTagName("button")[1].childNodes[0].nodeValue;
    var submitValue = 'Register now';
    if (submitBtn === submitValue) {
        validationDiv.append('Buttons content is correct.' + " ");
        validButt = true;
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append('Buttons content is wrong.' + " ");
    }
}

validButt();


var validation = function () {
    if ((formInDom == true) && (fieldsQuant == true) && (requiredFields == true) && (relatedLabels == true) && (validButt == true)) {
        validationDiv.textContent = validText + " " + 'Every validation has passed!';
    }
}

validation();