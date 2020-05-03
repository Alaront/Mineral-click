
//------town------\\
//открытие окна town hall
let size_working_lim = 0;//количество рабочих возле ратуши
let temp_arr_working = [];
document.getElementsByClassName('building_blok')[6].onclick = () => {
    document.getElementsByClassName('town_hall_element_infastr')[0].insertAdjacentHTML('afterbegin', '<div id="town_hall_element__scroll__infastr"></div>')//это чтобы скролить
    document.getElementById('town_hall_window').style.display = "block"//переводим в блок

    //Вкладки
    let icon_content = document.getElementsByClassName('icon_content');
    let icon1 = document.getElementById('icon1');
    let icon2 = document.getElementById('icon2');

    let hideTabsContent = (t) => {
        for (let i = t; i < icon_content.length; i++) {
            icon_content[i].classList.remove('show');
            icon_content[i].classList.add('hide');
            if (t == 0) {
                icon1.classList.remove('whiteborder');
            } else {
                icon2.classList.remove('whiteborder');
            }
        }
    }
    hideTabsContent(1);

    let showTabsContent = (i) => {
        if (icon_content[i].classList.contains('hide')) {
            hideTabsContent(0);
            icon_content[i].classList.remove('hide');
            icon_content[i].classList.add('show');
            if (i == 0) {
                icon1.classList.add('whiteborder');
                icon2.classList.remove('whiteborder');
            } else {
                icon2.classList.add('whiteborder');
            }
        }
    }

    document.getElementById('icon1').onclick = () => {
        showTabsContent(0);
    }
    document.getElementById('icon2').onclick = () => {
        showTabsContent(1);
    }

    //массивы уравней зданий
    let arr_name = ["mine", "blacksmith", "laboratory", "~", "warehouse", "house"];
    let arr_name_rus = ["Шахта", "Кузница", "Лаборатория", "~", "Склад", "Дом"];
    let mine = [0, 500, 900, 1200, 1500, 2500, 2900, 3100, 4000, 5000];//то сколько требуется науки для улучшения, 0 это уровень 1
    let blacksmith = [0, 800, 1000, 1300, 1500, 2000, 2500, 3200, 4000];
    let laboratory = [0, 500, 700, 1000, 1200, 1800, 2700, 4000];
    let warehouse = [0, 600, 1200];
    let house = [0, 900, 1500];

    for (let i = 0; i < 6; i++) {
        if (i == 3) i++;
        let science_lvl = 0;
        let t = arr_building[i];
        if (i == 0) science_lvl = mine[t];
        if (i == 1) science_lvl = blacksmith[t];
        if (i == 2) science_lvl = laboratory[t];
        if (i == 4) science_lvl = warehouse[t];
        if (i == 5) science_lvl = house[t];

        if (science_lvl == undefined) science_lvl = "Улучшено полностью";

        document.getElementsByClassName('town_hall_element_infastr')[0].innerHTML += `
        <div class="town_hall_element_infastr__block ${arr_name[i]}">
        <span><img src="img/building/${arr_name[i]}/building_1.png" alt="photo"></span>
        <p>Название: ${arr_name_rus[i]}</p>
        <p class="blacksmith_element__icon__lvl_${arr_name[i]}">Уровень: ${arr_building[i]}</p>
        <p class="blacksmith_element__icon__info_${arr_name[i]}">Нужно науки для улучшения: ${science_lvl}</p>
        <button class="blacksmith_element__icon__button_${arr_name[i]}">Улучшить</button>
        </div>`;
    }

    for (let i = 0; i < 6; i++) {
        if (i == 3) i++;
        let science_lvl = 0;

        let lvl_calcul = () => {
            let t = arr_building[i];
            if (i == 0) science_lvl = mine[t];
            if (i == 1) science_lvl = blacksmith[t];
            if (i == 2) science_lvl = laboratory[t];
            if (i == 4) science_lvl = warehouse[t];
            if (i == 5) science_lvl = house[t];
        };

        lvl_calcul();

        document.getElementsByClassName(`blacksmith_element__icon__button_${arr_name[i]}`)[0].onclick = () => {
            if (science_lvl != 0) {
                if (person.science >= science_lvl) {
                    person.science -= science_lvl;
                    document.getElementsByClassName('header_game__resources_science__info')[0].innerHTML = person.science;
                    arr_building[i]++;

                    lvl_calcul();
                    document.getElementsByClassName(`blacksmith_element__icon__lvl_${arr_name[i]}`)[0].innerHTML = `Уровень: ${arr_building[i]}`;
                    if (science_lvl != undefined) {
                        document.getElementsByClassName(`blacksmith_element__icon__info_${arr_name[i]}`)[0].innerHTML = `Нужно науки для улучшения: ${science_lvl}`;
                    } else {
                        document.getElementsByClassName(`blacksmith_element__icon__info_${arr_name[i]}`)[0].innerHTML = "Нужно науки для улучшения: Улучшено полностью";
                    }
                } else {
                    document.getElementsByClassName(`blacksmith_element__icon__button_${arr_name[i]}`)[0].innerHTML += `<div id="town_hall_element__icon__error"><p>Сэр, у вас не хватает науки</p></div`;
                    setTimeout(() => {
                        document.getElementById("town_hall_element__icon__error").remove();
                    }, 1000)
                }
            }
            //смена спрайта
            building_changes(i);
        };
    };


    //вывод сообщений
    if (temp_arr_working.length > 0) {
        document.getElementsByClassName('town_hall_element_messeg')[0].innerHTML += `
         <div class="town_hall_element_messeg_hire">
            <span><img src="img/person/working_${temp_arr_working[0].img}.png" alt="photo"</span>
            <p>Имя: ${temp_arr_working[0].name}</p>
            <p class="town_hall_element_messeg_hire">Уровень: ${temp_arr_working[0].lvl}</p>
            <p class="town_hall_element_messeg__info_hire">Плата: ${temp_arr_working[0].salary}</p>
            <button id="town_hall_element_messeg__button_accept">Нанять</button>
            <button id="town_hall_element_messeg__button_refuse">Отказать</button>
         </div>`;



        document.getElementById('town_hall_element_messeg__button_accept').onclick = () => {
            let t = arr_building[5];
            t--;

            let lim_workers = [4, 10, 20];//количество рабочих в зависимости от уровня

            if (temp_arr_working[0] != undefined && lim_workers[t] > person.peopls_size) {
                arr_working.push(temp_arr_working[0]);
                temp_arr_working.shift();
                person.peopls_size++;

                document.getElementsByClassName('header_game__resources_people__info')[0].innerHTML = person.peopls_size;

                size_working_lim--;
                document.getElementsByClassName('town_hall_element_messeg_hire')[0].remove();
                document.getElementsByClassName('town_hall_element_messeg_hire_img')[0].remove();

            };
        };
        document.getElementById('town_hall_element_messeg__button_refuse').onclick = () => {
            if (temp_arr_working[0] != undefined) {
                temp_arr_working.shift();

                size_working_lim--;
                document.getElementsByClassName('town_hall_element_messeg_hire')[0].remove();
                document.getElementsByClassName('town_hall_element_messeg_hire_img')[0].remove();
            };
        };
    };

};

