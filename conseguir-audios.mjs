import {
    secretos,
    descripcion
}
from "./secretos.mjs";

import {
    getSoundURL,
    getLocalSoundURL
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
}

// downloadFile("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg","algo.jpg");

const speed = -3;
for(let s in secretos ){
    const secreto = secretos[s];
    const desc = descripcion(secreto);
    const url = getSoundURL(desc,speed);
    const filename = getLocalSoundURL(desc);

    downloadFile(url, filename);
}

