function l(msg){ console.log(msg); }
function e(id){ return document.getElementById(id); }
function v(id){ return e(id).value; }
function r(a){return a[Math.floor(Math.random()*a.length)]; }

function siguiente(){
    e("palabra").value = "";
    secreto = r(secretos);
    e("escuchar").click();
}

function normalizeWord(w){
    return encodeURI( w.trim().toLowerCase() );
}

function play(video,value,speed,callback){
    l(value);
    if( !speed || !Number.isInteger(speed)){
        speed = 0;
    }
    value = normalizeWord(value);
    let key = '7ce3372599eb47b18cf59793351ceaa2';
    let link = `https://api.voicerss.org/?src=${value}&r=${speed}&key=${key}&hl=es-es`
    video.pause();
    video.onended = callback;
    if( video.src != link ){
        video.src = link;
    }
    video.currentTime = 0;
    video.play();
}

function palabra(secreto){
    l( typeof secreto )
    if( typeof secreto === "string" )
        return secreto;
    else
        return secreto[0];
}

function descripcion(secreto){
    if( typeof secreto === "string" )
        return secreto;
    else
        return secreto[0] + ", " + secreto[1];
}

function later(f,m){
    if( !m ){
        m = 3000;
    }
    window.setTimeout(f,m);
}

function acierto(p,callback){
    e("palabra").value = "";
    e("enviar").disabled = true;
    let realCallback = function(){
        e("enviar").disabled = false;
        if( callback )
            callback();
    }
    play(e("aciertoPlayer"),"Correcto, la siguiente palabra es",0,realCallback);
}

function fallo(secreto,p){
    e("palabra").value="";
    e("enviar").disabled = true;
    play( e("falloPlayer"), "Incorrecto. Intenta otra vez", 0,()=> e("escuchar").click());
}



e("formulario").onsubmit = function(){
    let p = v("palabra");
    e("palabra").focus();
    if( p.toLowerCase().trim() === palabra(secreto).toLowerCase().trim() ){
        acierto(secreto);
        later( siguiente );
    }
    else{
        fallo(secreto,p);
    }
    return false;
}

e("escuchar").onclick = function(){
    play(e("secretoPlayer"), descripcion(secreto),-5, () => {
        e("palabra").focus();
        e("enviar").disabled = false;
    });
}




var secreto = "";
play( e("secretoPlayer"), "Escribe la siguiente palabra",0,siguiente);

l(JSON.stringify(secretos));
