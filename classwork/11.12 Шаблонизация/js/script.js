var temp = '<button id="close">{{{buttonX}}}</button>' +
    '<label for="name">{{{name}}}' +
    '<input type="text" id="name">' +
    '</label>' +
    '<label for="phone">{{{phone}}}' +
    '<input type="text" id="phone">' +
    '</label>' +
    '<label for="email">{{{mail}}}' +
    '<input type="text" id="email">' +
    '</label>' +
    '<button class="submit">{{{buttonOk}}}</button>';

var data = {
    "buttonX": "X",
    "name": "Name",
    "phone": "Phone",
    "mail": "Mail",
    "buttonOk": "Ok"
};

var content = Mustache.render(temp, data);
var domElem = document.querySelector('#wrap');
domElem.innerHTML = content;

//var templ = "{{#repo}} " +
//    "<li>{{name}}</li>" +
//    "{{/repo}}";
//
//var dataNew = {
//    "repo": [
//    { "name": "Прости прощай" },
//    { "name": "Динозавр" },
//    { "name": "Я буду думать о тебе" }]
//};
//
//var content = Mustache.render(templ, dataNew);
//var elem = document.querySelector("ul");
//elem.innerHTML = content;
