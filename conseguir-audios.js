import {secretos} from "secretos.mjs";
import {
    getSoundURL,
    getLocalSoundURL
} from "audios.mjs";


const http = require('http');
const fs = require('fs');
const log = (s) => console.log(s);


function downloadFile(url, filename){
    const file = fs.createWriteStream(filename);
    log(`Connecting: ${url}`)
    const request = http.get(url, function(response) {
        log(`Connected: ${url}`)
        response.pipe(file);
    });
}

downloadFile("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg","algo.jpg");


