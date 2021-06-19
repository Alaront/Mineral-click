let arr_working = []; //массив рабочие
let arr_building = [1, 1, 1, 1, 1, 1]; //массив уровни зданий
//  где, 
//  arr_building[0] - Шахта
//  arr_building[1] - Кузница
//  arr_building[2] - Лаборатория
//  arr_building[3] - Торговая гильдия
//  arr_building[4] - Склад
//  arr_building[5] - Дом
//

//объект склад минералов руда
let mineral_object_ore = { 
    aluminum: {
        name: "Алюминий",
        price: 35,
        state: "Руда",
        quantity: 0
    },
    aleronium: {
        name: "Алерониум",
        price: 100,
        state: "Руда",
        quantity: 0
    },
    coal: {
        name: "Уголь",
        price: 5,
        state: "Руда",
        quantity: 0
    },
    copper: {
        name: "Медь",
        price: 48,
        state: "Руда",
        quantity: 0
    },
    dirium: {
        name: "Дириум",
        price: 500,
        state: "Руда",
        quantity: 0
    },
    dvurium: {
        name: "Двариум",
        price: 70,
        state: "Руда",
        quantity: 0
    },
    fire_drop: {
        name: "Огненная Капля",
        price: 80,
        state: "Руда",
        quantity: 0
    },
    gold: {
        name: "Золото",
        price: 53,
        state: "Руда",
        quantity: 0
    },
    iron: {
        name: "Железо",
        price: 15,
        state: "Руда",
        quantity: 0
    },
    ruby: {
        name: "Рубин",
        price: 45,
        state: "Руда",
        quantity: 0
    },
    silver: {
        name: "Серебро",
        price: 30,
        state: "Руда",
        quantity: 0
    },
    tin: {
        name: "Олово",
        price: 20,
        state: "Руда",
        quantity: 0
    }
};

//объект склад минералов слиток
let mineral_object_ingot = {
    aleronium: {
        name: "Алерониум",
        price: 800,
        state: "Слиток",
        quantity: 0
    },
    copper: {
        name: "Медь",
        price: 300,
        state: "Слиток",
        quantity: 0
    },
    aluminum: {
        name: "Алюминий",
        price: 170,
        state: "Слиток",
        quantity: 0
    },
    fire_drop: {
        name: "Огненная Капля",
        price: 300,
        state: "Минерал",
        quantity: 0
    },
    gold: {
        name: "Золото",
        price: 150,
        state: "Слиток",
        quantity: 0
    },
    iron: {
        name: "Железо",
        price: 50,
        state: "Слиток",
        quantity: 0
    },
    tin: {
        name: "Олово",
        price: 150,
        state: "Слиток",
        quantity: 0
    },
    dirium: {
        name: "Дириум",
        price: 200,
        state: "Слиток",
        quantity: 0
    },
    dvurium: {
        name: "Двариум",
        price: 300,
        state: "Слиток",
        quantity: 0
    }
};

//объект склад инструменты
let tools_object = {
    backpack_1: {
        name: 'Походный рюкзак',
        price: 250,
        quantity: 0
    },
    backpack_2: {
        name: 'Походный рюкзак исследователя',
        price: 800,
        quantity: 0
    },
    backpack_3: {
        name: 'Рюкзак путешественника',
        price: 1000,
        quantity: 0
    },
    pickaxe_1: {
        name: 'Железная кирка',
        price: 150,
        quantity: 0
    },
    pickaxe_2: {
        name: 'Кирка из дириума',
        price: 2000,
        quantity: 0
    },
    pickaxe_3: {
        name: 'Кирка из двариума',
        price: 250,
        quantity: 0
    },
    sword_1: {
        name: 'Железный меч',
        price: 200,
        quantity: 0
    },
    sword_2: {
        name: 'Меч из дириума',
        price: 1800,
        quantity: 0
    },
    sword_3: {
        name: 'Меч из двариума',
        price: 500,
        quantity: 0
    },
    armor_1: {
        name: 'Доспех путешественника',
        price: 200,
        quantity: 0
    },
    armor_2: {
        name: 'Усиленный доспех путешественника',
        price: 250,
        quantity: 0
    },
    armor_3: {
        name: 'Доспехи рекрута',
        price: 300,
        quantity: 0
    },
    armor_4: {
        name: 'Доспехи солдата',
        price: 100,
        quantity: 0
    },
    armor_5: {
        name: 'Генеральский доспех',
        price: 500,
        quantity: 0
    },
    armor_6: {
        name: 'Доспех аристократа',
        price: 800,
        quantity: 0
    },
    armor_8: {
        name: 'Королевский доспех',
        price: 1500,
        quantity: 0
    },
    skin: {
        name: 'Кожа буйвола',
        price: 100,
        quantity: 0
    },
    wood: {
        name: 'Древесина',
        price: 50,
        quantity: 0
    },
    bones: {
        name: 'Кости',
        price: 70,
        quantity: 0
    },
    wool: {
        name: 'Шерсть',
        price: 60,
        quantity: 0
    }

};

