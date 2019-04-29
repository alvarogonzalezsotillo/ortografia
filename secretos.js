function addSecreto(s){
    if( secretos.indexOf(s) < 0 ){
        
        secretos.push(s)
    }
}

function addSecretos(str){
    str.
	replace(/\.|;|:|1|2|3|4|5|6|7|8|9|0|\n/g, " ").
        split(" ").
        filter( (el) => el != "" ).
        forEach( addSecreto );
}

var secretos = [
    "rebelde",
    "revuelta",
    "debilidad",
    "credibilidad",
    "oblongo",
    "huevo",
    "débil",
    ["más", "de adición"],
    ["mas", "disyuntiva"],
    ["divisible","de dividir"],
    "invisible",
    "proyecto",
    "proyección",
    "trabajo",
    "tubería",
    "jirafa",
    ["vaca", "el animal"],
    ["baca", "utensilio"],
    ["hay", "el verbo"],
    "desarrollarse",
    "descripción",
    "acabarse",
    "velocidad",
    "atención",
    "exámenes",
    "ovoide",
    "garaje",
    ["haya", "el árbol"],
    ["haya", "del verbo haber"],
    ["halla", "del verbo hallar"],
    ["hallar","el verbo"],
    "verbo",
    "adverbio",
    "árbol",
    ["está","de verbo estar"],
    "estructura",
    ["huyes", "del verbo huir"],
    ["traba", "sinónimo de obstáculo"],
    "insensibilicemos",
    ["atrás", "la parte trasera"],
    "dejándolo",
    "desarrollar",
    ["vez","sinónimo de turno"],
    ["través", "de atravesar"],
    ["iba","del verbo ir"],
    ["están", "plural del verbo estar"],
    ["hoy", "el día actual"],
    ["voy", "del verbo ir"],
    "cadáver",
    "absurdo",
    ["hasta","la preposición"],
    ["asta", "el cuerno"],
    ["más", "de sumar"],
    ["mas", "conjunción similar a pero"],
    "sencillez",
    "expresión",
    "gestación",
    "auditivo",
    "honradez",
    "privilegio",
    "llanura",
    "deber",
    ["Sí","Afirmativo"],
    ["Si","Condicional"],
    "Relacionado",
    "Percibir",
    ["el","Artículo"],
    ["él","Pronombre"],
    "automático",
    "llevándolo",
    "carácter",
    "divulgativo",
    "género",
    "homogéneo",
    "Marqués",
    "Artículo",
    "canapé",
    "Inés",
    "Trébol",
    "libélula",
    "apúntame",
    "escribir",
    "hervir",
    "vivir",
    "servir",
    "contribuir",
    "saltaba",
    "vudú",
    "buzón",
    "biología",
    "ovni",
    "club",
    "nauseabundo",
    "obtener",
    "habilidad",
    "estuvieron",
    "anduviste",
    "tuvierais",
    "resolver",
    "volver",
    "evitar",
    "eventual",
    "evolución",
    "evasión",
    "ébano",
    "octavo",
    "nuevo",
    "leve",
    "altivo",
    "hervívoro",
    "víbora",
    "homnívora",
    "advertir",
    "subención",
    "obvio",
    "mesilla",
    "cuadernillo",
    "costilla",
    "adyacente",
    "disyuntiva",
    "acoger",
    "redirigir",
    "geología",
    "generalización",
    "contagio",
    "prodigiosa",
    "meteorológico",
    "enigmática",
    "gratis",
    "ajeno",
    "teja",
    "ojera",
    "rebajaré",
    "dijiste",
    "hiato",
    "hierro",
    "huida",
    "ahuecar",
    "cacahuete",
    "países",
    "ocupación",
    "economía",
    "político",
    "fué",
    "suyo",
    "capítulos",
    "refiriéndose",
    "río",
    "estructura",
    "típica",
    
];

addSecretos("");
