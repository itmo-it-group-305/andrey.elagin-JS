/**
 * Created by daddyingrave on 25.11.15.
 */

var form = {
    tag: 'form',
    child: [
        {tag: 'button', text: 'X'},
        {tag: 'label', text: 'Имя'},
        {tag: 'input', type: 'text', text: 'Имя'}
    ]
};

function builtHtml (object) {
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            if (i == 'tag') {
                //todo запихать проверку на пустоту
                //возможно проканает http://stackoverflow.com/questions/25723674/javascript-possible-iteration-over-unexpected
                var elem = document.createElement(object[i]);
            }
            if (i == 'text') {
                elem.innerHTML = object[i];
            }
            if (i == 'type' || i == 'ID') {
                elem.setAttribute(i, object[i]);
            }
        }
    }
    return elem;
}

function builtForm (object) {
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            if (i == 'tag') {
                parent = document.createElement(object[i]);
            }
        }
        if (i == 'child') {
            for (var j in object.child) {
                if (object.child.hasOwnProperty(j)) {
                    parent.appendChild(builtHtml(object.child[j]))
                }
            }
        }
    }
    return parent;
}

//Больше не нужна
function checkEmptyField(field) {
    return Boolean(field.value);
}

function getFormFields() {
    var field = ['name', 'phone', 'email'];
    for (var i in field) {
        if (field.hasOwnProperty(i)) {
            var obj = document.getElementById(field[i]);
            if (obj.id == 'name' && checkName(obj.value)) {
                var elem = document.getElementById(obj.id);
                elem.setAttribute('style', 'border-color: green');
            }
            else if (obj.id == 'phone' && checkPhone(obj.value)) {
                var elem2 = document.getElementById(obj.id);
                elem2.setAttribute('style', 'border-color: green');
            }
            else if (obj.id == 'email' && checkEmail(obj.value)) {
                var elem3 = document.getElementById(obj.id);
                elem3.setAttribute('style', 'border-color: green');
            }
            else {
                var elem4 = document.getElementById(obj.id);
                elem4.setAttribute('style', 'border-color: red');
            }
        }
    }
}
//todo сделать крестик

function checkPhone (str) {
    var patternPhone = /\b\d\(\d{3}\)\d{3}-\d{2}-\d{2}\b/;
    return patternPhone.test(str);
}
function checkEmail (str) {
    var patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/i;
    return patternEmail.test(str);
}
function checkName (str) {
    var patternName = /^[a-z0-9]{2,12}$/i;
    return patternName.test(str);
}

//parent = document.getElementById('wrap');
//parent.appendChild(builtForm(form));
//parent.appendChild(builtForm(form));
