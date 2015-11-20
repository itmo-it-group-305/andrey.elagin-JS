/**
 * Created by daddyingrave on 20.11.15.
 */
var age = window.prompt("Введите возраст");

if (age < 10 && age > 0) {
    console.log("Вы ребенок");
}

else if (age > 9 && age < 18) {
    console.log("Вы подросток");
}

else if (age > 17 && age < 25) {
    console.log("Вы молодежь");
}

else if (age > 24 && age < 65) {
    console.log("Вы взрослый");
}

else if (age > 64 && age < 130) {
    console.log("Вы пенсионер");
}

else {
    console.log("Я вам не верю")
}

var ageNew = 18;

var bool = (ageNew >= 18)?("ок"):("неок"); //тернарный оператор

console.log(bool);

var x1 = 0;
for (var i = 0; i < 101; i++) {
  x1 += i;
}

console.log(x1);

var x = window.prompt("Выберите пункт меню от 1 до 3");
x = parseInt(x);

switch(x) {
    case 1: alert("Вы выбрали раздел \"ОЛОЛО\"");
        break;
    case 2: alert("Вы выбрали раздел\"парампарам\"");
        break;
    case 3: alert("Вывыбрали раздел\"Дзынь\"");
        break;
    default: alert("Вы выбрали какуюто чушь");
        break;
}

function salary (a) {
    return a * 350;
}

var workDays = window.prompt("Сколько дней вы проработали?")

workDays = parseInt(workDays);

console.log(salary(workDays));
