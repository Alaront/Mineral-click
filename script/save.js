
//сохранения с помощью Localstorage
document.getElementsByClassName('menu_element__button')[1].onclick = (event) => {
    soundClick(true)

    event.path[0].style.border = "5px solid #022a5f";

    let object_save = { 
        save_person: person,
        save_mineral_object_ore: mineral_object_ore,
        save_mineral_object_ingot: mineral_object_ingot,
        save_tools_object: tools_object,
        save_arr_working: arr_working,
        save_arr_building: arr_building,
        save_settings: settings
    }
 
    //из объекта object_save делаем строку и помещаем её person_save
    localStorage.setItem('person_save', JSON.stringify(object_save));
    
    setTimeout(() => {event.path[0].style.border = "5px solid rgb(9, 76, 163)";}, 200)
}

document.getElementsByClassName('menu_element__button')[3].onclick = () => {
    soundClick(true)

    document.getElementById('author_window').style.display = "block";
}

document.getElementsByClassName('menu_element__button')[2].onclick = () => {
    soundClick(true)

    document.getElementById('settings_window').style.display = "block";
}

document.getElementsByClassName('menu_info__button')[0].onclick = () => {
    soundClick(true)
    
    document.getElementById('author_window').style.display = "none";
}

document.getElementsByClassName('menu_info__button')[1].onclick = () => {
    soundClick(true)
    
    document.getElementById('settings_window').style.display = "none";
}

