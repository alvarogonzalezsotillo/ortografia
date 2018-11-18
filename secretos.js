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
    "divisible",
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
    "hallar",
    "verbo",
    "adverbio",
    "árbol",
    ["está","de verbo estar"],
    "estructura",
    ["huyes", "del verbo huir"],
    ["trabas", "sinónimo de obstáculos"],
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
    ["mas", "conjunción similar a pero"]
];

addSecretos( `
  había
  ayer
  hombre
  entonces
  siempre
  después
  veces
  barco
  vacaciones
  día
  dibujo
  invierno
  verano
  primavera
  otoño
  jefe
  jersey
  canguro
  máquina
  marrón
  verde
  rojo
  árbol
  abeja
  bosque
  cigüeña
  selva
  oveja
  ciervo
  frío
  gitana
  guerra
  rey
  viejo
  guitarra
  mayor
  muy
  quería
  queso
  zanahoria
  huevo
  hueso
  íbamos
  boca
  extranjero
  vosotras
  vuestro
  tío
  abuela
  hijo
  vecina
  habitación
  lenguaje
  matemáticas
  historia
  inglés
  yo
  avión
  ambulancia
  bicicleta
  carrera
  fútbol
  balón
  juego
  columpio
  navidad
  agujero
  caja
  feliz
  también
  ahora
  aquí
  gobierno
  país
  dijo
  hecho
  tenía
  hacia
  vamos
  según
  allí
  todavía
  número
  hora
  quiero
  cabeza
  algún
  María`
           );
