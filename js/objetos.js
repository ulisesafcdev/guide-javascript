const userData = {
    nombres: "Ulises Alexis",
    apellidos: "Flores Chavez",
    edad: 24,
    lenguajes: ["html5", "css3", "javascript", "php"],
    residencia: {
        pais: "El Salvador",
        departamento: "San Salvador",
        municipio: "Apopa"
    },
    estudiante: true,
    mensaje: function () {
        console.log('hello world')
    }
}

console.log(userData)