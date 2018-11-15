function addSecreto(s){
    secretos.push(s)
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
    "invisible"
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
    ["hoy", "el día actual"]
];

addSecretos( `
  había
  una
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
  hasta
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
  más
  aquí
  mucho
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
  voy
  hora
  cinco
  quiero
  cabeza
  algún
  María`
           );
