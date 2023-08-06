let inicio = "abc"
let fin = "xyz"

console.log(inicio.localeCompare(fin))
console.log(fin.localeCompare(inicio))

let colors = ["red", "blue", "yellow", "purple", "brown"]
console.log(colors.sort((a, b) => a.localeCompare(b, "en")))