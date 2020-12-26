//----Mine----\\
//добыча минералов
//функция добычи 
let i_mineral_mine = 0;
let mineral_mining = () => {
    let level_mine = person.building[0];
    const engine = new Audio('./aud/click.mp3');
    engine.play()
    //генерация размещения иконок
    let getRandPosition = () => {
        document.getElementsByClassName("minerals_icon")[i_mineral_mine].style.top = getRndInteger(-10, 50) + "px";
        document.getElementsByClassName("minerals_icon")[i_mineral_mine].style.left = getRndInteger(10, 100) + "px";
    }

    //при клике генерируется число, это и будет минерал. После из диапазона выбираем нужный нам минерал исходя из результата генерации
    let rand_mineral = getRndInteger(0, 100);


    switch (level_mine) {
        case 1:
            if (0 <= rand_mineral && rand_mineral <= 70) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++; //повышение количества минералов
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition();//вызов функции размещения
                mineral_object_ore.iron.quantity++; //повышение количества минералов
            }
            break
        case 2:
            if (0 <= rand_mineral && rand_mineral <= 25) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition() //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (25 < rand_mineral && rand_mineral <= 60) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            }
            break
        case 3:
            if (0 <= rand_mineral && rand_mineral <= 20) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (20 < rand_mineral && rand_mineral <= 50) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 80) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 90) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            }
            break
        case 4:
            if (0 <= rand_mineral && rand_mineral <= 14) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (14 < rand_mineral && rand_mineral <= 39) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (39 < rand_mineral && rand_mineral <= 49) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (49 < rand_mineral && rand_mineral <= 69) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else if (69 < rand_mineral && rand_mineral <= 89) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/ruby.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.ruby.quantity++;
            }
            break
        case 5:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 30) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (30 < rand_mineral && rand_mineral <= 50) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 60) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 80) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 87) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/ruby.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.ruby.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/copper.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.copper.quantity++;
            }
            break
        case 6:
            if (0 <= rand_mineral && rand_mineral <= 15) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition();//вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (15 < rand_mineral && rand_mineral <= 35) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (35 < rand_mineral && rand_mineral <= 55) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (55 < rand_mineral && rand_mineral <= 60) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 75) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 82) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/ruby.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.ruby.quantity++
            } else if (82 < rand_mineral && rand_mineral <= 92) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/copper.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.copper.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/gold.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.gold.quantity++;
            }
            break
        case 7:
            if (0 <= rand_mineral && rand_mineral <= 15) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (15 < rand_mineral && rand_mineral <= 30) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (30 < rand_mineral && rand_mineral <= 50) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 60) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 75) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 80) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/ruby.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.ruby.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 90) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/copper.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.copper.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/gold.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.gold.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/dirium.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.dirium.quantity++;
            }
            break
        case 8:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 30) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (30 < rand_mineral && rand_mineral <= 45) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (45 < rand_mineral && rand_mineral <= 55) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else if (55 < rand_mineral && rand_mineral <= 70) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            } else if (70 < rand_mineral && rand_mineral <= 75) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/ruby.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.ruby.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 85) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/copper.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.copper.quantity++;
            } else if (85 < rand_mineral && rand_mineral <= 90) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/gold.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.gold.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/dirium.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.dirium.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/fire_drop.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.fire_drop.quantity++;
            }
            break
        case 9:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 25) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (25 < rand_mineral && rand_mineral <= 40) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (40 < rand_mineral && rand_mineral <= 50) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 65) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            } else if (65 < rand_mineral && rand_mineral <= 70) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/ruby.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.ruby.quantity++;
            } else if (70 < rand_mineral && rand_mineral <= 80) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/copper.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.copper.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 85) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/gold.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.gold.quantity++;
            } else if (85 < rand_mineral && rand_mineral <= 90) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/dirium.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.dirium.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/fire_drop.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.fire_drop.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aleronium.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aleronium.quantity++;
            }
            break
        case 10:
            if (0 <= rand_mineral && rand_mineral <= 10) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/tin.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.tin.quantity++;
            } else if (10 < rand_mineral && rand_mineral <= 25) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/coal.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.coal.quantity++;
            } else if (25 < rand_mineral && rand_mineral <= 40) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/iron.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.iron.quantity++;
            } else if (40 < rand_mineral && rand_mineral <= 50) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aluminum.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aluminum.quantity++;
            } else if (50 < rand_mineral && rand_mineral <= 60) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/silver.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.silver.quantity++;
            } else if (60 < rand_mineral && rand_mineral <= 65) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/ruby.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.ruby.quantity++;
            } else if (65 < rand_mineral && rand_mineral <= 75) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/copper.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.copper.quantity++;
            } else if (75 < rand_mineral && rand_mineral <= 80) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/gold.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.gold.quantity++;
            } else if (80 < rand_mineral && rand_mineral <= 85) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/dirium.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.dirium.quantity++;
            } else if (85 < rand_mineral && rand_mineral <= 90) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/fire_drop.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.fire_drop.quantity++;
            } else if (90 < rand_mineral && rand_mineral <= 95) {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/aleronium.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
                mineral_object_ore.aleronium.quantity++;
            } else {
                document.getElementsByClassName('minerals')[0].innerHTML += '<img class="minerals_icon" src="img/minerals/rez/ore/dvurium.jpg" alt="icon">';
                getRandPosition(); //вызов функции размещения
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
    mineral_mining();
};
