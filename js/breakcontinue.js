/* for (let i = 0; i <= 10; i++) {
    console.log(i)
    if (i == 7) {
        break
        console.log(`Ya llegue a 7`)
    }

} */

let contador = 0
let n = 0

while (contador < 5) {

    console.log(contador)
    contador++
    if (contador == 3) {
        console.log(`ya llegue a 3`)
        continue
    }
    n += contador

}