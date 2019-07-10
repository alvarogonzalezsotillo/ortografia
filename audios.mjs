// -*- mode: js2; -*-

const mensajeCorrecto = "Correcto, la siguiente palabra es";
const mensajeIncorrecto = "Incorrecto. Intenta otra vez";

function normalizeWord(w){
    return encodeURI( w.trim().toLowerCase() );
}



function getSoundURL(value, speed){

    if( !speed || !Number.isInteger(speed)){
        speed = 0;
    }
    value = normalizeWord(value);
    let key = '3bac807ea5304df1a98d7752a1dc60be';
    let link = `https://api.voicerss.org/?src=${value}&r=${speed}&key=${key}&hl=es-es`;

    return link;
}

function getLocalSoundURL(value,speed){
    //value = normalizeWord(value);
    let link = `./audios/${value}.mp3`;

    return link;
}

export{
    getSoundURL,
    getLocalSoundURL,
    normalizeWord,
    mensajeCorrecto,
    mensajeIncorrecto
}; 
