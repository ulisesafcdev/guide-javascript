/* function* mensajes() {
    yield "Mensaje #1"
    console.log("Otro mensaje por separado...")
    yield "Mensaje #2"
    yield "Mensaje #3"
    console.log("Ultimo mensaje por separado...")
}

let iterador = mensajes()

for (const i of iterador) {
    console.log(i)
} */

function elevarCuadrado(valor){
    setTimeout(() => {
        return console.log({ valor, resultado: valor * valor})
    }, Math.random() * 1500)
}

function* generadorCuadrado() {
    console.log("Iniciando Generador")
    yield elevarCuadrado(4)
    yield elevarCuadrado(5)
    yield elevarCuadrado(10)
    console.log("Terminando Generador")
}

let g = generadorCuadrado()

for(let i of g) {
    console.log(i)
}