/**
 * Created by daddyingrave on 25.11.15.
 */
//var city =[];
//city[100] = 'Хвойное';
//city[200] = 'Знойное';
//city[300] = 'Опальное';
//city[400] = 'Производное';
//
//var parent = document.getElementById('city');
//
//for (var key in city) {
//    child = buildOption(key, city[key]);
//    parent.appendChild(child);
//}
//
//function buildOption (val, name) {
//    var node = document.createElement('option');
//    node.setAttribute('value', val);
//    node.innerHTML = name;
//    return node;
//}
//todo Добавить Input для добавления элементов в селектор

//function dosmth(event) {
//    console.log(event);
//}
//event.onclick = dosmth();

elem = document.getElementById('root');

function handler(e) {
    //e.preventDefault();
    //e.stopPropagation();
    console.log(e.target);
    //return false
}

elem.addEventListener('click', handler, false);


