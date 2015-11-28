/**
 * Created by daddyingrave on 22.11.15.
 */

//Домашка learn.javascript.ru

var login = window.prompt("enter login");

if (login == "Admin") {
    alert("login correct");
    var password = window.prompt("enter password");

    if (password == "Black Master") {
        alert("password correct, login successful");
    }
    else {
        alert("wrong password, try again");
    }
}
else {
    alert("wrong login");
}


var a = 3;
var b = 0;
var result = (a + b < 4) ? "little" : "a lot";
console.log(result);

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

var i = 0;
while (i < 3) {
    console.log("number " + i + "!");
    i++;
}

while (true) {
    var answer = window.prompt("Enter number more then 100!");
    answer = parseInt(answer);

    if (answer < 100) {
        alert("danger");
    }
    else {
        alert("ok");
        break;
    }
}

mark:
for (var i = 2; i < 10; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue mark;
        console.log(i);
    }
}