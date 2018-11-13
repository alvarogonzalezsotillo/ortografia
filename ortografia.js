function l(msg){ console.log(msg); }
function e(id){ return document.getElementById(id); }
function v(id){ return e(id).value; }
function r(a){return a[Math.floor(Math.random()*a.length)]; }

function siguiente(){
    e("palabra").value = "";
    secreto = r(secretos);
    e("escuchar").click();
}         

function play(value,speed,callback){
    l(value);
    if( !speed || !Number.isInteger(speed)){
        speed = 0;
    }
    value = value.replace("&"," ");
    let key = '7ce3372599eb47b18cf59793351ceaa2';
    let link = `https://api.voicerss.org/?key=${key}&hl=es-es&r=${speed}&src=${value}`
    //e("player").src = link;
    e("video").onended = callback;
    l("El callback es:" + callback);
    l(callback);
    e("video").src = link;
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
    //e("enviar").disabled = true;
    let realCallback = function(){
        e("enviar").disabled = false;
        if( callback )
            callback();
    }
    play("Correcto, la siguiente palabra es",0,realCallback);
}

function fallo(secreto,p){
    e("palabra").value="";
    e("enviar").disabled = true;
    play( `Incorrecto. Intenta otra vez ${descripcion(secreto)}`,0,()=> e("enviar").disabled = false);
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
    e("palabra").focus();
    play(descripcion(secreto),-5);
}




var secreto = "";
play( "Escribe la siguiente palabra",0,siguiente);

l(JSON.stringify(secretos));
