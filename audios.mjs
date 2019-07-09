

function normalizeWord(w){
    return encodeURI( w.trim().toLowerCase() );
}



function getSoundURL(value, speed){

    if( !speed || !Number.isInteger(speed)){
        speed = 0;
    }
    value = normalizeWord(value);
    let key = 'f6b512bd777f413089885ecf5f891b38';
    let link = `https://api.voicerss.org/?src=${value}&r=${speed}&key=${key}&hl=es-es`

    return link;
}

function getLocalSoundURL(value,speed){
    value = normalizeWord(value);
    let link = `./audios/${value}.mp3`;

    return link;
}

 export{
    getSoundURL,
    getLocalSoundURL
}; 
