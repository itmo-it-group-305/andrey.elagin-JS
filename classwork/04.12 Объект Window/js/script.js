/**
 * Created by daddyingrave on 25.11.15.
 */

//var form = {
//    tag: 'form',
//    child: [
//        {tag: 'button', text: 'X'},
//        {tag: 'label', text: 'Имя'},
//        {tag: 'input', type: 'text', text: 'Имя'}
//    ]
//};
//
//function builtHtml (object) {
//    for (var i in object) {
//        if (object.hasOwnProperty(i)) {
//            if (i == 'tag') {
//                //todo запихать проверку на пустоту
//                //возможно проканает http://stackoverflow.com/questions/25723674/javascript-possible-iteration-over-unexpected
//                var elem = document.createElement(object[i]);
//            }
//            if (i == 'text') {
//                elem.innerHTML = object[i];
//            }
//            if (i == 'type' || i == 'ID') {
//                elem.setAttribute(i, object[i]);
//            }
//        }
//    }
//    return elem;
//}
//
//function builtForm (object) {
//    for (var i in object) {
//        if (object.hasOwnProperty(i)) {
//            if (i == 'tag') {
//                parent = document.createElement(object[i]);
//            }
//        }
//        if (i == 'child') {
//            for (var j in object.child) {
//                if (object.child.hasOwnProperty(j)) {
//                    parent.appendChild(builtHtml(object.child[j]))
//                }
//            }
//        }
//    }
//    return parent;
//}
//
//parent = document.getElementById('wrap');
//parent.appendChild(builtForm(form));
//parent.appendChild(builtForm(form));



//setInterval('alert("Прошла секунда")', 1000);

function sec () {
    alert('second is gone');
}

var intervalID = setInterval(sec, 1000);
clearInterval(intervalID);