//------score------\\
//открытие окна 
let score_in_stock = 0;
let quantity_icon = 0;
let score_open = true;//запрет на обновление магазина если открыто окно магазина
let arr_product = [];//массив товаров

document.getElementsByClassName('building_blok')[7].onclick = () => {
    soundClick(true)
     
    score_open = false;
    document.getElementsByClassName('score_element__icon')[0].insertAdjacentHTML('afterbegin', '<div id="score_element__scroll"></div>');//это чтобы скролить
    document.getElementById('score_window').style.display = "block";//переводим в блок

    for (let i = 0; i < arr_product.length; i++) {
        quantity_icon++;
        document.getElementsByClassName('score_element__icon')[0].innerHTML += `
         <div class="score_element__icon_${arr_product[i].id}">
            <div class="score_element__content">
            <span><img src="img/tools/${arr_product[i].id}.jpg" alt="photo"></span>
            <p>Название: ${arr_product[i].name}</p>
            </div>
            <div class="score_element__content">
            <p class="town_hall_element_messeg__info_priсe">Цена: ${arr_product[i].price}</p>
            <button id="town_hall_element_messeg__button_${arr_product[i].id}">Купить</button>
            </div>
         </div>`;
    };

    for (let i = 0; i < arr_product.length; i++) {
        document.getElementById(`town_hall_element_messeg__button_${arr_product[i].id}`).onclick = () => {
            if (person.money >= arr_product[i].price) {
                person.money -= arr_product[i].price;
                tools_object[arr_product[i].id].quantity += 1;
                document.getElementsByClassName('header_game__resources_money__info')[0].innerHTML = person.money; //обновили казну

                
                soundClick(true, './aud/sale.mp3')
                
            } else {
                document.getElementsByClassName(`score_element__icon_${arr_product[i].id}`)[0].innerHTML += `<div id="warehouse_element__icon__error"><p>Сэр, вы бедны</p></div`;
                //удаление объекта из DOM
                //Запускаем асинхронную функцию и "откладываем" удаление на 1000ms помещая её в WebApis
                setTimeout(() => {
                    document.getElementById("warehouse_element__icon__error").remove();
                }, 1500);
            };
        };
    };

};

let pushStartGoods = (key) =>{
    let temp = tools_object[key].price;
    let product = {
        id: key,
        name: tools_object[key].name,
        price: getRndInteger(temp, temp + 100)
    }

    return product
}

//генерация товаров
let generation_product = setInterval(() => {
    if (score_open) {
        if (arr_product.length != 0) arr_product = [];//удалим если что-то уже есть

        const keys_toolsStart = ["skin", "wood"];
       for(let i = 0; i < 2; i++){
            let product = pushStartGoods(keys_toolsStart[i]);
            arr_product.push(product);
       }

        const keys_tools = ["bones", "wool"];
        for (let key of keys_tools) {
            if (getRndInteger(1, 10) % 2 == 0) {
                let temp = tools_object[key].price;
                let product = {
                    id: key,
                    name: tools_object[key].name,
                    price: getRndInteger(temp, temp + 100)
                }
                arr_product.push(product);
            };
        };
    };
}, 10000);

//событие прокрутки 
let score_icon_scroll = 0;
document.getElementsByClassName('score_element__arrow')[0].onclick = () => {
    if (score_icon_scroll < 0) {
        score_icon_scroll += 150;
        document.getElementById('score_element__scroll').style.marginLeft = score_icon_scroll + 'px';
    };
};
document.getElementsByClassName('score_element__arrow')[1].onclick = () => {
    if (score_icon_scroll >= -1 * quantity_icon) {
        score_icon_scroll -= 150;
        document.getElementById('score_element__scroll').style.marginLeft = score_icon_scroll + 'px';
    };
};

//закрытие окна склада
document.querySelector('.score_close').onclick = () => {
    document.getElementById('score_window').style.display = "none";//переводим состояние окна в none
    document.getElementsByClassName('score_element__icon')[0].innerHTML = "";//чистим окно склада
    score_icon_scroll = 0;
    quantity_icon = 0;
    score_open = true;
    
    soundClick(true);
};