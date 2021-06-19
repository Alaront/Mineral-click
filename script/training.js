//------training------\\

let cleanShow = (str) =>{
    document.getElementById(str).style.boxShadow = "none";
    document.getElementById(str).style.padding = "0";
    document.getElementById(str).style.borderRadius = "0";
}

let addShow = (str) =>{
    document.getElementById(str).style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById(str).style.padding = "3px";
    document.getElementById(str).style.borderRadius = "10px";
}

let instruction_one = () => {
    addShow('mine');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это шахта, сердце поселения. При клике на шахту будут добываться всяческие ресурсы, от простого угля и до очень редкого алерониума. Важно знать, что способность добыть важные ресурсы на прямую зависит от уровня шахты <br> Попробуй добыть чуть-чуть угля";
}

let instruction_two = () => {
    //убираем стили с прошлого раза
    cleanShow('mine');

    addShow('blacksmith');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это кузня, тут ты можешь создавать изделия для продажи.";
}

let instruction_three = () => {
    //убираем стили с прошлого раза
    cleanShow('blacksmith');
    
    addShow('laboratory');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это лаборатория, нужна для добычи науки.";
}

let instruction_four = () => {
    //убираем стили с прошлого раза
    cleanShow('laboratory');

    addShow('warehouse');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "А это склад, тут хранятся твои ресурсы и изделия, а продать эти вещи можно прямо с него.";
}

let instruction_five = () => {
    //убираем стили с прошлого раза
    cleanShow('warehouse');

    document.getElementById('eris_window').style.right = "57%";
    
    addShow('town_hall');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Как ты понял, улучшения зданий имеет важную роль, а улучшать их можно прямо здесь в ратуше. Хочется упомянуть, что иногда к тебе могут приходить рабочие, они будут добывать минералы, но надо помнить, что в доме на всех места не хватит и рабочим нужно платить за их труды.";
}

let instruction_six = () => {
    //убираем стили с прошлого раза
    cleanShow('town_hall');

    addShow('score');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Иногда для создания некоторых вещей нужны особые материалы, которые проблематично добыть самому. Поэтому для этого есть магазин. Иногда там можно найти интересные товары по разным ценам.";
}

let instruction_seven = () => {
    //убираем стили с прошлого раза
    cleanShow('score');

    document.getElementById('eris_window').style.right = "0%";
    
    addShow('house');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Рабочие должны жить в доме, а значит его тоже нужно улучшать, чтобы рабочих было больше.";
}

let instruction_eight = () => {
    //убираем стили с прошлого раза
    cleanShow('house');

    addShow('header_game__menu__icon');

    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это кнопка меню, нажми на неё.";
}


let timer_training = () => {
    instruction_one();

    setTimeout(() => {
        instruction_two();
    }, 25000);

    setTimeout(() => {
        instruction_three();
    }, 35000);

    setTimeout(() => {
        instruction_four();
    }, 50000);

    setTimeout(() => {
        instruction_five();
    }, 75000);

    setTimeout(() => {
        instruction_six();
    }, 95000);

    setTimeout(() => {
        instruction_seven();
    }, 120000);

    setTimeout(() => {
        instruction_eight();
    }, 130000);
}

let training = () => {
    if (person.name == "") {
        document.getElementsByClassName('eris_element__message')[0].innerHTML = "Привет, я Эрис, а ты новый староста этого рудника. Вот только ты его ещё не назвал, постарайся дать гордое и величественное название.";
    };
    document.getElementById('mineral_name__button').onclick = () => {
        let name = document.getElementById('mineral_name').value;
        person.name = name;
        document.getElementsByClassName('header_game__resources_name__info')[0].innerHTML = person.name;
        document.getElementById('element__name').style.display = "none";

        timer_training();
    }

};

if (person.name == "") {
    document.getElementById('element__name').style.display = "flex";
    training();
} else {
    document.getElementById('element__name').style.display = "none";
    document.getElementById('eris_window').style.display = "none";
}



//------menu------\\
document.getElementById('header_game__menu__icon').onclick = () => {
    soundClick(true)

    document.getElementById('menu_window').style.display = "block";
    if (person.training == false) {
        document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это меню игры. Кнопка вернуться закроет окно, а кнопка авторы покажет список источников где была взята графика. Когда ты собираешься уйти, сохрани прогресс с помощью кнопки Сохранить.";
        setTimeout(() => {
            document.getElementsByClassName('eris_element__message')[0].innerHTML = "Теперь ты знаком с общими механиками игры, удачи в развитии рудника.";
        }, 10000);
        setTimeout(() => {
            document.getElementById('eris_window').style.display = "none";
            person.training = true;

            cleanShow('header_game__menu__icon');
        }, 20000);
    }
}

document.getElementsByClassName('menu_element__button')[0].onclick = () => {
    soundClick(true)

    document.getElementById('menu_window').style.display = "none";
}
