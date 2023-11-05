const numeros = [1,5,9,8,7,6,3,1,7]

const iterador = numeros[Symbol.iterator]()

// console.log(iterador.next())

let next = iterador.next()

while(!next.done) {
    console.log(next.value)
    next = iterador.next()
}