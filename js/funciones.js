function saludo() {
    console.log(`Hola mundo, teoria y practica JavaScript`)
}

/* saludo() */

function operacion() {
    return 2 + 2
}

let resultado = operacion()
/* console.log(resultado) */

/* function lenguaje(nombreLenguaje) {
    console.log(`Guia de ${nombreLenguaje} - teoria y practica`)
} */

/* function lenguaje(nombreLenguaje = "JavaScript") {
    console.log(`Guia de ${nombreLenguaje} - teoria y practica`)
} */

function lenguaje(nombreLenguaje) {
    if (typeof nombreLenguaje == "undefined") return console.warn("No has definido un valor como parametro.")
    if (nombreLenguaje === "") return console.warn("Haz indicado un valor vacio.");
    if (typeof nombreLenguaje !== "string") return console.warn("Debes indicar como valor una cadena de texto.");
    console.log(`Guia de ${nombreLenguaje} - teoria y practica`)
}

/* lenguaje()
lenguaje("")
lenguaje(1234) */

function calculoEdad(edadUsuario) {

    if (typeof edadUsuario == "undefined") return console.warn("No haz definido un valor como parametro a evaluar.");
    if (edadUsuario == 0) return console.warn("Ingresa un valor mayor a cero.");
    if (typeof edadUsuario !== "number") return console.warn("Debes indicar como valor un numero.");

    if (edadUsuario < 0) return console.warn("Ingresa un numero mayor a cero.");
    if (edadUsuario > 0 && edadUsuario < 18) return console.info("Aun eres menor de edad.");
    if (edadUsuario >= 18 && edadUsuario < 60) return console.info("Eres mayor de edad.");
    if (edadUsuario >= 60) return console.info("Eres un adulto mayor de la tercera edad.");

}

calculoEdad()
calculoEdad(0)
calculoEdad('tengo 20')
calculoEdad(-30)
calculoEdad(14)
calculoEdad(41)
calculoEdad(75)
