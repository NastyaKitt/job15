let currentIndex = 0;
const items = document.querySelectorAll('.sliderItem');
const totalItems = items.length;
const itemsToShow = 4; // Количество одновременно показываемых элементов

function showNextSlide() {
    // Убираем текущие слайды
    for (let i = 0; i < itemsToShow; i++) {
        items[(currentIndex + i) % totalItems].classList.remove('show');
    }

    // Обновляем индекс для отображения следующего набора элементов
    currentIndex = (currentIndex + 1) % totalItems;

    // Показываем следующие 4 слайда, начиная с текущего
    for (let i = 0; i < itemsToShow; i++) {
        items[(currentIndex + i) % totalItems].classList.add('show');
    }
}

// Запускаем слайдер каждые 3 секунды
setInterval(showNextSlide, 3000);

//---------------------------------------------------------------Слайдер в отзывы 


let currentIndes = 0;
const item = document.querySelectorAll('.iteme');
const totalItem = item.length;

function showNextItem() {
    item[currentIndes].classList.remove('showw');
    currentIndes = (currentIndes + 1) % totalItem;
    item[currentIndes].classList.add('showw');
}

// Показать первый элемент
item[currentIndes].classList.add('showw');

// Установить интервал на переключение
setInterval(showNextItem, 5000);

// 

let currentIndess = 0;
const itemm = document.querySelectorAll('.itemm');
const totalItemm = itemm.length;

function showNextItemm() {
    itemm[currentIndess].classList.remove('show');
    currentIndess = (currentIndess + 1) % totalItemm;
    itemm[currentIndess].classList.add('show');
}

// Показать первый элемент
itemm[currentIndess].classList.add('show');

// Установить интервал на переключение
setInterval(showNextItemm, 5000);

// ------------------------------------------------------------popups
// Получение элементов
const callElements = {
    price: document.getElementById('callPrice'),
    process: document.getElementById('callProcess'),
    form: document.getElementById('callForm'),
    form2: document.getElementById('callForm2'),
    form3: document.getElementById('callForm3'),
    review: document.getElementById('callReview'),
    me: document.getElementById('callMe'),
    FAQ: document.getElementById('callFAQ'),
    politic: document.getElementById('callPolitic'),
};

const winElements = {
    price: document.getElementById('priceWin'),
    process: document.getElementById('processWin'),
    form: document.getElementById('formWin'),
    review: document.getElementById('reviewWin'),
    me: document.getElementById('meWin'),
    FAQ: document.getElementById('FAQWin'),
    politic: document.getElementById('politicWIn'),
};

const closeElements = {
    price: document.getElementById('clsPrice'),
    process: document.getElementById('clsProcess'),
    form: document.getElementById('clsForm'),
    review: document.getElementById('clsReview'),
    me: document.getElementById('clsMe'),
    FAQ: document.getElementById('clsFAQ'),
    politic: document.getElementById('clsPolitic'),
};

// Функция для добавления обработчиков событий
const setupEventListeners = (callElement, winElement, closeElement) => {
    callElement.addEventListener('click', () => {
        winElement.classList.add('show');
    });

    closeElement.addEventListener('click', () => {
        winElement.classList.remove('show');
    });
};

// Установка обработчиков событий для всех элементов
setupEventListeners(callElements.price, winElements.price, closeElements.price);
setupEventListeners(callElements.process, winElements.process, closeElements.process);
setupEventListeners(callElements.form, winElements.form, closeElements.form);
setupEventListeners(callElements.form2, winElements.form, closeElements.form); // для callForm2
setupEventListeners(callElements.form3, winElements.form, closeElements.form); // для callForm2
setupEventListeners(callElements.review, winElements.review, closeElements.review);
setupEventListeners(callElements.me, winElements.me, closeElements.me);
setupEventListeners(callElements.FAQ, winElements.FAQ, closeElements.FAQ);
setupEventListeners(callElements.politic, winElements.politic, closeElements.politic);



// ------------------------------------------------------МАСКА


function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, // .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    // Элементы ввода с идентификаторами #tel и #tel1
    var inputs = [document.querySelector("#tel1"), document.querySelector("#tel2"), document.querySelector("#tel3"), document.querySelector("#tel4"), document.querySelector("#tel5"), document.querySelector("#tel6")];

    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false);
        input.focus();
        setCursorPosition(3, input);
    });
});

// -----------------------------------------------------Слайдер процесс

let currentIndexx = 0;
const itemx = document.querySelectorAll('.itemx');
const totalItemx = itemx.length;
const itemxToShow = 3; // Количество одновременно показываемых элементов

function showNextSlidex() {
    // Убираем текущие 3 слайда
    for (let i = 0; i < itemxToShow; i++) {
        itemx[(currentIndexx + i) % totalItemx].classList.remove('show');
    }

    // Обновляем индекс для отображения следующего набора элементов
    currentIndexx = (currentIndexx + itemxToShow) % totalItemx;

    // Показываем следующие 3 слайда
    for (let i = 0; i < itemxToShow; i++) {
        itemx[(currentIndexx + i) % totalItemx].classList.add('show');
    }
}

// Запускаем слайдер каждые 3 секунды
setInterval(showNextSlidex, 5000);
