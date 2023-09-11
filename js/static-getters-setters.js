/* class Suma {

    static sumar(a, b) {
        return a + b
    }
}

let resultadoSuma = Suma.sumar(12, 8)

console.log(`Resultado: ${resultadoSuma}`) */

class Perro {

    constructor(nombre, color) {
        this.nombre = nombre
        this.color = color
        this.raza = null
    }

    imprimir() {
        console.log(`Nombre del perro: ${this.nombre}`)
        console.log(`Color del perro: ${this.color}`)
    }

    // metodo setter
    set setRaza(raza) {
        this.raza = raza
    }

    // metodo getter
    get getRaza() {
        return this.raza
    }
}

const cabito = new Perro("Cabito", "Blanco y Negro")

cabito.setRaza = "Pastor Alemán"

let raza = cabito.getRaza

cabito.imprimir()
console.log(`Raza del Perro: ${raza}`)