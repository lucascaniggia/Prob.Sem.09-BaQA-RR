var validationDiv = document.querySelector('.validationContent');
var validText = "Validation results:";

var formInDom = function () {
    if (document.querySelector('.form-item')) {
        validationDiv.append(validText + " " + 'Form is found' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Form is not found' + " ");
    }
}

formInDom();

var fieldsQuant = function () {
    var fields = document.querySelectorAll('input');
    var fieldsNumber = fields.length;
    if (fieldsNumber = 4) {
        validationDiv.append(validText + " " + 'Input fields are correct' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'There are missing inputs' + " ");
    }
}

fieldsQuant();

var requiredFields = function () {
    var inputs = document.querySelectorAll('.inputForms').required;
    if (inputs = true) {
        validationDiv.append(validText + " " + 'All fields are required' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Required attributes missing' + " ");
    }
}

requiredFields();

var relatedLabels = function () {
    var inputs = document.querySelectorAll('.inputForms').name;
    var labels = document.querySelectorAll('label').for;
    if (inputs === labels) {
        validationDiv.append(validText + " " + 'All inputs have associated labels' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'There are some input label\'s missing' + " ");
    }
}

relatedLabels();

var validButt = function () {
    var submitBtn = document.querySelector('.submitBtn').nodeValue;
    var submitValue = 'Login';
    if (submitBtn = submitValue) {
        validationDiv.append(validText + " " + 'Buttons content is correct' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Buttons content is wrong' + " ");
    }
}

validButt();


var validation = function () {
    if ((formInDom = true) && (fieldsQuant = true) && (requiredFields = true) && (relatedLabels = true) && (validButt = true)) {
        validationDiv.textContent = validText + " " + 'Every validation has passed!';
    }
}

validation();