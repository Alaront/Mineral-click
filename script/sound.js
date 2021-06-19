function audio(){
    const engine = new Audio('./aud/untitled.mp3');
    let flag = false

    return function(){
        flag = settings.flagMainSound;
        
        engine.volume = settings.flagMainSoundVolume / 10

        if(flag){
            engine.play()
        }else{
            engine.pause() 
        }
    }
}
let b = audio()

function soundClick(flag, puth = './aud/click.mp3'){
    if(flag && settings.flagClickSound){
        const engine = new Audio(puth);
        engine.volume = settings.flagClickSoundVolume / 10;
        engine.play()
    }
} 


document.getElementById('settings_game__menu__icon_aud-on').onclick = () =>{
    document.getElementById('settings_game__menu__icon_aud-on').style = "display: none"
    document.getElementById('settings_game__menu__icon_aud-off').style = "display: block"

    settings.flagMainSound = false;

    b()
}

document.getElementById('settings_game__menu__icon_aud-off').onclick = () =>{
    document.getElementById('settings_game__menu__icon_aud-on').style = "display: block"
    document.getElementById('settings_game__menu__icon_aud-off').style = "display: none"  

    settings.flagMainSound = true;

    b()
}

document.getElementById('settings_game__gameSounds__icon_aud-on').onclick = () =>{
    document.getElementById('settings_game__gameSounds__icon_aud-on').style = "display: none"
    document.getElementById('settings_game__gameSounds_icon_aud-off').style = "display: block"

    settings.flagClickSound = false;
}

document.getElementById('settings_game__gameSounds_icon_aud-off').onclick = () =>{
    document.getElementById('settings_game__gameSounds__icon_aud-on').style = "display: block"
    document.getElementById('settings_game__gameSounds_icon_aud-off').style = "display: none"  

    settings.flagClickSound = true;
}


//перерисовка громкости
function pointSound(){

    let arrSound = document.querySelectorAll('.settings_element__settingsSound .settingsSound div span');

    for(let i = 0; i < 5; i++){
        if(arrSound[i].classList.contains('active')){
            arrSound[i].classList.remove('active');
        }

        if(i < settings.flagMainSoundVolume / 2){
            arrSound[i].classList.add('active')
        }
    }

    b()
    
}

function pointSoundClick(){

    let arrSound = document.querySelectorAll('.settings_element__gameSoundsAud .settingsSound div span');

    for(let i = 0; i < 5; i++){
        if(arrSound[i].classList.contains('active')){
            arrSound[i].classList.remove('active');
        }

        if(i < settings.flagClickSoundVolume / 2){
            arrSound[i].classList.add('active')
        }
    }
    
}

document.getElementById('settings_gameSound__less').onclick = () =>{
    settings.flagMainSoundVolume = settings.flagMainSoundVolume - 2;

    settings.flagMainSoundVolume = settings.flagMainSoundVolume < 0 ? 0 : settings.flagMainSoundVolume;

    pointSound();
}

document.getElementById('settings_gameSound__more').onclick = () =>{
    settings.flagMainSoundVolume = settings.flagMainSoundVolume + 2;

    settings.flagMainSoundVolume = settings.flagMainSoundVolume > 10.0 ? 10.0 : settings.flagMainSoundVolume;

    pointSound();
}

document.getElementById('settings_gameSoundAud__less').onclick = () =>{
    settings.flagClickSoundVolume = settings.flagClickSoundVolume - 2;

    settings.flagClickSoundVolume = settings.flagClickSoundVolume < 0 ? 0 : settings.flagClickSoundVolume;

    pointSoundClick();
}

document.getElementById('settings_gameSoundAud__more').onclick = () =>{
    settings.flagClickSoundVolume = settings.flagClickSoundVolume + 2;

    settings.flagClickSoundVolume = settings.flagClickSoundVolume> 10.0 ? 10.0 : settings.flagClickSoundVolume;

    pointSoundClick();
}