/* console.log(this)
console.log(window)
console.log(this === window)

*/
// this.miVariable = "odiseodev"
// console.log(this)

/* function imprimir() {
    console.log(this.miVariable)
}

imprimir() // nos devuelve el valor de la variable


let obj = {
    miVariable: "messi",
    imprimir: function() {
        console.log(this.miVariable)
    }
}

obj.imprimir()

let obj2 = {
    miVariable: "cr7",
    imprimir
}

obj2.imprimir()

console.log(`///////////////////////////`) */

/* function Usuario(miVariable) {
    this.miVariable = miVariable

    // return console.log(this.miVariable)
    
    /* return function () {
        console.log(this.miVariable)
    } */

    /* return () => console.log(this.miVariable)
} */

// let odiseo = new Usuario("Odiseo")
// odiseo
// odiseo()
// odiseo()


console.log(this)

this.lugar = "Contexto global."

function saludar(texto) {
    console.log(`${this.lugar} y el parametro es: ${texto}`)
}

// saludar()

let miObj = {
    lugar: "Contexto objeto."
}

saludar.call(miObj, "parametro desde el metodo call.")
saludar.apply(miObj, ["parametro desde el metodo apply."])

/* //////////////////////////////////////////////////////// */

let club = {
    nombre: "FC Barcelona",
    imprimir: function () {
        console.log(this.nombre)
    }
}

club.imprimir()

let liga = {
    nombreliga: "liga espaniola",
    imprimir: club.imprimir.bind(club)
}

liga.imprimir()