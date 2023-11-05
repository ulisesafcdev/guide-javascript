let credito = {
    "saldo": 1000,
    "cuota": 49.15,
    "interes mensual": 5.15
}

let perfil1 = {
    "nombre": "ulisesafcdev", 
    "edad": 24
}

let perfil2 = {
    "nombre": "odiseodev",
    "edad": 24
}

let ws = new WeakSet()


/* ws.add(credito)
ws.add(perfil1)
ws.add(perfil2)

console.log(ws.delete(perfil1)) // true

console.log(ws.has(credito)) // true
console.log(ws.has(perfil2)) // true
console.log(ws.has(perfil1)) // false

console.log(ws) */

let wm = new WeakMap()

let obj1 = {
    "name": "user1"
}
let obj2 = {
    "name": "user2"
}
let obj3 = {
    "name": "user3"
}

wm.set(obj1, "primer objeto")
wm.set(obj2, "segundo objeto")
wm.set(obj3, "tercero objeto")

console.log(wm)

console.log(wm.get(obj1))
console.log(wm.get(obj2))
console.log(wm.get(obj3))

console.log(wm.has(obj3))

wm.delete(obj3)
console.log(wm.delete(obj2))

console.log(wm)
