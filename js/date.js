// obtenemos la fecha actual y la guardamos en la variable "fecha"
/* const fecha = new Date()

// obtenemos la fecha escribiendo una fecha en especifico 
const fechaEscrita = new Date("1999/03/03 21:12:59")

// obtenemos la fecha indicando tiempo UNIX
const fechaUnix = new Date(872817240000)

// obtenemos la fecha pasando parámetros numéricos (yyyy, mm, dd, hh, h, m, s)
const fechaNumerica = new Date(1999, 2, 3, 21, 14, 55)

console.log(fecha)
console.log(fechaEscrita)
console.log(fechaUnix)
console.log(fechaNumerica); */

/* const fechaActualUnix = Date.now()
// especificamos una fecha
const fechaEscrita = new Date(2021, 2, 15)
// convertimos esa fecha especificada e tiempo UNIX
const fechaConvertidaUnix = Date.parse(fechaEscrita)

console.log(fechaActualUnix)
console.log(fechaConvertidaUnix); */

/* const fecha = new Date("2021/03/15 21:45:37.780")

let diaSemana = fecha.getDay() // corresponde al numero del dia, 0 -> domingo, 1 -> lunes, 2 -> martes ...
let diaFecha = fecha.getDate() // fecha del mes
let mes = fecha.getMonth() // corresponde al numero del mes, 0 -> enero, 1 -> febrero, 2 -> marzo ...
let anio = fecha.getFullYear() // anio
let hora = fecha.getHours() // hora
let minutos = fecha.getMinutes() // minuto
let segundos = fecha.getSeconds() // segundo
let milisegundos = fecha.getMilliseconds() // milisegundos
let zonaHoraria = fecha.getTimezoneOffset() // zona Horaria
let tiempoUnix = fecha.getTime() // tiempo UNIX

console.log(fecha)
const obtenerFechas = [diaSemana, diaFecha, mes, anio, hora, minutos, segundos, milisegundos, zonaHoraria, tiempoUnix]

for (let i = 0; i <= obtenerFechas.length; i++) {
    console.log(obtenerFechas[i])
}

let setDiaSemana = fecha.setDate(7)
let setMes = fecha.setMonth(4)
let setAnio = fecha.setFullYear(2000)
let setHora = fecha.setHours(13)
let setMinutos = fecha.setMinutes(26)
let setSegundos = fecha.setSeconds(12)
let setMilisegundos = fecha.setMilliseconds(123)
let setTime = fecha.setTime(872817240000) */

const fecha = new Date()

console.log(fecha)