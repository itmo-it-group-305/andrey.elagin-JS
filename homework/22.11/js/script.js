/**
 * Created by daddyingrave on 22.11.15.
 */

//Домашка Dropbox
//task 1
//Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название соответствующего времени года ("зима", "весна" и т.д.).
//Решить через switch.

var season = window.prompt("Enter month, and get a season");

switch (season) {
    case "december":
    case "january":
    case "february":
        console.log("it's winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("it's spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("it's summer");
        break;
    case "september":
    case "october":
    case "november":
        console.log("it's autumn");
        break;
    default:
        console.log("incorrect data");
        break;
}

//task 2
//Определить является ли треугольник со сторонами a, b, c равнобедренным треугольником.

while(true) {
    var aSide = window.prompt("enter length of a first side of triangle");
    var bSide = window.prompt("enter length of a second side of triangle");
    var cSide = window.prompt("enter length of the third side of triangle");
    parseInt(aSide, bSide);
    parseInt(cSide);

    if (!aSide || !bSide || !cSide) break;

    if (aSide == bSide || bSide == cSide || cSide == aSide) {
        console.log("this triangle is isosceles");
        break;
    }
    else {
        console.log("this triangle isn't isosceles");
    }
}

//task 3
//Проверить истинность высказывания: "Данное целое число является четным двузначным числом".

var evenNumber = window.prompt("only numbers like ** / 2 = 0");
evenNumber= parseInt(evenNumber);

if (evenNumber > 0 && evenNumber < 100 && evenNumber % 2 == 0) {
    console.log("this number is even");
}
else {
    console.log("this number incorrect");
}

//task 4
//Напечатать число 2015 как ряд из повторяющихся чисел через пробел:  2 0 1 5
//Подсказка: применить строковые методы, приведение типа и цикл

var numbers = 2015;
var newNum = numbers.toString();
console.log(newNum);

for (var i = 0; i < newNum.length; i++) {
    document.write(newNum[i] + " ");
}

//task 5
//Нарисовать равнобедренный треугольник из символов *. Высоту выбирает пользователь.
//Например: высота = 4, в браузере:
//    *
//   ***
//  *****
// *******
//Для вывода использовать document.write("ваш сформированный html")

var height = window.prompt("Enter height of triangle");
height = parseInt(height);

for (var i = 0; i < height; i++) {
    for (var j = 0; j <= i * 2; j++){
            document.write('*');
    }
    document.write('<br>');
}

//task 6
//Значения переменных X, Y, Z поменять местами так, чтобы они оказались упорядоченными по возрастанию.

var x = window.prompt("Enter variable x");
x = parseInt(x);
var y = window.prompt("Enter variable y");
y = parseInt(y);
var z = window.prompt("Enter variable z");
z = parseInt(z);

//простой способ - с помощью массива
//var sortArray = [x, y, z];
//sortArray.sort();
//
//console.log(sortArray);

//долгий способ - перебор всех вариантов

if (x > y && y > z) {
    console.log(z, y, x);
}
if (x > z && z > y) {
    console.log(y, z, x);
}
else if (z > x && x > y) {
    console.log(y, x, z);
}
else if (z > y && y > x) {
    console.log(x, y, z);
}
else if (y > z && z > x) {
    console.log(x, z, y);
}
else if (y > x && x > z) {
    console.log(z, x, y);
}


