let person = { //объект игрока
    name: "",
    training: false,
    workin: arr_working,
    building: arr_building,
    money: 0,
    science: 0,
    peopls_size: 0
}

//объект настроек
let settings = {
    flagMainSound: false,
    flagMainSoundVolume: 6,

    flagClickSound: true,
    flagClickSoundVolume: 6
}

//Если игра была сохранена, из localStorage возьмём данные и подставим куда нужно
if (localStorage.getItem('person_save') != null) {
    let temp_save = localStorage.getItem('person_save');
    let object_save = JSON.parse(temp_save);

    arr_working = object_save.save_arr_working;
    arr_building = object_save.save_arr_building;
    mineral_object_ore = object_save.save_mineral_object_ore;
    mineral_object_ingot = object_save.save_mineral_object_ingot;
    tools_object = object_save.save_tools_object;
    person = object_save.save_person;
    settings = object_save.save_settings;

    person.workin = arr_working;
    person.building = arr_building;
}

////////------------------------
//Функция смены спрайта здания в зависимости от уровня
let building_changes = (i) => {//i - это индекс здания в массиве
    if (i == 0) {
        let temp_lvl = person.building[i];
        let building = document.getElementById('mine');
        if (temp_lvl == 2) {
            building.outerHTML = '<img id="mine" src="img/building/mine/building_2.png" alt="photo">';
        } else if (temp_lvl == 3) {
            building.outerHTML = '<img id="mine" src="img/building/mine/building_3.png" alt="photo">';
        } else if (temp_lvl == 4) {
            building.outerHTML = '<img id="mine" src="img/building/mine/building_4.png" alt="photo">';
        } else if (temp_lvl == 5 || temp_lvl == 6 || temp_lvl == 7) {
            building.outerHTML = '<img id="mine" src="img/building/mine/building_5.png" alt="photo">';
        } else if (temp_lvl == 8 || temp_lvl == 9) {
            building.outerHTML = '<img id="mine" src="img/building/mine/building_8.png" alt="photo">';
        } else if (temp_lvl == 10) {
            building.outerHTML = '<img id="mine" src="img/building/mine/building_10.png" alt="photo">';
        };
    } else if (i == 1) {
        let temp_lvl = person.building[i];
        let building = document.getElementById('blacksmith');
        if (temp_lvl >= 4) {
            building.outerHTML = '<img id="blacksmith" src="img/building/blacksmith/building_4.png" alt="photo">';
        };
    } else if (i == 2) {
        let temp_lvl = person.building[i];
        let building = document.getElementById('laboratory');
        if (temp_lvl >= 5) {
            building.outerHTML = '<img id="laboratory" src="img/building/laboratory/building_5.png" style="width: 70%" alt="photo">';
        };
    } else if (i == 4) {
        let temp_lvl = person.building[i];
        let building = document.getElementById('warehouse');
        if (temp_lvl >= 3) {
            building.outerHTML = '<img id="warehouse" src="img/building/warehouse/building_3.png" alt="photo">';
        };
    } else if (i == 5) {
        let temp_lvl = person.building[i];
        let building = document.getElementById('house');
        if (temp_lvl == 2) {
            building.outerHTML = '<img id="house" src="img/building/house/building_2.png" alt="photo">';
        } else if (temp_lvl >= 3) {
            building.outerHTML = '<img id="house" src="img/building/house/building_3.png" alt="photo">';
        };
    };
};

