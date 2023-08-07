let lenguajes = ['php', 'java', 'csharp', 'javascript']

/* console.log(lenguajes)

console.log(lenguajes[2])

console.log(lenguajes[0])
console.log(lenguajes[lenguajes.length - 1]) */

lenguajes.forEach((el, i) => {
    console.log(`${i}: ${el}`)
})
