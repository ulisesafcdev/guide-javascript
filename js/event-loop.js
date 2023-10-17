// javascript sincrono bloqueante

/* function uno() {
    console.log(`Soy la funcion numero uno`)
}

function dos() {
    console.log(`Soy la funcion numero dos`)
}
function tres() {
    console.log(`Soy la funcion numero tres`)
}

uno()
dos()
tres() */

/* function ejecucionUno() {
    console.log(`Terminare ejecucion uno para continuar con la siguiente ejecucion...`)
}

function ejecucionDos() {
    ejecucionUno()
    console.log(`Terminare ejecucion dos para continuar con la siguiente ejecucion...`)
}

function ejecucionTres() {
    ejecucionDos()
    console.log(`Terminare ejecucion tres para continuar con la siguiente ejecucion...`)
}

ejecucionTres() */

// javascript asincrono y no bloqueante

/* function mensajeTarde() {
    console.log(`Soy un mensaje retardado...`)
}

function mensajeRapido() {
    console.log(`Soy un mensaje rapidooooooooo...`)
}

setTimeout(mensajeTarde, 3000)
mensajeRapido() */

/* console.log(`INICIO`)

function dos() {
    setTimeout(() => {
        console.log(`Dos`)
    }, 1000)
}

function uno() {
    setTimeout(() => {
        console.log(`Uno`)
    }, 0)

    dos()
    console.log(`Tres`)
}

uno()

console.log(`FIN`) */

// callback

function saludar(nombre) {
    alert(`Holaaa ${nombre}`)
}

function procesarNombreUsuario(callback) {
    let usuario = prompt(`Ingrese su nombre:`)
    callback(usuario)
}

// procesarNombreUsuario(saludar)
/* function elevarAlCuadrado(value, callback) {
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | (Math.random() * 1000))
}

elevarAlCuadrado(2, (value, result) => {
    console.log(`Callback: ${value} | ${result}`)
    elevarAlCuadrado(4, (value, result) => {
        console.log(`Callback: ${value} | ${result}`)
        elevarAlCuadrado(8, (value, result) => {
            console.log(`Callback: ${value} | ${result}`)
        })
    })
}) */

/* 
function tablaDeMultiplicar(value, limite, callback) {
    console.log(`Tabla del ${value}`)
    console.log(`-------------`)
    let i = 1
    let rs = 0
    for(i; i <= limite; i++) {
        rs = value * i
        console.log(`${value} * ${i} = ${rs}`)
    }
    console.log(`-------------`)
    setTimeout(() => {
        callback()
    }, 0 | (Math.random() * 1000))
}

tablaDeMultiplicar(1, 10, () => {
    tablaDeMultiplicar(2, 10, () => {
        tablaDeMultiplicar(3, 10, () => {
            tablaDeMultiplicar(4, 10, () => {
                tablaDeMultiplicar(5, 10, () => {
                    tablaDeMultiplicar(6, 10, () => {
                        tablaDeMultiplicar(7, 10, () => {
                            tablaDeMultiplicar(8, 10, () => {
                                tablaDeMultiplicar(9, 10, () => {
                                    tablaDeMultiplicar(10, 10, () => {
                                        
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

 */

/* 
const tablaDeMultiplicar = (value) => {

    if (typeof value !== "number") {
        return Promise.reject(`Solo se permiten valores numericos`)
    }

    console.log(`------------`)
    console.log(`Tabla del ${value}`)
    console.log(`------------`)
    
    for(let i = 1; i <= 10; i++) {
        let rs = value * i
        console.log(`${value} * ${i} = ${rs}`)
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 0 | (Math.random() * 2000))
    })
}

tablaDeMultiplicar(1)
    .then(result => {
        tablaDeMultiplicar(2)
    })
    .then(result => {
        tablaDeMultiplicar(3)
    })
    .then(result => {
        tablaDeMultiplicar("hola")
    })
    .then(result => {
        tablaDeMultiplicar(5)
    })
    .then(result => {
        tablaDeMultiplicar(6)
    })
    .then(result => {
        tablaDeMultiplicar(7)
    })
    .then(result => {
        tablaDeMultiplicar(8)
    })
    .then(result => {
        tablaDeMultiplicar(9)
    })
    .then(result => {
        tablaDeMultiplicar(10)
    })
    .then(result => {})
    .catch(err => console.log(err)) */

// async / await
    
const tablaDeMultiplicar = (value) => {

    if (typeof value !== "number") {
        return Promise.reject(`Solo se permiten valores numericos`)
    }

    console.log(`------------`)
    console.log(`Tabla del ${value}`)
    console.log(`------------`)
    
    for(let i = 1; i <= 10; i++) {
        let rs = value * i
        console.log(`${value} * ${i} = ${rs}`)
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 0 | (Math.random() * 2000))
    })
}

const resultFunctionAsync = async () => {

    try {

        await tablaDeMultiplicar(1)
        await tablaDeMultiplicar(2)
        await tablaDeMultiplicar(3)
        await tablaDeMultiplicar(4)
        await tablaDeMultiplicar(5)
        await tablaDeMultiplicar(6)
        await tablaDeMultiplicar(7)
        await tablaDeMultiplicar("jk")
        await tablaDeMultiplicar(9)
        await tablaDeMultiplicar(10)
        
    } catch (err) {
        console.error(err)
    }
    
}

resultFunctionAsync()