const registro = {
    "nombres": "",
    "apellidos": "",
    "edad": 0
}

const handler = {
    set(obj, prop, valor) {

        // validacion
        if(Object.keys(obj).indexOf(prop) === -1) {
            return console.warn("No puedes asignar un valor a una propiedad que no existe.")
        }

        obj[prop] = valor
    }
}

const usuario1 = new Proxy(registro, handler)

usuario1.nombres = "Leonel Andres"
usuario1.apellidos = "Messi Cuccitini"
usuario1.edad = 35


usuario1.empleo = true
console.log(usuario1)