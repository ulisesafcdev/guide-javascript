console.log(`Ejecucion #1`)

// function ejecucionDos(){
//     console.log(`Ejecucion #2`)
// }

// setTimeout(ejecucionDos, 3000)

// segunda forma
// setTimeout(function () {
//     console.log(`Ejecucion #2`)
// }, 3000)

// tercera forma
// const id = setTimeout(() => console.log(`Ejecucion ...`), 3000)
// clearTimeout(id)

console.log(`Ejecucion #3`)

const id = setInterval(() => { console.log(`Teoria y practica de JavaScript`)}, 3000);
clearInterval(id)