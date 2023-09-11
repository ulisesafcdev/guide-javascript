function Persona(nombre, apellido, edad, genero) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.genero = genero
}

Persona.prototype.caminar = function () {
    console.log(`${this.nombre}: Caminando...`)
}

Persona.prototype.hablar = function () {
    console.log(`${this.nombre}: Hablando...`)
}

Persona.prototype.comer = function () {
    console.log(`${this.nombre}: Comiendo`)
}

Persona.prototype.dormir = function () {
    console.log(`${this.nombre}: Durmiendo...`)
}

const persona1 = new Persona("Ulises", "Flores", 24, true)

/* persona1.caminar()
persona1.hablar()
persona1.comer()
persona1.dormir()

console.log(`*************************************`) */

function Empleado(nombre, apellido, edad, genero, horario, salario) {
    this.super = Persona
    this.super(nombre, apellido, edad, genero)
    this.horario = horario
    this.salario = salario
}

Empleado.prototype = new Persona()
Empleado.prototype.constructor = Persona

Empleado.prototype.trabajar = function () {
    console.log(`${this.nombre}: Trabajando...`)
}

Empleado.prototype.comer = function () {
    console.log(`${this.nombre}: Comiendo almuerzo`)
}

const persona2 = new Empleado("Alexis", "Soriano", 2, true, "9 a 9", 800.00)
// console.log(persona2)
persona2.hablar()
persona2.trabajar()
persona2.comer()