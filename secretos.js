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
    "autidivo",
    "honradez",
    "privilegio",
    "llanura",
    "deber",
    ["Sí","Afirmativo"],
    ["Si","Condicional"],
    "Relacionado",
    "Percibir",
    ["el","Articulo"],
    ["él","Pronombre"],
    "automático",
    "llevándolo",
    "carácter",
    "divulgativo",
    "género",
    "homogéneo",
    "Marqués"
    

];

addSecretos("");
