/**
 * Created by daddyingrave on 25.11.15.
 */


//window.onload = function() {
//    var keywordList = prompt("Enter keywords, separated by commas", "");
//    var arrayList = keywordList.split(",");
//    var resultString = "";
//    for (var i = 0; i < arrayList.length; i++) {
//        resultString += "keyword: " + arrayList[i] + "<br />";
//    }
//    var blk = document.getElementById("result");
//    blk.innerHTML = resultString;
//    console.log(resultString);
//    console.log(resultString.length);
//};

//var arr = ['1', '2', '3'];
//var arr2 = [];
//for (var i = 0; i < arr.length; i++) {
//     arr2.push(parseInt(arr[i]));
//}
//
//console.log(arr2);

//var human = {
//    sex: "male",
//    age: 34,
//    height: 1
//};
//
//var windowNew = {
//    width: '2em',
//    button: 'ok',
//    color: 'black'
//};
//
//var slider = {
//    kindness: 'is okay',
//    scroll : function()
//    {
//        return this.name;
//    }
//};

var pre = ['Пре', 'Под', 'Над', 'Около', 'Псевдо', 'Недо', 'Мега', 'Анти', 'У', 'Все'];
var root = ['был', 'ход', 'истор', 'бол', 'гляд', 'бал', 'стол', 'григорий', 'свет', 'шкаф'];
var end = ['ый', 'ой', 'а', 'оло', 'ы', 'ая', 'жи', 'у', 'ага'];
var word = [];

function wordConstuct (a, b, c) {
    word.push(a[Math.floor(Math.random()*10)]);
    word.push(b[Math.floor(Math.random()*10)]);
    word.push(c[Math.floor(Math.random()*10)]);
}

wordConstuct(pre, root, end);
console.log(word.join(''));






















