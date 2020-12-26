
//------training------\\
let instruction_one = () => {
    document.getElementById('mine').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('mine').style.padding = "3px";
    document.getElementById('mine').style.borderRadius = "10px";
    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это шахта, сердце поселения. При клике на шахту будут добываться всяческие ресурсы, от простого угля и до очень редкого алерониума. Важно знать, что способность добыть важные ресурсы на прямую зависит от уровня шахты <br> Попробуй добыть чуть-чуть угля";
}

let instruction_two = () => {
    //убираем стили с прошлого раза
    document.getElementById('mine').style.boxShadow = "none";
    document.getElementById('mine').style.padding = "0";
    document.getElementById('mine').style.borderRadius = "0";

    document.getElementById('blacksmith').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('blacksmith').style.padding = "3px";
    document.getElementById('blacksmith').style.borderRadius = "10px";
    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это кузня, тут ты можешь создавать изделия для продажи.";
}

let instruction_three = () => {
    //убираем стили с прошлого раза
    document.getElementById('blacksmith').style.boxShadow = "none";
    document.getElementById('blacksmith').style.padding = "0";
    document.getElementById('blacksmith').style.borderRadius = "0";

    document.getElementById('laboratory').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('laboratory').style.padding = "3px";
    document.getElementById('laboratory').style.borderRadius = "10px";
    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это лаборатория, нужна для добычи науки.";
}

let instruction_four = () => {
    //убираем стили с прошлого раза
    document.getElementById('laboratory').style.boxShadow = "none";
    document.getElementById('laboratory').style.padding = "0";
    document.getElementById('laboratory').style.borderRadius = "0";

    document.getElementById('warehouse').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('warehouse').style.padding = "3px";
    document.getElementById('warehouse').style.borderRadius = "10px";
    document.getElementsByClassName('eris_element__message')[0].innerHTML = "А это склад, тут хранятся твои ресурсы и изделия, а продать эти вещи можно прямо с него.";
}

let instruction_five = () => {
    //убираем стили с прошлого раза
    document.getElementById('warehouse').style.boxShadow = "none";
    document.getElementById('warehouse').style.padding = "0";
    document.getElementById('warehouse').style.borderRadius = "0";

    document.getElementById('eris_window').style.right = "57%";

    document.getElementById('town_hall').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('town_hall').style.padding = "3px";
    document.getElementById('town_hall').style.borderRadius = "10px";
    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Как ты понял, улучшения зданий имеет важную роль, а улучшать их можно прямо здесь в ратуше. Хочется упомянуть, что иногда к тебе могут приходить рабочие, они будут добывать минералы, но надо помнить, что в доме на всех места не хватит и рабочим нужно платить за их труды.";
}

let instruction_six = () => {
    //убираем стили с прошлого раза
    document.getElementById('town_hall').style.boxShadow = "none";
    document.getElementById('town_hall').style.padding = "0";
    document.getElementById('town_hall').style.borderRadius = "0";

    document.getElementById('score').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('score').style.padding = "3px";
    document.getElementById('score').style.borderRadius = "10px";
    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Иногда для создания некоторых вещей нужны особые материалы, которые проблематично добыть самому. Поэтому для этого есть магазин. Иногда там можно найти интересные товары по разным ценам.";
}

let instruction_seven = () => {
    //убираем стили с прошлого раза
    document.getElementById('score').style.boxShadow = "none";
    document.getElementById('score').style.padding = "0";
    document.getElementById('score').style.borderRadius = "0";

    document.getElementById('eris_window').style.right = "0%";

    document.getElementById('house').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('house').style.padding = "3px";
    document.getElementById('house').style.borderRadius = "10px";
    document.getElementsByClassName('eris_element__message')[0].innerHTML = "Рабочие должны жить в доме, а значит его тоже нужно улучшать, чтобы рабочих было больше.";
}

let instruction_eight = () => {
    //убираем стили с прошлого раза
    document.getElementById('house').style.boxShadow = "none";
    document.getElementById('house').style.padding = "0";
    document.getElementById('house').style.borderRadius = "0";

    document.getElementById('header_game__menu__icon').style.boxShadow = "0px 0px 8px 6px rgba(154,47,29,1)";
    document.getElementById('header_game__menu__icon').style.padding = "3px";
    document.getElementById('header_game__menu__icon').style.borderRadius = "10px";
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
    const engine = new Audio('./aud/click.mp3');
    engine.play()

    document.getElementById('menu_window').style.display = "block";
    if (person.training == false) {
        document.getElementsByClassName('eris_element__message')[0].innerHTML = "Это меню игры. Кнопка вернуться закроет окно, а кнопка авторы покажет список источников где была взята графика. Когда ты собираешься уйти, сохрани прогресс с помощью кнопки Сохранить.";
        setTimeout(() => {
            document.getElementsByClassName('eris_element__message')[0].innerHTML = "Теперь ты знаком с общими механиками игры, удачи в развитии рудника.";
        }, 10000);
        setTimeout(() => {
            document.getElementById('eris_window').style.display = "none";
            person.training = true;

            document.getElementById('header_game__menu__icon').style.boxShadow = "none";
            document.getElementById('header_game__menu__icon').style.padding = "0";
            document.getElementById('header_game__menu__icon').style.borderRadius = "0";
        }, 20000);
    }
}

document.getElementsByClassName('menu_element__button')[0].onclick = () => {
    const engine = new Audio('./aud/click.mp3');
    engine.play()
    
    document.getElementById('menu_window').style.display = "none";
}