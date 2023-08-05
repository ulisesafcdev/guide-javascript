let str = "Lorem ipsum dolor a itnum optus in anher"

console.log(str.indexOf("in"))
console.log(str.indexOf("ina"))

let texto = "Habia una vez un gato que se estaba pelando por un hueso"

let contador = 0
let posicion = texto.indexOf("a")

while (posicion != -1) {
    contador++;
    posicion = texto.indexOf("a", posicion+1)
}

console.log(`La palabra "un" se repite en el texto ${contador} veces.`)