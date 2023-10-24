let dui = Symbol('identificador')

let datosPersona = {
    [dui]: '963258741',
    nombre: 'ulises',
    apellido: 'flores',
    edad: 24,
    dui: '963258741'
}

console.log(datosPersona)

for(let prop in datosPersona) {
    console.log(`${prop}: ${datosPersona[prop]}`)
}

console.log(Object.getOwnPropertySymbols(datosPersona))