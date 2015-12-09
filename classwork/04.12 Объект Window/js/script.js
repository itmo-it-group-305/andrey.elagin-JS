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

function checkEmptyField(field) {
    return Boolean(field.value);
}

function getFormFields() {
    var field = ['name', 'phone', 'email'];
    for (var i in field) {
        var obj = document.getElementById(field[i]);
        if (checkEmptyField(obj)) {
            console.log('true ' + obj.id);
            var elem = document.getElementById(obj.id);
            //elem.setAttribute('style', 'border-color: green');
            elem.style.borderColor = '';
        } else {
            console.log('false ' + obj);
            var elem2 = document.getElementById(obj.id);
            elem2.setAttribute('style', 'border-color: red');

        }
    }
}

function checkPhone (str) {
    var str = '7(921)911-23-12';
    var pattern = /\b\d\(\d{3}\)\d{3}-\d{2}-\d{2}\b/;
    console.log(pattern.test(str));
}


//str = '44:44';
//var pattern = /\b\d{2}:\d{2}\b/;
//console.log(str.match(pattern));
//console.log(pattern.test(str));

//parent = document.getElementById('wrap');
//parent.appendChild(builtForm(form));
//parent.appendChild(builtForm(form));



//setInterval('alert("Прошла секунда")', 1000);

//function sec () {
//    alert('second is gone');
//}
//
//var intervalID = setInterval(sec, 1000);
//clearInterval(intervalID);