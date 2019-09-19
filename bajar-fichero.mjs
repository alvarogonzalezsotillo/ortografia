import {default as http} from "http";
import {default as https} from "https";
import {default as fs} from "fs";

function bajarFichero(url,filename,log){

    if( !log ){
        log = (s) => {};
    }
    
    const file = fs.createWriteStream(filename);
    log( `Conectando... : ${url}`);
    const request = https.get(url, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        log( `Conectado: ${url}` );
        log( `  content-type: ${contentType}`);
        log( `  statusCode: ${statusCode}` );

        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                              `Status Code: ${statusCode}`);
        }
        if (error) {
            log(error.message);
            // Consume response data to free up memory
            res.resume();
            return error;
        }

        //res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => {
            rawData += chunk;
            file.write(chunk);
        });
        res.on('end', () => {
            try {
                log(`end: ${url}`);
                file.end();
            } catch (e) {
                log(e.message);
            }
        });
    });

    request.on('error', (e) => {
        log(`Got error with ${url}: ${e.message}`);
    });
}

export { bajarFichero };

//bajarFichero('https://nodejs.org/dist/index.json', 'bajar-fichero-prueba.js', console.log);
//bajarFichero('https://iesavellaneda.es/images/logos/logo_ies.png', 'bajar-fichero-prueba.png', console.log);
