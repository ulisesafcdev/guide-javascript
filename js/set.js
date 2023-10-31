let datos = new Set([5,6,9,9,9,8,2,2,2,"hola", "ola", true, false, {}, []])

console.log(datos.size)

datos.add("ulisesafcdev")
datos.add("odiseodev")

console.log(datos.has("hola"))
console.log(datos.has(false))

datos.delete(true)
datos.delete(false)

datos.clear()

console.log(datos)