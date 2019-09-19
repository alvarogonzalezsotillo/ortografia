import {default as fs} from "fs";

import {
    bajarFichero
} from "./bajar-fichero.mjs";

//bajarFichero('https://nodejs.org/dist/index.json', 'bajar-fichero-prueba.js', console.log);
//bajarFichero('https://iesavellaneda.es/images/logos/logo_ies.png', 'bajar-fichero-prueba.png', console.log);



function sleep(time){
    return;
    let stop = new Date().getTime();
    while(new Date().getTime() < stop + time);
}

function sleepAsincrono (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


import {
    secretos,
    descripcion
}
from "./secretos.mjs";

import {
    getSoundURL,
    getLocalSoundURL,
    mensajeCorrecto,
    mensajeIncorrecto

} from "./audios.mjs";


const log = (s) => console.log(s);

function downloadFile(url,filename){
    bajarFichero(url,filename,console.log);
}


const speed = -3;
function downloadAudio(desc){
    if( desc.trim() == "" ){
        log( "*** descripción vacía");
    }
    const url = getSoundURL(desc,speed);
    const filename = getLocalSoundURL(desc);
    if( fs.existsSync(filename) && fs.statSync(filename).size > 0 ){
        log( `${filename}: Ya existe`);
        return;
    }
    downloadFile(url, filename);
}

const delay = 10;

processDelayedIterator(
    [mensajeCorrecto,mensajeIncorrecto].values(),
    downloadAudio,
    delay
);

processDelayedIterator(
    secretos.map(descripcion).values(),
    downloadAudio,
    delay,
    () => console.log("Secretos bajados")
);
 
function processDelayedIterator(iterator,f,delay,endCB){

    function next(){
        const item = iterator.next();
        if( !item.done ){
            f(item.value);
            setTimeout(next,delay);
        }
        else{
            if( endCB ){
                endCB();
            }
        }
    }
    
    next();
}

