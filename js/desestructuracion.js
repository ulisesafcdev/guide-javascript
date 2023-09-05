/* const notasAlumno = [7,8,5,9,5]

console.log(notasAlumno)

const [matematicas, lenguaje, ciencia, sociales, ingles] = notasAlumno

console.log(`Matematicas ${matematicas}\nLenguaje: ${lenguaje}\nCiencia: ${ciencia}\nSociales: ${sociales}\nIngles: ${ingles}`) */

let persona = {
    nombres: "Ulises Alexis",
    apellidos: "Flores Chavez",
    edad: 24,
    trabaja: true
}

let {nombres, apellidos, edad, empleo} = persona

console.log(`Nombres: ${nombres}\nApellidos: ${apellidos}\nEdad: ${edad}\nTrabaja: ${empleo}`)