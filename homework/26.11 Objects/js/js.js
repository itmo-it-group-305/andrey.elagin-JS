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
var result = "";

function addObjectToDom (object) {
    document.write(object.title);
    document.write(object.photo);
    document.write(object.description);
    document.write(object.active);
    document.write(object.linkToNext);
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

function calcResult (array) {
    for (var b = 0; b <array.length; b++) {
        if (array[b] == 'true'){
            result++;
        }
    }
    alert("Ваш результат: " + result + " из 10")
}

var eventChristianization = {
    year: 988,
    title: '<h2 id="Christ">Крещение Руси</h2>',
    photo: '<img src="img/kreshenie.jpg" alt="Крещение">',
    description: '<p>Крещение Руси — введение в Древней Руси христианства как государственной религии, осуществлённое в конце X века князем Владимиром Святославичем. Источники дают противоречивые указания на точное время крещения. Традиционно, вслед за летописной хронологией, событие принято относить к 988 году и считать началом официальной истории Русской Церкви (некоторые исследователи полагают, что крещение Руси состоялось позже: в 990 или 991 году).',
    active: '<form><input type="button" onClick="question(eventChristianization)" value="Когда это произошло?"/></form>',
    linkToNext: '<br><a href=#yaroslav>К следующему вопросу</a>'
};

var eventReignOfYaroslav = {
    year: 1016,
    title: '<h2 id="yaroslav">Становление Ярослава киевским князем</h2>',
    photo: '<img src="img/yaroslav.jpg" alt="Ярослав Мудрый">',
    description: '<p>Ярослав Владимирович — сын крестителя Руси князя Владимира Святославича (из рода Рюриковичей) и полоцкой княжны Рогнеды Рогволодовны, отец, дед и дядя многих правителей Европы. При крещении был наречён Георгием. В Русской православной церкви почитается как благоверный князь; день памяти — 20 февраля по юлианскому календарю.',
    active: '<form><input type="button" onClick="question(eventReignOfYaroslav)" value="Когда это произошло?"/></form>',
    linkToNext: '<br><a href=#IceBattle>К следующему вопросу</a>'
};

var eventIceBattle = {
    year: 1242,
    title: '<h2 id="IceBattle">Ледовое побоище</h2>',
    photo: '<img src="http://oursociety.ru/_pu/1/16489367.jpg" alt="Ледовое побоище">',
    description: '<p>Ледо́вое побо́ище (нем. Schlacht auf dem Eise, лат. Prœlium glaciale — «Ледовая битва»), также битва на Чудском озере (нем. Schlacht auf dem Peipussee) — битва, произошедшая на льду Чудского озер) с участием ижоры, новгородцев и владимирцев под предводительством Александра Невского, с одной стороны, и войском Ливонского ордена, с другой стороны.',
    active: '<form><input type="button" onClick="question(eventIceBattle)" value="Когда это произошло?"/></form>',
    linkToNext: '<br><a href=#fallout2>К следующему вопросу</a>'
};

var eventFallout2Realease = {
    year: 1998,
    title: '<h2 id="fallout2">Выход Fallout 2</h2>',
    photo: '<img src="http://static1.gamespot.com/uploads/original/1539/15391776/2571540-7895982999-22762.jpg" alt="Fallout 2">',
    description: '<p>Fallout 2 — компьютерная ролевая игра с открытым миром, разработанная Black Isle Studios и выпущенная издателем Interplay Entertainment. Является второй частью из серии Fallout. Несмотря на то, что игровой движок практически не изменился с первой части, благодаря детальной проработке игрового мира и сюжета, продолжению удалось превзойти её в популярности.ы.',
    active: '<form><input type="button" onClick="question(eventFallout2Realease)" value="Когда когда вышел этот шедевр?"/></form>',
    linkToNext: '<br><a href=#total>К следующему вопросу</a>'
};

var eventTotalEclipse = {
    year: 1983,
    title: '<h2 id="total">Дата выхода самой лучшей песни в мире?</h2>',
    photo: '<img src="http://images.radiotimes.com/namedimage/Bonnie_Tyler_to_represent_UK_at_Eurovision_Song_Contest.jpg?quality=85&mode=crop&width=620&height=374&404=tv&url=/uploads/images/original/26189.jpg" alt="Fallout 2">',
    description: '<p>Просто самая лучшая песня в мире',
    active: '<form><input type="button" onClick="question(eventTotalEclipse)" value="Когда когда вышел этот шедевр?"/></form>',
    linkToNext: '<br><a href=#>К следующему вопросу</a>'
};

addObjectToDom(eventChristianization);
addObjectToDom(eventReignOfYaroslav);
addObjectToDom(eventIceBattle);
addObjectToDom(eventFallout2Realease);
addObjectToDom(eventTotalEclipse);
document.write('<br><br><form><input type="button" onClick="calcResult(answerArray)" value="Вычислить результат"/></form>');


























