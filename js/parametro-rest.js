/* function calcularSuma(...num) {
    let total = 0
    for (const i of num) {
        total += i
    }

    return total
}

let operacionSuma = calcularSuma(12, 8, 5)
console.log(operacionSuma) */

function frutas(opcionA, opcionB, ...opciones) {
    console.log(`Opcion A: ${opcionA}`)
    console.log(`Opcion B: ${opcionB}`)
    console.log(`Demas opciones: ${opciones}`)
}

frutas("manzanas", "fresas", "peras", "guayabas", "kiwis")