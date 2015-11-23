/**
 * Created by daddyingrave on 23.11.15.
 */

//задан числовой массив [2,3,7,13,5,0,20]
//
//найти мин макс значение в массиве
//найти среднее
//удалить первый и последний элемент

var arr = [2,3,7,13,5,0,20];
var min = 0;
var max = 0;
var average = 0;
var buffer = 0;
var first = 0;
var last = 0;
console.log(arr);


//todo переделать сортировку наоборот, сначала массива
//for(var j = arr.length - 1; j > 0; j--) {
//    for (var i = 0; i < j; i++) {
//        if (arr[i] > arr[i + 1]) {
//            buffer = arr[i];
//            arr[i] = arr[i + 1];
//            arr[i + 1] = buffer;
//        }
//    }
//}
//console.log(arr);



//for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//    for (var j = 0; j <= arr.length; j++)
//    if (arr[i] > arr[j]) {
//        arr[i] = arr[j];
//        console.log(arr[j]);
//    }
//    console.log(arr[i]);
//}
//console.log(arr);

//for (var i = 0; i < arr.length; i++) {
//    buffer += arr[i];
//}
//average = buffer / arr.length;
//console.log(average);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min){
        min = arr[i];
    }
    if (arr[i] > max){
        max = arr[i];
    }
}
console.log(min, max);

