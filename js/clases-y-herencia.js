class Persona {

    constructor(nombre, apellido, edad, genero) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.genero = genero
    }

    caminar() {
        console.log(`${this.nombre} - caminando...`)
    }
    
    correr() {
        console.log(`${this.nombre} - corriendo...`)
    }
    
    hablar() {
        console.log(`${this.nombre} - hablando...`)
    }
    
    comer() {
        console.log(`${this.nombre} - comiendo...`)
    }

}

/* const jorge = new Persona("Jorge", "Dindo", 22, true)
// console.log(jorge)
jorge.caminar()
jorge.correr()
jorge.hablar()
jorge.comer() */

class Empleado extends Persona {

    constructor(nombre, apellido, edad, genero, horario, salario) {
        super(nombre, apellido, edad, genero)
        this.horario = horario
        this.salario = salario
    }

    trabajar() {
        console.log(`${this.nombre} - trabajando...`)
    }

    hablar() {
        console.log(`${this.nombre} - hablando en el trabajo...`)
    }

}

const melvin = new Empleado("Melvin", "Dindo", 27, true, "10 a 7", 820.00)

console.log(melvin)