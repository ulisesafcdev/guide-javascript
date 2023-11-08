let usuarios = ["ulises", "juan", "mario", "oscar", "kevin", "luis", "melvin", "carlos", "toño", "messi"]

let objUser = { }

usuarios.forEach((user, index) => {
    objUser[`id_${index}`] = user
})

console.log(objUser)