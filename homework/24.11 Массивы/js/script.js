/**
 * Created by daddyingrave on 24.11.15.
 */

//task 1
//Заданы два массива
//A = [ 12, 4, 3, 10, 1, 20 ]  B = [-3, -7, -100, -33]
//необходимо их объединить в один массив C добавив массив B  в конец(в начало) A.

A = [ 12, 4, 3, 10, 1, 20 ];
B = [-3, -7, -100, -33];
var C = A.concat(B);
console.log('Результат первой задачи: ' + C);

//task 2
//Одномерным массивом задана доска 3 на 3
//var area = [ null, null, null, null, null, null, null, null, null ]
//Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML.
//При появлении в массиве 0-ля рисовать нолик , 1-цы крестик
//Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.

var area = [ 1, null, 0, null, 1, null, null, 1, 0 ];
ticTacToe(area);

function addElement (element, index){
    var th = document.getElementById(index);
    var p = document.createElement('p');
    p.innerHTML = element;
    th.appendChild(p);
}

function ticTacToe (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == '0'){
            addElement('O', i);
        }
        if (array[i] == '1'){
            addElement('X', i);
        }
    }
}

//task 3
//Задан массив  - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение. См. оператор delete

//Мне кажется, что решил очень странным методом, значительно проще было использовать sort()
//Ведь в условии этой задачи не было запрета на его использование :)
var arr = [12,4,3,10,1,20];
var min = arr[0], max = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min){
        min = arr[i];
    }
    if (arr[i] > max){
        max = arr[i];
    }
}

delete arr[arr.indexOf(min)];
delete arr[arr.indexOf(max)];
console.log('Результат третьей задачи: ' + arr);

//task bonus
//Задан массив - [12,4,3,10,1,20] необходимо отсортировать его в порядке возрастания, при этом не использовать готовый метод sort

var arrNew = [12,4,3,10,1,20];

for(var j = arrNew.length - 1; j > 0; j--) {
    for (var y = 0; y < j; y++) {
        if (arrNew[y] > arrNew[y + 1]) {
            buffer = arrNew[y];
            arrNew[y] = arrNew[y + 1];
            arrNew[y + 1] = buffer;
        }
    }
}
console.log('Результат выполнения бонусной задачи: ' + arrNew);

//Задачки с learn.javascript.ru

//Напишите код для вывода alert случайного значения из массива:

//var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//min = 0;
//max = 3;
//var rand = Math.floor(Math.random() * arr.length);
//console.log(arr[rand]);

//Напишите код, который:
//
//Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//    Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт “Отмена”.
//При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//    Выводит сумму всех значений массива

//var arr = [];
//var sum = 0;
//while(true) {
//    var x = prompt("Enter number, and it will be put to array");
//    x = parseInt(x);
//    if (!x){
//        break;
//    }
//    else{
//        arr.push(x);
//    }
//}
//
//for (var i = 0; i < arr.length; i++) {
//    sum += arr[i];
//}
//
//console.log(sum);

