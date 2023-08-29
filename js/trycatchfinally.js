/* throw "Hubo un error maje" */

function numeroDelMes(numeroMes) {
    numeroMes = numeroMes - 1

    const meses = [
        "Enero", 
        "Febrero", 
        "Marzo", 
        "Abril", 
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]

    if (meses[numeroMes]) {
        return meses[numeroMes]
    } else {
        throw "Numero del mes invalido"
    }
}


try {
    let nombreMes = numeroDelMes(3)
    console.log(nombreMes)
} catch (error) {
    console.error(error)
} finally {
    console.info("Tarea finalizada")
}
