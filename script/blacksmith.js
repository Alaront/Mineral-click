//----kyzna-----\\
let quantity_in_building = 0;
document.getElementsByClassName('building_blok')[1].onclick = () => {
    const engine = new Audio('./aud/click.mp3');
    engine.play()

    document.getElementsByClassName('blacksmith_element__icon')[0].insertAdjacentHTML('afterbegin', '<div id="building_element__scroll"></div>'); //это чтобы скролить
    document.getElementById('blacksmith_window').style.display = "block"; //переводим в блок

    //функции блоков с крафтом
    let craft = "";

    //icon blacksmith
    const ingots_arr = Object.keys(recipes_object.ingots);
    let ingots_craft = (i) => {
        craft = `<div class='blacksmith_element__icon__ingots_${recipes_object.ingots[ingots_arr[i]].name_resours}'>
        <img src="img/minerals/rez/ingots/${recipes_object.ingots[ingots_arr[i]].name_img}.jpg" alt="photo">
        <p>${recipes_object.ingots[ingots_arr[i]].name}</p>
        <p>Составная часть: <br>${recipes_object.ingots[ingots_arr[i]].ingredients}</p>
        <input class="blacksmith_element__icon__pole__ingots_${recipes_object.ingots[ingots_arr[i]].name_resours}" type="text" placeholder="Сколько">
        <button class="blacksmith_element__icon__button__ingots_${recipes_object.ingots[ingots_arr[i]].name_resours}">Произвести</button>
        </div>`;
    };
    //icon pickaxe
    const pickaxe_arr = Object.keys(recipes_object.pickaxe);
    let pickaxe_craft = (i) => {
        craft = `<div class='blacksmith_element__icon__${recipes_object.pickaxe[pickaxe_arr[i]].name_img}'>
        <img src="img/tools/${recipes_object.pickaxe[pickaxe_arr[i]].name_img}.jpg" alt="photo">
        <p>${recipes_object.pickaxe[pickaxe_arr[i]].name}</p>
        <p>Составная часть: <br>${recipes_object.pickaxe[pickaxe_arr[i]].ingredients}</p>
        <input class="blacksmith_element__icon__pole__${recipes_object.pickaxe[pickaxe_arr[i]].name_img}" type="text" placeholder="Сколько">
        <button class="blacksmith_element__icon__button__${recipes_object.pickaxe[pickaxe_arr[i]].name_img}">Произвести</button>
        </div>`;
    };
    //icon sword
    const sword_arr = Object.keys(recipes_object.sword);
    let sword_craft = (i) => {
        craft = `<div class='blacksmith_element__icon__${recipes_object.sword[sword_arr[i]].name_img}'>
        <img src="img/tools/${recipes_object.sword[sword_arr[i]].name_img}.jpg" alt="photo">
        <p>${recipes_object.sword[sword_arr[i]].name}</p>
        <p>Составная часть: <br>${recipes_object.sword[sword_arr[i]].ingredients}</p>
        <input class="blacksmith_element__icon__pole__${recipes_object.sword[sword_arr[i]].name_img}" type="text" placeholder="Сколько">
        <button class="blacksmith_element__icon__button__${recipes_object.sword[sword_arr[i]].name_img}">Произвести</button>
        </div>`;
    };
    //icon backpack
    const backpack_arr = Object.keys(recipes_object.backpack);
    let backpack_craft = (i) => {
        craft = `<div class='blacksmith_element__icon__${recipes_object.backpack[backpack_arr[i]].name_img}'>
        <img src="img/tools/${recipes_object.backpack[backpack_arr[i]].name_img}.jpg" alt="photo">
        <p>${recipes_object.backpack[backpack_arr[i]].name}</p>
        <p>Составная часть: <br>${recipes_object.backpack[backpack_arr[i]].ingredients}</p>
        <input class="blacksmith_element__icon__pole__${recipes_object.backpack[backpack_arr[i]].name_img}" type="text" placeholder="Сколько">
        <button class="blacksmith_element__icon__button__${recipes_object.backpack[backpack_arr[i]].name_img}">Произвести</button>
        </div>`;
    };
    //icon armor
    const armor_arr = Object.keys(recipes_object.armor);
    let armor_craft = (i) => {
        craft = `<div class='blacksmith_element__icon__${recipes_object.armor[armor_arr[i]].name_img}'>
        <img src="img/tools/${recipes_object.armor[armor_arr[i]].name_img}.jpg" alt="photo">
        <p>${recipes_object.armor[armor_arr[i]].name}</p>
        <p>Составная часть: <br>${recipes_object.armor[armor_arr[i]].ingredients}</p>
        <input class="blacksmith_element__icon__pole__${recipes_object.armor[armor_arr[i]].name_img}" type="text" placeholder="Сколько">
        <button class="blacksmith_element__icon__button__${recipes_object.armor[armor_arr[i]].name_img}">Произвести</button>
        </div>`;
    };

    //вывод
    let level_blacksmith = person.building[1]
    switch (level_blacksmith) {
        case 1:
            sword_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            pickaxe_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            armor_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            ingots_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;
            break
        case 2:
            sword_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            pickaxe_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++

            for (let i = 0; i <= 1; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            backpack_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            for (let i = 0; i <= 1; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };
            break
        case 3:
            sword_craft(0)
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            pickaxe_craft(0)
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            for (let i = 0; i <= 2; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            backpack_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            for (let i = 0; i <= 2; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };
            break
        case 4:
            sword_craft(0)
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            pickaxe_craft(0);
            document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
            quantity_in_building++;

            for (let i = 0; i <= 1; i++) {
                backpack_craft(i)
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 3; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 3; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };
            break
        case 5:
            for (let i = 0; i <= 1; i++) {
                sword_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 1; i++) {
                backpack_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 1; i++) {
                pickaxe_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 4; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 4; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };
            break
        case 6:
            for (let i = 0; i <= 1; i++) {
                sword_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 1; i++) {
                backpack_craft(i)
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 1; i++) {
                pickaxe_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 5; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 5; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };
            break
        case 7:
            for (let i = 0; i <= 1; i++) {
                sword_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 2; i++) {
                backpack_craft(i)
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 1; i++) {
                pickaxe_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 5; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 6; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };
            break
        case 8:
            for (let i = 0; i <= 2; i++) {
                sword_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 2; i++) {
                backpack_craft(i)
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft
                quantity_in_building++
            };

            for (let i = 0; i <= 2; i++) {
                pickaxe_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 5; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 7; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft
                quantity_in_building++;
            };
            break
        case 9:
            for (let i = 0; i <= 2; i++) {
                sword_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 2; i++) {
                backpack_craft(i)
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++
            };

            for (let i = 0; i <= 2; i++) {
                pickaxe_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 6; i++) { //цикличный вызов функция
                armor_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };

            for (let i = 0; i <= 8; i++) {
                ingots_craft(i);
                document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML += craft;
                quantity_in_building++;
            };
            break
    }


    //события создания инструментов. слитков
    let lim_i = 0;
    for (const key of ingots_arr) {
        let name_res = recipes_object.ingots[key].name_resours;
        document.getElementsByClassName(`blacksmith_element__icon__button__ingots_${name_res}`)[0].onclick = () => {

            let mineral_value = document.getElementsByClassName(`blacksmith_element__icon__pole__ingots_${name_res}`)[0].value;
            mineral_value = parseInt(mineral_value)
            if (mineral_object_ore.coal.quantity >= 1 * (mineral_value) && mineral_object_ore[name_res].quantity >= recipes_object.ingots[key].quantity_resours * (mineral_value)) {

                mineral_object_ore.coal.quantity -= mineral_value * 1;
                mineral_object_ore[name_res].quantity -= mineral_value * recipes_object.ingots[key].quantity_resours;

                mineral_object_ingot[name_res].quantity += mineral_value;
                document.getElementsByClassName(`blacksmith_element__icon__pole__ingots_${name_res}`)[0].value = "";
                const engine = new Audio('./aud/click.mp3');
                engine.play()
            } else {
                document.getElementsByClassName(`blacksmith_element__icon__button__ingots_${name_res}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для создания</p></div`;
                setTimeout(() => {
                    document.getElementById("warehouse_element__icon__error").remove();
                }, 1000);
            };
        };
        lim_i++;
        if (lim_i == level_blacksmith) break;
    }
    //кирки
    lim_i = 0;
    for (const key of pickaxe_arr) {
        let name_res = recipes_object.pickaxe[key].name_img;
        document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].onclick = () => {

            let mineral_value = document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value
            mineral_value = parseInt(mineral_value);
            if (tools_object.wood.quantity >= 2 * (mineral_value) && mineral_object_ingot[recipes_object.pickaxe[key].name_resours].quantity >= recipes_object.pickaxe[key].quantity_resours * (mineral_value)) {

                let temp = mineral_value;
                tools_object.wood.quantity -= mineral_value * 2;
                mineral_object_ingot[recipes_object.pickaxe[key].name_resours].quantity -= recipes_object.pickaxe[key].quantity_resours * temp;

                tools_object[name_res].quantity += mineral_value;
                document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value = "";
                const engine = new Audio('./aud/click.mp3');
                engine.play()
            } else {
                document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для создания</p></div`;
                setTimeout(() => {
                    document.getElementById("warehouse_element__icon__error").remove();
                }, 1000);
            }
        }
        lim_i++;
        if ((level_blacksmith == 1 || level_blacksmith == 2 || level_blacksmith == 3 || level_blacksmith == 4) && lim_i == 1) {
            break;
        } else if ((level_blacksmith == 5 || level_blacksmith == 6 || level_blacksmith == 7) && lim_i == 2) {
            break;
        } else if ((level_blacksmith == 8 || level_blacksmith == 9) && lim_i == 3) {
            break;
        }
    }
    //мечи
    lim_i = 0;
    for (const key of sword_arr) {
        let name_res = recipes_object.sword[key].name_img;
        document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].onclick = () => {

            let mineral_value = document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value;
            mineral_value = parseInt(mineral_value);
            if (tools_object.wood.quantity >= 1 * (mineral_value) && mineral_object_ingot[recipes_object.sword[key].name_resours].quantity >= recipes_object.sword[key].quantity_resours * (mineral_value)) {

                let temp = mineral_value;
                tools_object.wood.quantity -= mineral_value * 1;
                mineral_object_ingot[recipes_object.sword[key].name_resours].quantity -= recipes_object.sword[key].quantity_resours * temp;

                tools_object[name_res].quantity += mineral_value;
                document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value = "";
                const engine = new Audio('./aud/click.mp3');
                engine.play()
            } else {
                document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для создания</p></div`;
                setTimeout(() => {
                    document.getElementById("warehouse_element__icon__error").remove();
                }, 1000);
            };
        };
        lim_i++;
        if ((level_blacksmith == 1 || level_blacksmith == 2 || level_blacksmith == 3 || level_blacksmith == 4) && lim_i == 1) {
            break;
        } else if ((level_blacksmith == 5 || level_blacksmith == 6 || level_blacksmith == 7) && lim_i == 2) {
            break;
        } else if ((level_blacksmith == 8 || level_blacksmith == 9) && lim_i == 3) {
            break;
        }
    }

    lim_i = 0;
    //рюкзак
    for (const key of backpack_arr) {
        let name_res = recipes_object.backpack[key].name_img;

        if ((level_blacksmith == 2 || level_blacksmith == 3) && lim_i == 1) {
            break;
        } else if ((level_blacksmith == 4 || level_blacksmith == 5 || level_blacksmith == 6) && lim_i == 2) {
            break;
        } else if ((level_blacksmith == 7 || level_blacksmith == 8 || level_blacksmith == 9) && lim_i == 3) {
            break;
        } else if (level_blacksmith == 1) {
            break;
        }

        document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].onclick = () => {
            let temp_map = recipes_object.backpack[key].ingredients_map().keys(); //ключи МАР
            let temp_map_res = recipes_object.backpack[key].ingredients_map(); //Временная переменная для хранения МАР
            let temp_iter1 = temp_map.next().value; //Повышаем итератор 1
            let temp_iter2 = temp_map.next().value; //Повышаем итератор 2

            let mineral_value = document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value;
            mineral_value = parseInt(mineral_value);
            if (tools_object[temp_iter1].quantity >= temp_map_res.get(temp_iter1) * (mineral_value) && tools_object[temp_iter2].quantity >= temp_map_res.get(temp_iter2) * (mineral_value)) {
                let temp = mineral_value;
                tools_object[temp_iter1].quantity -= mineral_value * temp_map_res.get(temp_iter1);
                tools_object[temp_iter2].quantity -= temp * temp_map_res.get(temp_iter2);

                tools_object[name_res].quantity += mineral_value;
                document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value = "";
                const engine = new Audio('./aud/click.mp3');
                engine.play()
            } else {
                document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для создания</p></div`;
                setTimeout(() => {
                    document.getElementById("warehouse_element__icon__error").remove();
                }, 1000)
            };
        };
        lim_i++;
    };

    lim_i = 0;
    //Доспех
    for (const key of armor_arr) {
        let name_res = recipes_object.armor[key].name_img;

        document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].onclick = () => {
            let temp_map = recipes_object.armor[key].ingredients_map().keys(); //ключи МАР
            let temp_map_res = recipes_object.armor[key].ingredients_map(); //Временная переменная для хранения МАР

            if (temp_map_res.size <= 2) {
                let temp_iter1 = temp_map.next().value; //Повышаем итератор 1
                let temp_iter2 = temp_map.next().value; //Повышаем итератор 2

                let mineral_value = document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value;
                mineral_value = parseInt(mineral_value);
                if (tools_object[temp_iter1].quantity >= temp_map_res.get(temp_iter1) * (mineral_value) && mineral_object_ingot[temp_iter2].quantity >= temp_map_res.get(temp_iter2)) {
                    let temp = mineral_value;
                    tools_object[temp_iter1].quantity -= mineral_value * temp_map_res.get(temp_iter1);
                    mineral_object_ingot[temp_iter2].quantity -= temp * temp_map_res.get(temp_iter2);

                    tools_object[name_res].quantity += mineral_value;
                    document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value = "";
                    const engine = new Audio('./aud/click.mp3');
                    engine.play()
                } else {
                    document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для создания</p></div`;
                    setTimeout(() => {
                        document.getElementById("warehouse_element__icon__error").remove();
                    }, 1000);
                };
            } else {
                let temp_iter1 = temp_map.next().value; //Повышаем итератор 1
                let temp_iter2 = temp_map.next().value; //Повышаем итератор 2
                let temp_iter3 = temp_map.next().value; //Повышаем итератор 3

                let mineral_value = document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value;
                mineral_value = parseInt(mineral_value);
                if ((mineral_object_ingot[temp_iter1].quantity >= temp_map_res.get(temp_iter1) * mineral_value) && (mineral_object_ingot[temp_iter2].quantity >= temp_map_res.get(temp_iter2) * mineral_value) && (mineral_object_ore[temp_iter3].quantity >= temp_map_res.get(temp_iter3) * mineral_value)) {
                    let temp = mineral_value;
                    let temp2 = mineral_value;
                    mineral_object_ingot[temp_iter1].quantity -= mineral_value * temp_map_res.get(temp_iter1);
                    mineral_object_ingot[temp_iter2].quantity -= temp * temp_map_res.get(temp_iter2);
                    mineral_object_ore[temp_iter3].quantity -= temp2 * temp_map_res.get(temp_iter3);

                    tools_object[name_res].quantity += mineral_value;
                    document.getElementsByClassName(`blacksmith_element__icon__pole__${name_res}`)[0].value = "";
                } else {
                    document.getElementsByClassName(`blacksmith_element__icon__button__${name_res}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, у вас не хватает материалов для создания</p></div`;
                    setTimeout(() => {
                        document.getElementById("warehouse_element__icon__error").remove();
                    }, 1000);
                };
            };
        };
        lim_i++;

        if (level_blacksmith == 1 && lim_i == 1) {
            break;
        } else if (level_blacksmith == 2 && lim_i == 2) {
            break;
        } else if (level_blacksmith == 3 && lim_i == 3) {
            break;
        } else if (level_blacksmith == 4 && lim_i == 4) {
            break;
        } else if (level_blacksmith == 5 && lim_i == 5) {
            break;
        } else if (level_blacksmith == 6 && lim_i == 6) {
            break;
        } else if (level_blacksmith == 7 && lim_i == 6) {
            break;
        } else if (level_blacksmith == 8 && lim_i == 6) {
            break;
        } else if (level_blacksmith == 9 && lim_i == 9) {
            break;
        };
    };


};

//событие прокрутки Кузни
let building_element__scroll = 0;
document.getElementsByClassName('blacksmith_element__arrow')[0].onclick = () => {
    if (building_element__scroll < 0) {
        building_element__scroll += 150;
        document.getElementById('building_element__scroll').style.marginLeft = building_element__scroll + 'px';
    };
};
document.getElementsByClassName('blacksmith_element__arrow')[1].onclick = () => {
    if (building_element__scroll > -1 * ((quantity_in_building) * 150)) {
        building_element__scroll -= 150;
        document.getElementById('building_element__scroll').style.marginLeft = building_element__scroll + 'px';
    };
};

//закрытие окна Кузни
document.querySelector('.blacksmith_close').onclick = () => {
    const engine = new Audio('./aud/click.mp3');
    engine.play()
    document.getElementById('blacksmith_window').style.display = "none"; //переводим состояние окна в none
    document.getElementsByClassName('blacksmith_element__icon')[0].innerHTML = ""; //чистим окно
    building_element__scroll = 0;
    quantity_in_building = 0; //обнуление
}