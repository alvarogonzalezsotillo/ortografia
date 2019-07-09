import {
    secretos as secretosOriginales,
    palabra,
    descripcion,
} from "./secretos.js";

import {
    normalizeWord,
    mensajeCorrecto,
    mensajeIncorrecto
} from "./audios.js";

function l(msg){ console.log(msg); }
function e(id){ return document.getElementById(id); }
function c(tag){ return document.createElement(tag); }
function a(p,c){ p.appendChild(c); }
function p(p,c){ p.insertBefore(c,p.firstChild);}
function v(id){ return e(id).value; }
function r(a){return a[Math.floor(Math.random()*a.length)]; }
function rc(el,c){ el.classList.remove(c);}
function ac(el,c){ el.classList.add(c);}
function hc(el,c){ return el.classList.contains(c);}
function tc(el,c){ if(hc(el,c)) rc(el,c); else ac(el,c); }

var listaDeErrores = [];
var palabrasJugadas = 0;
var fallado = false;
var palabrasFalladas = 0;
var currentStrike = 0;
var bigestStrike = 0;

function shufle(array){
    actualizaReporte()
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
let secretos = secretosOriginales.slice();

var index = secretos.length+100;
function nextSecreto(){
    fallado = false
    
    index++
    if(secretos.length-1>index){
        return secretos[index]
    }else{
        index = 0;
        secretos = shufle(secretos);
        return nextSecreto();
    }
}
function siguiente(){
    e("palabra").value = "";
    //secreto = r(secretos);
    secreto = nextSecreto();
    resultado = new Outcome(descripcion(secreto));
    resultado.render();
    escuchar();
}

function play(video,value,speed,callback){
    l(value);
    if( !speed || !Number.isInteger(speed)){
        speed = 0;
    }
    value = normalizeWord(value);
    let key = 'f6b512bd777f413089885ecf5f891b38';
    let link = `https://api.voicerss.org/?src=${value}&r=${speed}&key=${key}&hl=es-es`
    video.pause();
    video.onended = callback;
    if( video.src != link ){
        video.src = link;
        video.onloadeddata = function(){ video.play(); }; 
    }
    else{
        video.currentTime = 0;
        video.play();
    }
}

function later(f,m){
    if( !m ){
        m = 3000;
    }
    window.setTimeout(f,m);
}

function disableButtons(b){
    e("enviar").disabled = b;
    e("escuchar").disabled = b;

}

function acierto(p,callback){
    palabrasJugadas++
    if(currentStrike>bigestStrike) bigestStrike = currentStrike;
    currentStrike++
    actualizaReporte();
    resultado.hit();
    e("palabra").value = "";
    disableButtons(true);
    let realCallback = function(){
        disableButtons( false );
        if( callback )
            callback();
    }
    play(e("aciertoPlayer"),mensajeCorrecto,0,realCallback);
}

function fallo(secreto,p){
    actualizaReporte()
    currentStrike = 0;
    if(!fallado){
        fallado = true
        palabrasFalladas++;
        listaDeErrores.push(palabra(secreto));
    }
    resultado.miss();
    e("palabra").value="";
    disableButtons(true);
    play( e("falloPlayer"), mensajeIncorrecto, 0, escuchar );
}




e("showInfo").onclick = function(){
    tc(e("info"),"oculto");
}

e("palabra").onkeypress = function(ev){
    let k = ev.which || ev.keyCode;
    if( k == 13 ){
        e("enviar").click();
    }
}

e("enviar").onclick = function(){
    let p = v("palabra");
    e("palabra").focus();
    if( p.toLowerCase().trim() === palabra(secreto).toLowerCase().trim() ){
        acierto(secreto,siguiente);
    }
    else{
        fallo(secreto,p);
    }
    return false;
}

e("reporte").onclick = function () {
    tc(e("reportebox"),"oculto");
    actualizaReporte();

}
function actualizaReporte(){
    if(currentStrike>bigestStrike) bigestStrike = currentStrike;
    e("jugadas").innerHTML = palabrasJugadas
    e("falladas").innerHTML = palabrasFalladas;
    e("porcentaje").innerHTML = palabrasFalladas/palabrasJugadas*100+"%";
    e("fallos").innerHTML = listaDeErrores.toString();
    e("Racha").innerHTML = currentStrike;
    e("RACHA").innerHTML = bigestStrike;
}
function escuchar(){
    disableButtons(true);
    play(e("secretoPlayer"), descripcion(secreto),-3, () => {
        e("palabra").focus();
        disableButtons(false);
    });
}

e("escuchar").onclick = escuchar;



e("closeIntro").onclick = function(){
    siguiente();
    rc(e("playground"),"oculto");
    ac(e("intro"),"oculto");
}

class Outcome{
    constructor(word){
        this.word = word;
        this.element = c("resultado");
    }

    emojis(){
        return ["💩","😞","😠","😭","😈","😱","👎","🙊","💔","☠","🙏","💣","🚽","🙍","🙇‍","😨","😩","😳","😖","😵"];
    }
    
    randomMiss(){
        return r(this.emojis());
    }

    miss(){
        let fail = c("error");
        fail.innerHTML = this.randomMiss();
        fail.title = e("palabra").value;
        a(this.element,fail);
    }

    hit(){
        let success = c("acierto");
        success.innerHTML = this.word;
        a(this.element,success);
    }

    render(){
        p(e("resultados"),this.element);
    }
}

function fillInfo(){
    function normalize(s){ return s.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); }
    secretos.sort( function(a,b){
        a = palabra(a).toLowerCase();
        b = palabra(b).toLowerCase();
        a = normalize(a);
        b = normalize(b);
        if( a > b ) return 1;
        if( a < b ) return -1;
        return 0;
    });
    secretos.forEach( function(s){
        let iw = c("infoWord");
        iw.innerHTML = descripcion(s);
        a(e("infoContents"),iw);
    });

    a(e("infoContents"), c("p"));
    
    let emojis = (new Outcome()).emojis();
    emojis.forEach( function(s){
        let iw = c("emoji");
        iw.innerHTML = descripcion(s);
        a(e("infoContents"),iw);
    });
};

fillInfo();

var resultado = null;

var secreto = "";


