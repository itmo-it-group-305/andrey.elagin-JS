/**
 * Created by daddyingrave on 13.12.15.
 */

//шаблон для подготовленного объекта

var articleTemp = '<article class="some">' +
    '<header class="col-12">' +
    '<h2>{{header}}</h2>'+
    '<time>{{publishDate}} / {{announce}}</time>'+
    '</header>'+
    '<section class=" col-12  contentImage">'+
    '<img src="{{imgSource}}" alt="{{imgAlt}}">'+
    '</section>'+
    '<div class="col-12 newsText">'+
    '{{#articleText}}<p>{{text}}</p>{{/articleText}}' +
    '</div>'+
    '</article>';

//шаблон для объекта генерируемого черзе форму

var articleTempTest = '<article class="some">' +
    '<header class="col-12">' +
    '<h2>{{header}}</h2>'+
    '<time>{{publishDate}} / {{announce}}</time>'+
    '</header>'+
    '<section class=" col-12  contentImage">'+
    '<img src="img/mustache.jpg" alt="img">' +
    //'<img src="{{imgSource}}" alt="{{imgAlt}}">'+
    '</section>'+
    '<div class="col-12 newsText">'+
    '<p>{{text}}</p>' +
    '</div>'+
    '</article>';

var articleData = {
    "header": "Super awesome header",
    "publishDate": "December 13, 2015",
    "announce": "hm....",
    "imgSource": "img/mustache.jpg",
    "imgAlt": "Mustache",
    "articleText": [
        {"text": "Mustache is a simple web " +
        "template system with implementations available " +
        "for ActionScript, C++, Clojure, CoffeeScript, " +
        "ColdFusion, D, Delphi, Erlang, Fantom, Go, Haskell, " +
        "Io, Java, JavaScript, Julia, Lua, .NET, Objective-C, " +
        "Perl, PHP, Pharo, Python, Racket, Ruby, Rust, Scala, " +
        "Swift, CFEngine and XQuery. Mustache is described as a " +
        "logic-less system because it lacks any explicit control " +
        "flow statements, like if and else conditionals or for loops; " +
        "however, both looping and conditional evaluation can be " +
        "achieved using section tags processing lists and lambdas."},
        {"text": "In the remaining of this article, we declare " +
        "the data and the template in variables to keep the " +
        "examples self-contained. Remember to refer to sample " +
        "3 for a traditional setup when using templates in a " +
        "dynamic Web application."}]
};

//функция генериует строку которую вставляет в новостной блок
function templateHandler (template, data) {
    var tempString = Mustache.render(template, data);
    var parent = document.getElementById("newsFeed");
    var child = document.createElement("div");
    child.setAttribute("class", "oneNewWrap");
    parent.insertBefore(child, parent.children[0]);
    child.innerHTML = tempString;
}

//templateHandler(articleTemp, articleData);

//функция для генерации статьи на основе данных введеных в форму на сайте
var send = document.querySelector("#send");
send.addEventListener('click', function (e) {
    e.preventDefault();
    var data1 = document.querySelector("#header"),
        data2 = document.querySelector("#date"),
        data3 = document.querySelector("#announce"),
        //data4 = document.querySelector("#photo"),
        //data5 = document.querySelector("#alt"),
        data6 = document.querySelector("#articleText");
        console.log(typeof data6.value);

    var genArticle = {
        "header": data1.value,
        "publishDate": data2.value,
        "announce": data3.value,
        //"imgSource": data4.value,
        //"imgAlt": data5.value,
        "text": data6.value
    };
    templateHandler(articleTempTest, genArticle)
});

var sendTrue = document.querySelector("#sendTrue");
sendTrue.addEventListener('click', function (e) {
    e.preventDefault();
    templateHandler(articleTemp, articleData)
});
