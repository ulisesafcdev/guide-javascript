const cuadrado = function (num) {

    if (typeof num == "undefined") return console.warn("Debes ingresar un valor numerico.");
    if (typeof num !== "number") return console.warn("Ingresa un numero para evaluar.");

    return num * num
}

let resultado = cuadrado(3)
console.log(resultado)