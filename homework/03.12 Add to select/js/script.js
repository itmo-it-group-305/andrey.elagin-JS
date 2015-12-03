
//task
//Реализовать пополнение селектора. При нажатии на кнопку "Дабавить" срабатывает обработчик
//Функция обработчика вставляет введенный текст в селектор. Для получения значения из
//input использовать document.getElementById("txt").value. Обработчик повесить через addListener
elem = document.getElementById('button');
elem.addEventListener('click', addToDom, true);

function addToDom() {
    var parent = document.getElementById('city');
    var newOption = document.createElement('option');
    newOption.innerHTML = document.getElementById("text").value;
    parent.appendChild(newOption);
}






