/**
 * Created by daddyingrave on 25.11.15.
 */

var form = {
    tag: 'form',
    child: [
        {tag: 'button', text: 'X', class: 'close', id: 'close'},
        {tag: 'label', text: 'Имя', for: 'name'},
        {tag: 'input', type: 'text', id: 'name'},
        {tag: 'label', text: 'Телефон', for: 'phone'},
        {tag: 'input', type: 'text', id: 'phone'},
        {tag: 'label', text: 'Почта', for: 'email'},
        {tag: 'input', type: 'text', id: 'email'},
        {tag: 'button', text:'OK', class: 'ok', id: 'ok'},
        {tag: 'input', text:'OK', type: 'button', id: 'ok', class: 'ok'}
    ]
};

function builtHtml (object) {
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            if (i == 'tag') {
                var elem = document.createElement(object[i]);
            }
            if (i == 'text') {
                elem.innerHTML = object[i];
            }
            if (i == 'type' || i == 'id' || i == 'for' || i == 'class' ) {
                console.log(object[i]);
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
                obj.style.borderColor = 'rgba(0, 128, 0, 0.44)';
            }
            else if (obj.id == 'phone' && checkPhone(obj.value)) {
                obj.style.borderColor = 'rgba(0, 128, 0, 0.44)';
            }
            else if (obj.id == 'email' && checkEmail(obj.value)) {
                obj.style.borderColor = 'rgba(0, 128, 0, 0.44)';
            }
            else {
                obj.style.borderColor = 'rgba(255, 0, 0, 0.46)';
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

var ok = document.querySelector('#ok'),
    close = document.querySelector('#close'),
    make = document.querySelector('#start'),
    global = document.querySelector('#wrap');

global.addEventListener('click', function(e) {

});

make.addEventListener('click', function (e) {
    e.preventDefault();
    form = document.querySelector('#wrap');
    form.style.display = 'block';
    //parent = document.getElementById('wrap');
    //parent.appendChild(builtForm(form));
});

ok.addEventListener('click', function (e) {
    e.preventDefault();
    getFormFields();
});

close.addEventListener('click', function (e) {
    e.preventDefault();
    form = document.querySelector('#wrap');
    form.style.display = 'none';
});

// ..и аналогичный метод removeEvent
