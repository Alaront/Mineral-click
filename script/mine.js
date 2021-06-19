//----Mine----\\
//добыча минералов
//функция добычи 
let i_mineral_mine = 0;
let mineral_mining = (flag) => {
    let level_mine = person.building[0];

    //звук добычи
    soundClick(flag, './aud/mine.mp3')
    
    //генерация размещения иконок
    let getRandPosition = () => {
        document.getElementsByClassName("minerals_icon")[i_mineral_mine].style.top = getRndInteger(-10, 50) + "px";
        document.getElementsByClassName("minerals_icon")[i_mineral_mine].style.left = getRndInteger(10, 100) + "px";
    }

    //при клике генерируется число, это и будет минерал. После из диапазона выбираем нужный нам минерал исходя из результата генерации
    let rand_mineral = getRndInteger(0, 100);

    let pushElement = (str) =>{
        document.getElementsByClassName('minerals')[0].innerHTML += `<img class="minerals_icon" src="img/minerals/rez/ore/${str}.jpg" alt="icon">`;
        getRandPosition(); //вызов функции размещения
    }

    switch (level_mine) {
        case 1:
            if (0 <= rand_mineral && rand_mineral <= 70) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++; //повышение количества минералов
            } else {
                pushElement('iron');

                mineral_object_ore.iron.quantity++; //повышение количества минералов
            }
            break
        case 2:
            if (0 <= rand_mineral && rand_mineral <= 25) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (25 < rand_mineral && rand_mineral <= 60) {
                pushElement('coal');
                
                mineral_object_ore.coal.quantity++;
            } else {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            }
            break
        case 3://///////////////////
            if (0 <= rand_mineral && rand_mineral <= 20) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (20 < rand_mineral && rand_mineral <= 50) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 80) {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 90) {
                pushElement('aluminum');

                mineral_object_ore.aluminum.quantity++;
            } else {
                pushElement('silver');

                mineral_object_ore.silver.quantity++;
            }
            break
        case 4:
            if (0 <= rand_mineral && rand_mineral <= 14) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (14 < rand_mineral && rand_mineral <= 39) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++;
            } else if (39 < rand_mineral && rand_mineral <= 49) {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            } else if (49 < rand_mineral && rand_mineral <= 69) {
                pushElement('aluminum');

                mineral_object_ore.aluminum.quantity++;
            } else if (69 < rand_mineral && rand_mineral <= 89) {
                pushElement('silver');

                mineral_object_ore.silver.quantity++;
            } else {
                pushElement('ruby');

                mineral_object_ore.ruby.quantity++;
            }
            break
        case 5:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 30) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++;
            } else if (30 < rand_mineral && rand_mineral <= 50) {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 60) {
                pushElement('aluminum');

                mineral_object_ore.aluminum.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 80) {
                pushElement('silver');

                mineral_object_ore.silver.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 87) {
                pushElement('ruby');

                mineral_object_ore.ruby.quantity++;
            } else {
                pushElement('copper');

                mineral_object_ore.copper.quantity++;
            }
            break
        case 6:
            if (0 <= rand_mineral && rand_mineral <= 15) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (15 < rand_mineral && rand_mineral <= 35) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++;
            } else if (35 < rand_mineral && rand_mineral <= 55) {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            } else if (55 < rand_mineral && rand_mineral <= 60) {
                pushElement('aluminum');

                mineral_object_ore.aluminum.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 75) {
                pushElement('silver');

                mineral_object_ore.silver.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 82) {
                pushElement('ruby');

                mineral_object_ore.ruby.quantity++
            } else if (82 < rand_mineral && rand_mineral <= 92) {
                pushElement('copper');

                mineral_object_ore.copper.quantity++;
            } else {
                pushElement('gold');

                mineral_object_ore.gold.quantity++;
            }
            break
        case 7:
            if (0 <= rand_mineral && rand_mineral <= 15) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (15 < rand_mineral && rand_mineral <= 30) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++;
            } else if (30 < rand_mineral && rand_mineral <= 50) {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 60) {
                pushElement('aluminum');

                mineral_object_ore.aluminum.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 75) {
                pushElement('silver');

                mineral_object_ore.silver.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 80) {
                pushElement('ruby');

                mineral_object_ore.ruby.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 90) {
                pushElement('copper');

                mineral_object_ore.copper.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                pushElement('gold');

                mineral_object_ore.gold.quantity++;
            } else {
                pushElement('dirium');

                mineral_object_ore.dirium.quantity++;
            }
            break
        case 8:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 30) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++;
            } else if (30 < rand_mineral && rand_mineral <= 45) {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            } else if (45 < rand_mineral && rand_mineral <= 55) {
                pushElement('aluminum');

                mineral_object_ore.aluminum.quantity++;
            } else if (55 < rand_mineral && rand_mineral <= 70) {
                pushElement('silver');

                mineral_object_ore.silver.quantity++;
            } else if (70 < rand_mineral && rand_mineral <= 75) {
                pushElement('ruby');

                mineral_object_ore.ruby.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 85) {
                pushElement('copper');

                mineral_object_ore.copper.quantity++;
            } else if (85 < rand_mineral && rand_mineral <= 90) {
                pushElement('gold');

                mineral_object_ore.gold.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                pushElement('dirium');

                mineral_object_ore.dirium.quantity++;
            } else {
                pushElement('fire_drop');

                mineral_object_ore.fire_drop.quantity++;
            }
            break
        case 9:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                pushElement('tin');

                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 25) {
                pushElement('coal');

                mineral_object_ore.coal.quantity++;
            } else if (25 < rand_mineral && rand_mineral <= 40) {
                pushElement('iron');

                mineral_object_ore.iron.quantity++;
            } else if (40 < rand_mineral && rand_mineral <= 50) {
                pushElement('aluminum');

                mineral_object_ore.aluminum.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 65) {
                pushElement('silver');

                mineral_object_ore.silver.quantity++;
            } else if (65 < rand_mineral && rand_mineral <= 70) {
                pushElement('ruby');

                mineral_object_ore.ruby.quantity++;
            } else if (70 < rand_mineral && rand_mineral <= 80) {
                pushElement('copper');

                mineral_object_ore.copper.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 85) {
                pushElement('gold');

                mineral_object_ore.gold.quantity++;
            } else if (85 < rand_mineral && rand_mineral <= 90) {
                pushElement('dirium');
                
                mineral_object_ore.dirium.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                pushElement('fire_drop');

                mineral_object_ore.fire_drop.quantity++;
            } else {
                pushElement('aleronium');
                
                mineral_object_ore.aleronium.quantity++;
            }
            break
        case 10:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                pushElement('tin');
                
                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 25) {
                pushElement('coal');
                
                mineral_object_ore.coal.quantity++;
            } else if (25 < rand_mineral && rand_mineral <= 40) {
                pushElement('iron');
                
                mineral_object_ore.iron.quantity++;
            } else if (40 < rand_mineral && rand_mineral <= 50) {
                pushElement('aluminum');
                
                mineral_object_ore.aluminum.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 60) {
                pushElement('silver');
                
                mineral_object_ore.silver.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 65) {
                pushElement('ruby');
                
                mineral_object_ore.ruby.quantity++;
            } else if (65 < rand_mineral && rand_mineral <= 75) {
                pushElement('copper');
                
                mineral_object_ore.copper.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 80) {
                pushElement('gold');
                
                mineral_object_ore.gold.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 85) {
                pushElement('dirium');
                
                mineral_object_ore.dirium.quantity++;
            } else if (85 < rand_mineral && rand_mineral <= 90) {
                pushElement('fire_drop');
                
                mineral_object_ore.fire_drop.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                pushElement('aleronium');
                
                mineral_object_ore.aleronium.quantity++;
            } else {
                pushElement('dvurium');
                
                mineral_object_ore.dvurium.quantity++;
            }
            break

    }

    //удаление объекта из DOM
    //Запускаем асинхронную функцию и "откладываем" удаление на 1000ms помещая её в WebApis
    setTimeout(() => {
        document.getElementsByClassName("minerals_icon")[0].remove();
        i_mineral_mine--;//если что-то удалили, значит надо понизить переменную для новых иконок
    }, 1000);

    i_mineral_mine++;
}
//вызов функция добычи
document.getElementsByClassName('building_blok')[0].onclick = () => {
    mineral_mining(true);
};
