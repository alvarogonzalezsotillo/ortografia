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


import {default as http} from "http";
import {default as https} from "https";
import {default as fs} from "fs";

//const http = require('http');
//const fs = require('fs');
const log = (s) => console.log(s);


function downloadFile(url, filename){
    const file = fs.createWriteStream(filename);
    log(`Connecting: ${url}`);
    const request = https.get(url, function(response) {
        log(`Connected: ${url}`);
        response.pipe(file);
    });
    request.on('close', ()=>{
        log( `close:${url}`);
        fs.appendFileSync(filename+".ok","ok");
    });
    request.on("error", (e)=>{
        log( `error:${url}`);
        fs.appendFileSync(filename+".error",e);
    });
}

// downloadFile("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg","algo.jpg");



const speed = -3;
function downloadAudio(desc){
    const url = getSoundURL(desc,speed);
    const filename = getLocalSoundURL(desc);

    downloadFile(url, filename);
    
}
for(let s in secretos ){
    const secreto = secretos[s];
    const desc = descripcion(secreto);
    downloadAudio(desc);
}

downloadAudio(mensajeCorrecto);
downloadAudio(mensajeIncorrecto);
