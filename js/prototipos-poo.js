/* function Persona(nombre, apellido, edad) {
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

console.log(persona1) */

/* const terrestre = function () {
    if (ruedas) {
        console.log(`Tiene ruedas`)  
    } else {
        console.log(`NO tiene ruedas`)
    }
    console.log(`Medio de transporte terrestre`)
}

const aereo = function () {
    if (ruedas) {
        console.log(`Tiene ruedas`)  
    } else {
        console.log(`NO tiene ruedas`)
    }
    console.log(`Medio de transporte aéreo`)
}

const acuatico = function () {
    if (ruedas) {
        console.log(`Tiene ruedas`)  
    } else {
        console.log(`NO tiene ruedas`)
    }
    console.log(`Medio de transporte acuático`)
} */

function Transporte(ruedas, tipo) {
    this.ruedas = ruedas
    this.tipo = tipo
}

Transporte.prototype.terrestre = function () {
    if (this.ruedas) {
        console.log(`Tiene ruedas`)  
    } else {
        console.log(`NO tiene ruedas`)
    }
    console.log(`Medio de transporte terrestre`)
}

Transporte.prototype.aereo = function () {
    if (this.ruedas) {
        console.log(`Tiene ruedas`)  
    } else {
        console.log(`NO tiene ruedas`)
    }
    console.log(`Medio de transporte aéreo`)
}

Transporte.prototype.acuatico = function () {
    if (this.ruedas) {
        console.log(`Tiene ruedas`)  
    } else {
        console.log(`NO tiene ruedas`)
    }
    console.log(`Medio de transporte acuático`)
}

const auto = new Transporte(true, "vehiculo sedan")
const helicoptero = new Transporte(false, "aeronave de helices")
const barco = new Transporte(false, "nave de mar")

/* console.log(auto)
console.log(helicoptero)
console.log(barco) */

auto.terrestre()
helicoptero.aereo()
barco.acuatico()