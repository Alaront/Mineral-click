//----Laboratoria-----\\
let i_science_mine = 0;
document.getElementsByClassName('building_blok')[2].onclick = () => {
    let science_mine = person.building[2];
    soundClick(true);
    
    //генерация размещения иконок
    let getRandPosition = () => {
        document.getElementsByClassName("science_icon")[i_science_mine].style.top = getRndInteger(-50, 70) + "px";
        document.getElementsByClassName("science_icon")[i_science_mine].style.left = getRndInteger(0, 110) + "px";
    }

    switch (science_mine) {
        case 1:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(1, 8);
            break
        case 2:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(5, 13);
            break
        case 3:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(5, 13);
            break
        case 4:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(10, 20);
            break
        case 5:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(15, 25);
            break
        case 6:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(25, 30);
            break
        case 7:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(30, 40);
            break
        case 8:
            document.getElementsByClassName('science')[0].innerHTML += '<img class="science_icon" src="img/texture/2.png" alt="icon">';
            person.science += getRndInteger(40, 60);
            break
    }

    //удаление объекта из DOM
    //Запускаем асинхронную функцию и "откладываем" удаление на 1000ms помещая её в WebApis
    setTimeout(() => {
        document.getElementsByClassName("science_icon")[0].remove();
        i_science_mine--;//если что-то удалили, значит надо понизить переменную для новых иконок
    }, 1000);

    getRandPosition() //вызов функции размещения
    i_science_mine++;

    document.getElementsByClassName('header_game__resources_science__info')[0].innerHTML = person.science;
};