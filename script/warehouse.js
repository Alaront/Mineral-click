//------CKLAD------\\
//открытие окна склада
let quantity_in_stock = 0
document.getElementsByClassName('building_blok')[4].onclick = () => {
    document.getElementsByClassName('warehouse_element__icon')[0].insertAdjacentHTML('afterbegin', '<div id="warehouse_element__scroll"></div>');//это чтобы скролить
    document.getElementById('warehouse_window').style.display = "block";//переводим в блок

    //создание блока с минералом
    const keys = Object.keys(mineral_object_ore); //как бы создаём массив ключей
    for (const key of keys) {
        if (mineral_object_ore[key].quantity > 0) {
            quantity_in_stock++; //повышаем для количества
            document.getElementsByClassName('warehouse_element__icon')[0].innerHTML += `<div class='warehouse_element__icon__${key}'>
            <img src="img/minerals/rez/ore/${key}.jpg" alt="photo">
            <p>Название: ${mineral_object_ore[key].name}</p>
            <p>Состояние: ${mineral_object_ore[key].state}</p>
            <p class="warehouse_element__icon__quantitys__${key}">Количество: ${mineral_object_ore[key].quantity}</p>
            <p>Цена: ${mineral_object_ore[key].price}</p>
            <input class="warehouse_element__icon__pole__${key}" type="text" placeholder="Сколько">
            <button class="warehouse_element__icon__button__${key}">Продать</button>
            </div>`;
        };
    };

    const block_key = Object.keys(mineral_object_ingot);
    for (const key of block_key) {
        if (mineral_object_ingot[key].quantity > 0) {
            quantity_in_stock++;
            document.getElementsByClassName('warehouse_element__icon')[0].innerHTML += `<div class='warehouse_element__icon__ingot_${key}'>
            <img src="img/minerals/rez/ingots/${key}.jpg" alt="photo">
            <p>Название: ${mineral_object_ingot[key].name}</p>
            <p>Состояние: ${mineral_object_ingot[key].state}</p>
            <p class="warehouse_element__icon__quantitys__ignot_${key}">Количество: ${mineral_object_ingot[key].quantity}</p>
            <p>Цена: ${mineral_object_ingot[key].price}</p>
            <input class="warehouse_element__icon__pole__ignot_${key}" type="text" placeholder="Сколько">
            <button class="warehouse_element__icon__button__ignot_${key}">Продать</button>
            </div>`;
        };
    };

    const key_tools = Object.keys(tools_object);
    for (const key of key_tools) {
        if (tools_object[key].quantity > 0) {
            quantity_in_stock++;
            document.getElementsByClassName('warehouse_element__icon')[0].innerHTML += `<div class='warehouse_element__icon__tools_${key}'>
            <img src="img/tools/${key}.jpg" alt="photo">
            <p>Название: ${tools_object[key].name}</p>
            <p class="warehouse_element__icon__quantitys__tools_${key}">Количество: ${tools_object[key].quantity}</p>
            <p>Цена: ${tools_object[key].price}</p>
            <input class="warehouse_element__icon__pole__tools_${key}" type="text" placeholder="Сколько">
            <button class="warehouse_element__icon__button__tools_${key}">Продать</button>
            </div>`;
        };
    };

    //вешаем событие продажи
    for (const key of keys) {
        if (mineral_object_ore[key].quantity > 0) {
            document.getElementsByClassName(`warehouse_element__icon__button__${key}`)[0].onclick = () => {
                let mineral_value = document.getElementsByClassName(`warehouse_element__icon__pole__${key}`)[0].value;
                mineral_value = parseInt(mineral_value);

                //условие продажи
                if (mineral_object_ore[key].quantity >= mineral_value) {
                    mineral_object_ore[key].quantity -= mineral_value;//уменьшаем количество на складе
                    person.money += mineral_value * mineral_object_ore[key].price;//stonks 
                    document.getElementsByClassName(`warehouse_element__icon__quantitys__${key}`)[0].innerHTML = `Количество: ${mineral_object_ore[key].quantity}`;//обновленное количество
                    document.getElementsByClassName(`warehouse_element__icon__pole__${key}`)[0].value = ""; //обнулили содержимое строки

                    document.getElementsByClassName('header_game__resources_money__info')[0].innerHTML = person.money; //обновили казну
                } else {
                    document.getElementsByClassName(`warehouse_element__icon__${key}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для продажи</p></div`;
                    //удаление объекта из DOM
                    //Запускаем асинхронную функцию и "откладываем" удаление на 1000ms помещая её в WebApis
                    setTimeout(() => {
                        document.getElementById("warehouse_element__icon__error").remove();
                    }, 1000);
                };
            };
        };
    };

    for (const key of block_key) {
        if (mineral_object_ingot[key].quantity > 0) {
            document.getElementsByClassName(`warehouse_element__icon__button__ignot_${key}`)[0].onclick = () => {
                let mineral_value = document.getElementsByClassName(`warehouse_element__icon__pole__ignot_${key}`)[0].value;
                mineral_value = parseInt(mineral_value);

                //условие продажи
                if (mineral_object_ingot[key].quantity >= mineral_value) {
                    mineral_object_ingot[key].quantity -= mineral_value;//уменьшаем количество на складе
                    person.money += mineral_value * mineral_object_ingot[key].price;//stonks 
                    document.getElementsByClassName(`warehouse_element__icon__quantitys__ignot_${key}`)[0].innerHTML = `Количество: ${mineral_object_ingot[key].quantity}`;//обновленное количество
                    document.getElementsByClassName(`warehouse_element__icon__pole__ignot_${key}`)[0].value = ""; //обнулили содержимое строки

                    document.getElementsByClassName('header_game__resources_money__info')[0].innerHTML = person.money; //обновили казну
                } else {
                    document.getElementsByClassName(`warehouse_element__icon__ingot_${key}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для продажи</p></div`;
                    //удаление объекта из DOM
                    //Запускаем асинхронную функцию и "откладываем" удаление на 1000ms помещая её в WebApis
                    setTimeout(() => {
                        document.getElementById("warehouse_element__icon__error").remove();
                    }, 1000);
                };
            };
        };
    };

    for (const key of key_tools) {
        if (tools_object[key].quantity > 0) {
            document.getElementsByClassName(`warehouse_element__icon__button__tools_${key}`)[0].onclick = () => {
                let mineral_value = document.getElementsByClassName(`warehouse_element__icon__pole__tools_${key}`)[0].value;
                mineral_value = parseInt(mineral_value);

                //условие продажи
                if (tools_object[key].quantity >= mineral_value) {
                    tools_object[key].quantity -= mineral_value;//уменьшаем количество на складе
                    person.money += mineral_value * tools_object[key].price;//stonks 
                    document.getElementsByClassName(`warehouse_element__icon__quantitys__tools_${key}`)[0].innerHTML = `Количество: ${tools_object[key].quantity}`;//обновленное количество
                    document.getElementsByClassName(`warehouse_element__icon__pole__tools_${key}`)[0].value = ""; //обнулили содержимое строки

                    document.getElementsByClassName('header_game__resources_money__info')[0].innerHTML = person.money; //обновили казну
                } else {
                    document.getElementsByClassName(`warehouse_element__icon__tools_${key}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для продажи</p></div`;
                    //удаление объекта из DOM
                    //Запускаем асинхронную функцию и "откладываем" удаление на 1000ms помещая её в WebApis
                    setTimeout(() => {
                        document.getElementById("warehouse_element__icon__error").remove()
                    }, 1000);
                };
            };
        };
    };

};

//событие прокрутки склада
let warehouse_icon_scroll = 0;
document.getElementsByClassName('warehouse_element__arrow')[0].onclick = () => {
    if (warehouse_icon_scroll < 0) {
        warehouse_icon_scroll += 150;
        document.getElementById('warehouse_element__scroll').style.marginLeft = warehouse_icon_scroll + 'px';
    }
};
document.getElementsByClassName('warehouse_element__arrow')[1].onclick = () => {
    if (warehouse_icon_scroll >= -1 * ((quantity_in_stock) * 170)) {
        warehouse_icon_scroll -= 150;
        document.getElementById('warehouse_element__scroll').style.marginLeft = warehouse_icon_scroll + 'px';
    }
};

//закрытие окна склада
document.querySelector('.widow_close').onclick = () => {
    document.getElementById('warehouse_window').style.display = "none";//переводим состояние окна в none
    document.getElementsByClassName('warehouse_element__icon')[0].innerHTML = "";//чистим окно склада
    warehouse_icon_scroll = 0;
    quantity_in_stock = 0;//обнуление

};