var validationDiv = document.querySelector('.validationContent');
var validText = "Validation results:";

var formInDom = function () {
    if (document.querySelector('#log-mail') && document.querySelector('#log-pass')) {
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
    if (fieldsNumber === 2) {
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
    var inputs = document.querySelector('#log-mail', '#log-pass').name;
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

var validAnchor = function () {
    var aLink = document.getElementById("link").getAttribute("href");
    var validHref = './register.html';
    if (aLink === validHref) {
        validationDiv.append('Anchor tag is valid.' + " ");
        validAnchor = true;
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append('Anchor tag is invalid.' + " ");
    }
}

validAnchor();

var validButt = function () {
    var submitBtn = document.getElementsByTagName("button")[0].childNodes[0].nodeValue;
    var submitValue = 'Login';
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
    if ((formInDom == true) && (fieldsQuant == true) && (requiredFields == true) &&
        (relatedLabels == true) && (validAnchor == true) && (validButt == true)) {
        validationDiv.textContent = validText + " " + 'Every validation has passed!';
    }
}

validation();