/**
 * Created by daddyingrave on 25.11.15.
 */

//Пример генерации новой лексемы из структурных элементов слова

//var pre = ['Пре', 'Под', 'Над', 'Около', 'Псевдо', 'Недо', 'Мега', 'Анти', 'У', 'Все'];
//var root = ['был', 'ход', 'истор', 'бол', 'гляд', 'бал', 'стол', 'григорий', 'свет', 'шкаф'];
//var end = ['ый', 'ой', 'а', 'оло', 'ы', 'ая', 'жи', 'у', 'ага'];
//var word = [];
//
//function wordConstruct (a, b, c) {
//    word.push(a[Math.floor(Math.random()*9)]);
//    word.push(b[Math.floor(Math.random()*9)]);
//    word.push(c[Math.floor(Math.random()*9)]);
//}
//
//wordConstruct(pre, root, end);
//console.log(word.join(''));

//Задача с лекции 25.11
//Генерация лексемы из алфавита через массив с заданной граматикой

//Решил задать исходные массивы таким образом, чтобы поменьше ставить ковычек...
//var strVowel = 'а,е,ё,и,о,у,ы,э,ю,я';
//var strConsonant = 'б,в,г,д,ж,з,й,к,л,м,н,п,р,с,т,ф,х,ц,ч,ш,щ,ъ,ь';
//var arrayVowel = strVowel.split(',');
//var arrayConsonant = strConsonant.split(',');
//var grammar = ["г","с","с","г","г","с"];
//var newWord = [];
//
//function wordConstructByLetter (array) {
//    for (var a = 0; a < array.length; a++) {
//        if (array[a] == 'г') {
//            newWord.push(arrayVowel[Math.floor(Math.random()*10)])
//        }
//        else {
//            newWord.push(arrayConsonant[Math.floor(Math.random()*23)])
//        }
//    }
//    var wordStr = newWord.join('');
//    console.log(wordStr);
//}
//
//wordConstructByLetter(grammar);


//task 1
//Исторический тест.
//Необходимо сконструировать 10 исторических событий в виде объектов ,
//задать свойства: год , название, описание, ссылку на следующее событие,
//фотку. Пользователю показывать историческое событие (document.write()),
//задавать вопрос(prompt) о ее дате , при получении ответа сверять правильность
//ответа и выдавать результат проверки (alert) правильно , неправильно.
//В конце выводить итоговый подсчет:  правильных ответов 1 из 10
//Пример вывода:
//document.write("<div class="history"><h2>Куликовская битва</h2>");
//document.write("<img src="image.jpg">);
//document.write("<p>Описание ...</p><div>");

var answerArray = [];

function addObjectToDom (object) {
    document.write(object.title);
    document.write(object.photo);
    document.write(object.description);
    document.write(object.link);
}

function question (object) {
    var answer = window.prompt("Когда произошло описанное собыетие?");
    if (answer == object.year) {
        alert('Правильно!');
        answerArray.push('true');
    }
    else {
        alert('Не правильно!');
        answerArray.push('false');
    }
    console.log(answerArray);
}

var eventChristianization = {
    year: 988,
    title: '<h2>Крещение Руси</h2>',
    photo: '<img src="img/kreshenie.jpg" alt="Крещение">',
    description: '<p>Крещение Руси — введение в Древней Руси христианства как государственной религии, осуществлённое в конце X века князем Владимиром Святославичем. Источники дают противоречивые указания на точное время крещения. Традиционно, вслед за летописной хронологией, событие принято относить к 988 году и считать началом официальной истории Русской Церкви (некоторые исследователи полагают, что крещение Руси состоялось позже: в 990 или 991 году).',
    link: '<form><input type="button" onClick="question(eventChristianization)" value="Когда это произошло?"/></form>'
};

var eventReignOfYaroslav = {
    year: 988,
    title: '<h2></h2>',
    photo: '<img src="" alt="">',
    description: '<p>',
    link: '<a href="">link</a>'
};

addObjectToDom(eventChristianization);



























