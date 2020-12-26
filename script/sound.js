function audio(){
    const engine = new Audio('./aud/untitled.mp3');
    let flag = false
    return function(){
        flag = !flag;
        if(flag){
            engine.play()
        }else{
            engine.pause()
        }
    }
}
let b = audio()


document.getElementById('header_game__menu__icon_aud-on').onclick = () =>{
    document.getElementById('header_game__menu__icon_aud-on').style = "display: none"
    document.getElementById('header_game__menu__icon_aud-off').style = "display: block"

    b()
}

document.getElementById('header_game__menu__icon_aud-off').onclick = () =>{
    document.getElementById('header_game__menu__icon_aud-on').style = "display: block"
    document.getElementById('header_game__menu__icon_aud-off').style = "display: none"  

    b()
}
