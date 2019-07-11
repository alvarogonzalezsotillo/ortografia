// -*- mode: js2; -*-

const instrucciones = `

Ahora los audios no se piden a un servidor web externo desde la página web. Antes de subir los cambios a Github hay que ejecutar el comando:

  nodejs --experimental-modules ./conseguir-audios.mjs

Se bajarán los audios nuevos al directorio "audios". Se bajarán solo los que no tengan el correspondiente fichero ".ok".

`;

console.log(instrucciones);

function addSecreto(s){
    if( secretos.indexOf(s) < 0 ){
        
        secretos.push(s);
    }
}

function addSecretos(str){
    str.
	replace(/\.|;|:|1|2|3|4|5|6|7|8|9|0|\n/g, " ").
        split(" ").
        filter( (el) => el != "" ).
        forEach( addSecreto );
}

export let secretos = [
    "Artículo",
    "Fernández",
    "Ibáñez",
    "Inés",
    "Marqués",
    "Percibir",
    "Relacionado",
    "Trébol",
    "a menudo",
    "abatido",
    "absurdo",
    "acabarse",
    "acoger",
    "adverbio",
    "advertir",
    "adyacente",
    "afán",
    "ahuecar",
    "ajeno",
    "altivo",
    "anduviste",
    "aprovechar",
    "aprovechar",
    "apúntame",
    "atención",
    "ateísmo",
    "auditivo",
    "automático",
    "avocado",
    "biología",
    "buzón",
    "cacahuete",
    "cadáver",
    "canapé",
    "capítulos",
    "carácter",
    "carácter",
    "coacción",
    "contagio",
    "contemporánea",
    "contribuir",
    "costilla",
    "credibilidad",
    "cuadernillo",
    "deber",
    "debilidad",
    "dejándolo",
    "desarrollar",
    "desarrollarse",
    "descripción",
    "dijiste",
    "disyuntiva",
    "divulgar",
    "divulgativo",
    "débil",
    "economía",
    "enigmática",
    "escribir",
    "espectador",
    "espectáculo",
    "espontáneo",
    "estructura",
    "estructura",
    "estuvieron",
    "evasión",
    "eventual",
    "evitar",
    "evolución",
    "expectativa",
    "expresión",
    "exámenes",
    "fue",
    "físicos",
    "garaje",
    "generalización",
    "geología",
    "gestación",
    "gratis",
    "género",
    "habilidad",
    "herbívoro",
    "hervir",
    "hiato",
    "hiato",
    "hierro",
    "homnívora",
    "homogéneo",
    "honradez",
    "huida",
    "imagen",
    "imaginación",
    "insensibilicemos",
    "invisible",
    "inyectar",
    "jirafa",
    "juzgar",
    "leve",
    "libélula",
    "llanura",
    "llevándolo",
    "majestuoso",
    "mesilla",
    "meteorológico",
    "máximas",
    "nauseabundo",
    "oblongo",
    "obtener",
    "obvio",
    "octavo",
    "ocupación",
    "ojera",
    "ovoide",
    "pabellón",
    "patinaje",
    "países",
    "político",
    "privilegio",
    "prodigiosa",
    "proyección",
    "proyecto",
    "rebajaré",
    "rebelde",
    "rebeldía",
    "rebeldía",
    "redirigir",
    "resolver",
    "revuelta",
    "revuelta",
    "romántico",
    "río",
    "saltaba",
    "sencillez",
    "servir",
    "subvención",
    "suyo",
    "teja",
    "trabajo",
    "tubería",
    "tuvierais",
    "término",
    "típica",
    "uruguay",
    "velocidad",
    "verbo",
    "verosímil",
    "vertebral",
    "viceversa",
    "vivir",
    "volante",
    "volver",
    "vudú",
    "víbora",
    "árbol",
    "áureo",
    "ébano",
    ["Si","Condicional"],
    ["Sí","Afirmativo"],
    ["asta", "el cuerno"],
    ["atrás", "la parte trasera"],
    ["baca", "utensilio"],
    ["búho", "ave nocturna"],
    ["club", "grupo de personas"],
    ["divisible","de dividir"],
    ["el","Artículo"],
    ["está","de verbo estar"],
    ["están", "plural del verbo estar"],
    ["halla", "del verbo hallar"],
    ["hallar","el verbo"],
    ["hasta","la preposición"],
    ["hay", "el verbo"],
    ["haya", "del verbo haber"],
    ["haya", "el árbol"],
    ["hoy", "el día actual"],
    ["huevo", "de gallina"],
    ["huyes", "del verbo huir"],
    ["iba","del verbo ir"],
    ["mas", "conjunción similar a pero"],
    ["mas", "disyuntiva"],
    ["más", "de adición"],
    ["más", "de sumar"],
    ["nuevo", " a estrenar"],
    ["ovni","platillo volante"],
    ["prohíbe", "del verbo prohibir"]
    ["refiriéndose","hacer alusión a algo"],
    ["será", "del verbo ser"],
    ["traba", "sinónimo de obstáculo"],
    ["través", "de atravesar"],
    ["vaca", "el animal"],
    ["vez","sinónimo de turno"],
    ["voy", "del verbo ir"],
    ["él","Pronombre"],
];


export function palabra(secreto){
    if( typeof secreto === "string" )
        return secreto;
    else if( Array.isArray(secreto) ){
        return secreto[0];
    }
    else
        return "";
}

export function descripcion(secreto){
    if( typeof secreto === "string" )
        return secreto;
    else if( Array.isArray(secreto) ){
        return secreto[0] + ", " + secreto[1];
    }
    else
        return "";
}


