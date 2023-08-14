let edad = 84

/* if (edad >= 18) {
    console.log(`Eres mayor de edad`)
} else {
    console.log(`Aun eres menor de edad`)
} */

if (edad < 18) {
    console.log(`Aun eres menor de edad`)
} else if (edad >= 18 && edad < 60){
    console.log(`Eres mayor de edad`)
} else {
    console.log(`Eres un adulto mayor de la tercera edad`)
}