for (let i = 0; i < 8; i++) {
    building_changes(i);
};

//отрисовка настроек
settings.flagMainSound = false; 
settings.flagClickSound = false;
pointSound();
pointSoundClick();

//Функция количества денег, науки и рабочих
let info_header_changes = () => {
    document.getElementsByClassName('header_game__resources_money__info')[0].innerHTML = person.money;
    document.getElementsByClassName('header_game__resources_science__info')[0].innerHTML = person.science;
    document.getElementsByClassName('header_game__resources_people__info')[0].innerHTML = person.peopls_size;
    document.getElementsByClassName('header_game__resources_name__info')[0].innerHTML = person.name;
}
info_header_changes();

//объект рецепты
const recipes_object = {
    backpack: {
        level_forge_2: {
            name: 'Походный рюкзак',
            ingredients: 'Кожа 1Х; Шерсть Х5',
            name_img: "backpack_1",
            ingredients_map: () => {
                let map = new Map();
                map.set('skin', 1);
                map.set('wool', 5);
                return map
            }
        },
        level_forge_4: {
            name: 'Походный рюкзак исследователя',
            ingredients: 'Кожа Х3; Кости Х3',
            name_img: "backpack_2",
            ingredients_map: () => {
                let map = new Map();
                map.set('skin', 3);
                map.set('bones', 3);
                return map
            }
        },
        level_forge_7: {
            name: 'Рюкзак путешественника',
            ingredients: 'Кожа Х4; Кости Х2',
            name_img: "backpack_3",
            ingredients_map: () => {
                let map = new Map();
                map.set('skin', 4);
                map.set('bones', 2);
                return map
            }
        }
    },
    pickaxe: {
        level_forge_1: {
            name: 'Железная кирка',
            ingredients: 'Древесина Х2; Железо(сл) Х3',
            name_resours: "iron",
            name_img: "pickaxe_1",
            quantity_resours: 3
        },
        level_forge_5: {
            name: 'Кирка из дириума',
            ingredients: 'Древесина Х2; Дириум(сл) Х3',
            name_resours: "dirium",
            name_img: "pickaxe_2",
            quantity_resours: 3
        },
        level_forge_8: {
            name: 'Кирка из двариума',
            ingredients: 'Древесина Х2; Двариум(сл) Х3',
            name_resours: "dvurium",
            name_img: "pickaxe_3",
            quantity_resours: 3
        }
    },
    sword: {
        level_forge_1: {
            name: 'Железный меч',
            ingredients: 'Древесина Х1; Железо Х4',
            name_resours: "iron",
            name_img: "sword_1",
            quantity_resours: 4
        },
        level_forge_5: {
            name: 'Меч из дириума',
            ingredients: 'Древесина Х1; Дириум Х4',
            name_resours: "dirium",
            name_img: "sword_2",
            quantity_resours: 4
        },
        level_forge_8: {
            name: 'Меч из двариума',
            ingredients: 'Древесина Х1; Двариум Х4',
            name_resours: "dvurium",
            name_img: "sword_3",
            quantity_resours: 4
        }
    },
    armor: {
        level_forge_1: {
            name: 'Доспех путешественника',
            ingredients: 'Кожа Х2; Железо(сл) Х1',
            name_img: "armor_1",
            price: 100,
            ingredients_map: () => {
                let map = new Map();
                map.set('skin', 2);
                map.set('iron', 1);
                return map
            }
        },
        level_forge_2: {
            name: 'Усиленный доспех путешественника',
            ingredients: 'Кожа Х3; Железо(сл) Х2',
            name_img: "armor_2",
            price: 100,
            ingredients_map: () => {
                let map = new Map();
                map.set('skin', 3);
                map.set('iron', 2);
                return map
            }
        },
        level_forge_3: {
            name: 'Доспехи рекрута',
            ingredients: 'Олово(сл) Х1; Железо(сл) Х2; Серебро(руд) Х1',
            name_img: "armor_3",
            price: 100,
            ingredients_map: () => {
                let map = new Map();
                map.set('tin', 1);
                map.set('iron', 2);
                map.set('silver', 1);
                return map
            }
        },
        level_forge_4: {
            name: 'Доспехи солдата',
            ingredients: 'Олово(сл) Х1; Железо Х3(сл); Серебро(руд) Х3',
            name_img: "armor_4",
            price: 100,
            ingredients_map: () => {
                let map = new Map();
                map.set('tin', 1);
                map.set('iron', 3);
                map.set('silver', 3);
                return map
            }
        },
        level_forge_5: {
            name: 'Генеральский доспех',
            ingredients: 'Алюминий(сл) Х1; Железо(сл) Х3; Золото(руд) Х2 ',
            name_img: "armor_5",
            price: 100,
            ingredients_map: () => {
                let map = new Map();
                map.set('aluminum', 1);
                map.set('iron', 3);
                map.set('gold', 2);
                return map
            }
        },
        level_forge_6: {
            name: 'Доспех аристократа',
            ingredients: 'Золото Х3(сл); Огненная капля(сл) Х2; Железо(руд) Х1',
            name_img: "armor_6",
            price: 100,
            ingredients_map: () => {
                let map = new Map();
                map.set('gold', 3);
                map.set('fire_drop', 2);
                map.set('iron', 1);
                return map
            }
        },
        level_forge_8: {
            name: 'Королевский доспех',
            ingredients: 'Золото Х5(сл); Алерониум(сл) Х1; Двариум(руд) Х1',
            name_img: "armor_8",
            price: 100,
            ingredients_map: () => {
                let map = new Map();
                map.set('gold', 5);
                map.set('aleronium', 1);
                map.set('dvurium', 1);
                return map
            }
        }
    },
    ingots: {
        level_forge_1: {
            name: 'Слиток железа',
            ingredients: 'Уголь Х1; Железо Х2',
            name_resours: "iron",
            name_img: "iron",
            quantity_resours: 2 //то сколько требуется руды для создания слитка, а уголь всегда по 1
        },
        level_forge_2: {
            name: 'Слиток олова',
            ingredients: 'Уголь Х1; Олово Х3',
            name_resours: "tin",
            name_img: "tin",
            quantity_resours: 3
        },
        level_forge_3: {
            name: 'Слиток алюминия',
            ingredients: 'Уголь Х1; Алюминий Х3',
            name_resours: "aluminum",
            name_img: "aluminum",
            quantity_resours: 3
        },
        level_forge_4: {
            name: 'Медный слиток',
            ingredients: 'Уголь Х1; Медь Х3',
            name_resours: "copper",
            name_img: "copper",
            quantity_resours: 3
        },
        level_forge_5: {
            name: 'Слиток золота',
            ingredients: 'Уголь Х1; Золото Х2',
            name_resours: "gold",
            name_img: "gold",
            quantity_resours: 2
        },
        level_forge_6: {
            name: 'Дириумный слиток',
            ingredients: 'Уголь Х1; Дириумный Х3',
            name_resours: "dirium",
            name_img: "dirium",
            quantity_resours: 3
        },
        level_forge_7: {
            name: 'Обработанная огненная капля',
            ingredients: 'Уголь Х1; Огненная капля Х3',
            name_resours: "fire_drop",
            name_img: "fire_drop",
            quantity_resours: 3
        },
        level_forge_8: {
            name: 'Слиток алерониума',
            ingredients: 'Уголь Х1; алерониум Х4',
            name_resours: "aleronium",
            name_img: "aleronium",
            quantity_resours: 4
        },
        level_forge_9: {
            name: 'Двариумный слиток',
            ingredients: 'Уголь Х1; Двариум Х3',
            name_resours: "dvurium",
            name_img: "dvurium",
            quantity_resours: 3
        }
    }
};

//рандом
let getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
