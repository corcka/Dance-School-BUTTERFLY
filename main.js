// Фильтр расписания на декстопе

const filterBox = document.querySelectorAll('.box');

document.querySelector('.section3__menu').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});


// Кнопки для расписания в декстопе (чисто шобы класс active работал)

const tmdBtn = document.querySelectorAll(".timetable-btn-dekstop");

tmdBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;

        tmdBtn.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
    });
});


// Расписание мобильной версии:

// Выбираем все наши кнопки и сохраняем их в константу:
const dayBtn = document.querySelectorAll(".day-btn");

// Без этого предыдущий текст не скроется (часть 1/2):
const dayItems = document.querySelectorAll(".days");

// Перебираем все кнопки, и item будет являться конкретной кнопкой, вешаем обработчик события клика на каждую кнопку:
dayBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        // Проверяем через консоль, кликается ли по кнопке:
        // console.log("clicked");

        // Сохраним в переменную currentBtn кнопку, с которой работаем:
        let currentBtn = item;


        // Сохраняем в переменную значение атрибута data-tab (нужно, чтобы комп различал разные кнопки):
        let dayId = currentBtn.getAttribute("data-day");
        
        // Переменная для текста, который мы хотим показывать:
        let currentDay = document.querySelector(dayId);



        // Если мы нажимаем на кнопку, у которой уже есть класс active, чтобы не убирало и ставило заново, а ничего не делало:
        if( ! currentBtn.classList.contains("active")) {
        
        // Через консоль проверяем, правильно ли мы указали id и data кнопок:
        console.log(dayId);

        // Сначала убираем у всех кнопок класс active (remove — удалять):
        dayBtn.forEach(function(item) {
            item.classList.remove("active")
        });

        // Без этого предыдущий текст не скроется (часть 2/2):
        dayItems.forEach(function(item) {
            item.classList.remove("active")
        });

        // Вешаем на нашу кнопку класс active (add — добавлять):
        currentBtn.classList.add("active");

        // Конкретному табу выдаём класс active:
        currentDay.classList.add("active");
        }

        
    });
});


















