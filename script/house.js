//------house------\\
//открытие окна
let quantity_in_house = -1;
document.getElementsByClassName('building_blok')[5].onclick = () => {
    soundClick(true)

    document.getElementsByClassName('house_element__icon')[0].insertAdjacentHTML('afterbegin', '<div id="house_element__scroll"></div>')//это чтобы скролить
    document.getElementById('house_window').style.display = "block"//переводим в блок

    for (let i = 0; i < person.peopls_size; i++) {
        quantity_in_house++;
        document.getElementsByClassName('house_element__icon')[0].innerHTML += `<div class='house_element__icon__${i}'>
            <img src="img/person/working_${person.workin[i].img}.png" alt="photo">
            <p>Имя: ${person.workin[i].name}</p>
            <p>Уровень: ${person.workin[i].lvl}</p>
            <p>Плата:${person.workin[i].salary}</p>
            <button class="warehouse_element__icon__button__${i}">Уволить</button>
        </div>`;
    };

    for (let j = 0; j < person.peopls_size; j++) {
        document.getElementsByClassName(`warehouse_element__icon__button__${j}`)[0].onclick = () => {
            soundClick(true)
            arr_working[j] = 0;
            document.getElementsByClassName(`house_element__icon__${j}`)[0].innerHTML += '<div id="house_element__icon__error"><p>Уволен</p></div';
            //удаление из массива при закрытии окна
        };
    };
};

//событие прокрутки 
let house_icon_scroll = 0;
document.getElementsByClassName('house_element__arrow')[0].onclick = () => {
    if (house_icon_scroll < 0) {
        house_icon_scroll += 150;
        document.getElementById('house_element__scroll').style.marginLeft = house_icon_scroll + 'px'
    }
};

document.getElementsByClassName('house_element__arrow')[1].onclick = () => {
    if (house_icon_scroll >= -1 * ((quantity_in_house) * 170)) {
        house_icon_scroll -= 150;
        document.getElementById('house_element__scroll').style.marginLeft = house_icon_scroll + 'px'
    }
};

//закрытие окна 
document.querySelector('.house_close').onclick = () => {
    soundClick(true)

    document.getElementById('house_window').style.display = "none"//переводим состояние окна в none
    document.getElementsByClassName('house_element__icon')[0].innerHTML = ""//чистим окно склада
    house_icon_scroll = 0;
    quantity_in_house = -1;

    //удаление рабочих
    let index;
    for (let j = 0; j < person.peopls_size; j++) {
        if (arr_working[j] == 0) {
            index = j;
            arr_working.splice(index, 1);
            j--;
            person.peopls_size--;
            document.getElementsByClassName('header_game__resources_people__info')[0].innerHTML = person.peopls_size;
            soundClick(true);
        }
    }
};