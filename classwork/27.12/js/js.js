/**
 * Created by daddyingrave on 25.11.15.
 */

//Подсчет суммы
var summ = 0;
function sum (a, b) {
    for (var i = a; i <= b; i++) {
        summ += i;
    }
}

sum(1, 100);
console.log(summ);

//передача объекта функции и вывод его содежимого через ее вызов
var someObject = {
    num: 1,
    summer: "ня-ня"
};

var someObject2 = {
    num: 23,
    summer: "хелло мир"
};

function outputObject (object) {
    console.log(object.num + " " + object.summer);
}

outputObject(someObject);

//реализация функции как метода объекта

var funcObject = {
    func: function(object) {
        console.log(object.num + " " + object.summer);
    },
    funcAgain: function(z, y){
        console.log(z * y);
    },
    funcjNew: function(element, index) {
        for (var i = 0; i < index; i++)
            document.write(element);
    }
};

funcObject.func(someObject2);
funcObject.funcAgain(42,42);
funcObject.funcjNew('<h1>HELL, O! WORLD!</h1>', 5);
















