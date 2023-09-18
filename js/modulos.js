/* // importando 
import saludo, { PI, usuario, datos, lenguajes } from "./modules/mismodulos.js"

// calculando diametro con la constante PI exportada
let diametro =  12 / PI
// mostrando en consola variable USUARIO exportada
console.log(`Hola ${usuario} el diametro del circulo es ${diametro}`)

// recorriendo el objeto exportado
for (const key in datos) {
    console.log(`${key}: ${datos[key]}`)
}

// recorriendo el arreglo exportado
for (const i of lenguajes) {
    console.log(`Lenguaje: ${i}`)
}

// invocando funcion exportada por default
saludo() */

import { operacionesAritmeticas as operaciones } from "./modules/operaciones-aritmeticas.js";

let suma = operaciones.sumar(12, 8)
let resta = operaciones.restar(18, 5)
let division = operaciones.dividir(69, 3)
let multiplicacion = operaciones.multiplicar(12, 5)

console.log(`Resultado Suma: ${suma}`)
console.log(`Resultado Resta: ${resta}`)
console.log(`Resultado Division: ${division}`)
console.log(`Resultado Multiplicacion: ${multiplicacion}`)