//создание рабочих
let arr_name__working = ["Асгрим", "Атли", "Берг", "Брод", "Вестейн", "Дунгад", "Лейв", "Моддан", "Струдхаральд", "Ульв", "Флоси", "Торлейв"];

let craft__working = (i) => {

    let workin_object = {
        name: arr_name__working[getRndInteger(0, arr_name__working.length)],
        img: getRndInteger(1, 4),
        lvl: getRndInteger(1, 6),
        hired: true,
        salary: getRndInteger(20, 50)
    };

    temp_arr_working[i] = workin_object;
}

//через определённое время будут создаваться временные рабочие и появляться возле ратуши
let timer_working = setInterval(() => {
    let t = arr_building[5];
    t--;

    let lim_workers = [4, 10, 20];//количество рабочих в зависимости от уровня
    if (size_working_lim == 3) return 0;

    if (lim_workers[t] <= person.peopls_size) {
        size_working_lim = 0;
        let size_img = document.getElementsByClassName('town_hall_element_messeg_hire_img');
        for (let i = 0; i < size_img.length; i++) {
            document.getElementsByClassName('town_hall_element_messeg_hire_img')[i].remove();
            temp_arr_working.pop();
        }
        return 0;
    } else {

        let i = size_working_lim;
        craft__working(i);
        document.getElementsByClassName("town_hall_element__people__full")[0].innerHTML += `<img class="town_hall_element_messeg_hire_img" src="img/person/working_${temp_arr_working[i].img}.png" alt="photo">`;
        size_working_lim++;
    }
}, 60000);

//выплаты рабочим
let payouts_working = setInterval(() => {
    if (person.peopls_size != 0) {
        let salary = 0;
        for (let i = 0; i < arr_working.length; i++) {
            salary += arr_working[i].salary;
        }
        if (person.money >= salary) {
            person.money -= salary;
            document.getElementsByClassName('header_game__resources_money__info')[0].innerHTML = person.money;
        } else {
            arr_working = [];
            person.workin = arr_working;
            person.peopls_size = 0;
            document.getElementsByClassName('header_game__resources_people__info')[0].innerHTML = person.peopls_size;
        };
    };
}, 600000);

//добыча
let mining_working = setInterval(() => {
    if (person.peopls_size != 0) {
        for (let i = 0; i < arr_working.length; i++) {
            mineral_mining();
        };
    };
}, 60000);

let town_hall_icon_scroll = 0;
//событие прокрутки
document.getElementsByClassName('town_hall_element__arrow_infastr')[0].onclick = () => {
    if (town_hall_icon_scroll < 0) {
        town_hall_icon_scroll += 190;
        document.getElementById('town_hall_element__scroll__infastr').style.marginLeft = town_hall_icon_scroll + 'px';
    };
};
document.getElementsByClassName('town_hall_element__arrow_infastr')[1].onclick = () => {
    if (town_hall_icon_scroll >= -1 * 190) {
        town_hall_icon_scroll -= 190;
        document.getElementById('town_hall_element__scroll__infastr').style.marginLeft = town_hall_icon_scroll + 'px'
    };
};

//закрытие окна 
document.querySelector('.town_hall_close').onclick = () => {
    document.getElementById('town_hall_window').style.display = "none";//переводим состояние окна в none
    document.getElementsByClassName('town_hall_element_infastr')[0].innerHTML = "";//чистим окно склада
    document.getElementsByClassName('town_hall_element_messeg')[0].innerHTML = "";//чистим окно склада
    town_hall_icon_scroll = 0;


    let icon_content = document.getElementsByClassName('icon_content');
    let icon1 = document.getElementById('icon1');
    let icon2 = document.getElementById('icon2');
    icon1.classList.add('whiteborder');
    icon2.classList.remove('whiteborder');
    icon_content[0].classList.add('show');
    icon_content[1].classList.remove('show');
    icon_content[1].classList.remove('show');
    icon_content[0].classList.add('show');

};