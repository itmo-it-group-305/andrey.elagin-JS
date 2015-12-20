var someVariable = "хуй впихнешь меня";

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

var tempStr = '<div class="some-wrap col-12"><div class="basket-stuff col-6" id="basket-stuff">' +
    '<p>{{positionNumber}}</p> {{productName}}</div>' + '<div class="quantity col-2 " id="quantity">' +
    '<p>' + 'количество' + '</div>' + '<div class="basket-price-wrap col-2">' +
    '<div class="basket-price col-12" id="price" price="' + price + '">' + price + '</div>' +
    '</div>' + '<div class="basket-empty col-2">' +
    '<button class="basket-delete" price="' + price + '">x</button>' + '</div></div>';

var str = '<div class="some-wrap col-12"><div class="basket-stuff col-6" id="basket-stuff">' +
    '<p>' + basket.positionNumber + ' ' + productName + '</div>' + '<div class="quantity col-2 " id="quantity">' +
    '<p>' + 'количество' + '</div>' + '<div class="basket-price-wrap col-2">' +
    '<div class="basket-price col-12" id="price" price="' + price + '">' + price + '</div>' +
    '</div>' + '<div class="basket-empty col-2">' +
    '<button class="basket-delete" price="' + price + '">x</button>' + '</div></div>';

var data = {
    "buttonX": function() {
        return someVariable;
    },
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
