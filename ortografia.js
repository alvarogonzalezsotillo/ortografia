function l(msg){ console.log(msg); }
function e(id){ return document.getElementById(id); }
function c(tag){ return document.createElement(tag); }
function a(p,c){ p.appendChild(c); }
function p(p,c){ p.insertBefore(c,p.firstChild);}
function v(id){ return e(id).value; }
function r(a){return a[Math.floor(Math.random()*a.length)]; }
function rc(el,c){ e(el).classList.remove(c);}
function ac(el,c){ e(el).classList.add(c);}

function siguiente(){
    e("palabra").value = "";
    secreto = r(secretos);
    resultado = new Outcome(descripcion(secreto));
    resultado.render();
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
        video.onloadeddata = function(){ video.play(); }; 
    }
    else{
        video.currentTime = 0;
        video.play();
    }
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
    resultado.hit();
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
    resultado.miss();
    e("palabra").value="";
    e("enviar").disabled = true;
    play( e("falloPlayer"), "Incorrecto. Intenta otra vez", 0,()=> e("escuchar").click());
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

e("escuchar").onclick = function(){
    play(e("secretoPlayer"), descripcion(secreto),-3, () => {
        e("palabra").focus();
        e("enviar").disabled = false;
    });
}

e("closeIntro").onclick = function(){
    siguiente();
    rc("playground","oculto");
    ac("intro","oculto");
}

class Outcome{
    constructor(word){
        this.word = word;
        this.element = c("resultado");
    }

    randomMiss(){
        let array = ["💩","😞","😠","😭","😈","🤬","😱","🤦‍♀️","🤷‍♂️","👎","🙊","💔","🏴‍☠️"];
        return r(array);
    }

    miss(){
        let fail = c("error");
        fail.innerHTML = this.randomMiss();
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

var resultado = null;

var secreto = "";



