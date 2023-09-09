function Persona(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad

    this.show = function () {
        console.log(`Hola ${this.nombre} ${this.apellido} con edad de ${this.edad}`)
    }
}

const persona1 = new Persona("Ulises", "Flores", 24)
const persona2 = new Persona("Erlinda", "de Flores", 23)

// accediendo a métodos
persona1.show()
persona2.show()
// accediendo a propiedades
console.log(`Acceso a propiedad de ${persona1.nombre}`)
console.log(`Acceso a propiedad de ${persona2.nombre}`)