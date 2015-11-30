/**
 * Created by daddyingrave on 25.11.15.
 */
//Рекурсивная функция для вычисления степени числа
//function recurse (x, y) {
//    if (y != 1) {
//        return x * recurse(x, y - 1);
//    }
//    else {
//        return x;
//    }
//}
//
//console.log(recurse(2, 35));

//var f = function factorial(n) {
//    return n ? n*factorial(n-1) : 1;
//};
//
//var g = f;  // скопировали ссылку на функцию-факториал в g
//f = null;
//
//console.log( g() ); // 120, работает!

//function g() {
//    return 1;
//}
//
//alert(g());

//var age = prompt('Ваш возраст');
//age = parseInt(age);
//switch (age) {
//    case  18:
//        alert( 'Никогда не сработает' ); // результат prompt - строка, а не число
//
//    case "18": // вот так - сработает!
//        alert( 'Вам 18 лет!' );
//        break;
//
//    default:
//        alert( 'Любое значение, не совпавшее с case' );
//}

//Код ниже получает из массива строк новый массив, содержащий их длины:
//
//    var arr = ["Есть", "жизнь", "на", "Марсе"];
//
//var arrLength = [];
//for (var i = 0; i < arr.length; i++) {
//    arrLength[i] = arr[i].length;
//}
//
//alert( arrLength ); // 4,5,2,5
//Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

//var arr = ["Есть", "жизнь", "на", "Марсе"];
//
//var arrLength = arr.map(function(name) {
//    return name.length;
//});
//
////var arrLength = [];
////for (var i = 0; i < arr.length; i++) {
////    arrLength[i] = arr[i].length;
////}
//
//alert( arrLength ); // 4,5,2,5

//На входе массив чисел, например: arr = [1,2,3,4,5].
//Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
//Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
//в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
//То есть: для arr = [ 1, 2, 3, 4, 5 ]
//getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
//Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
//Функция не должна модифицировать входной массив.
//В решении используйте метод arr.reduce.

//arr = [ 1, 2, 3, 4, 5 ];
// todo не понял почему так работает
//function getSums(arr) {
//    var resultArr = [];
//    arr.reduce(function(sum, current, i) {
//        return resultArr[i] = sum + current;
//    }, 0);
//    return resultArr;
//}
//console.log(getSums(arr));

//arr = [ 1, 2, 3, 4, 5 ];

//function getSumAgain (arr) {
//    var result = [];
//
//    var totalArray = arr.reduce(function(sum, current) {
//        result.push(sum);
//        return sum + current;
//    });
//    result.push(totalArray);
//
//    return result;
//}
//
//console.log(getSumAgain(arr));

// todo изучить метод reduce/reduceRight

//еще пара задач с learn.javascript.ru
//Как в функции отличить отсутствующий аргумент от undefined?

// function f(x) {
//   alert(arguments.length ? 1 : 0)
//   // ..ваш код..
//   // выведите 1, если первый аргумент есть, и 0 - если нет
// }

// f(undefined); // 1
// f(); // 0


//Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

var sumArgs = 0;

function sum() {
  for (var i = 0; i < arguments.length; i++) {
    sumArgs += arguments[i];
  }
  return sumArgs;
}

alert(sum(1,2,3));







