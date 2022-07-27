// Crea una funcion decirHola

function sayHi(nombre){
    console.log("¡Hola "+nombre+"!")
}
sayHi("Paula")
sayHi("Paulo")
sayHi("Pauli")
sayHi("Paulu")
sayHi("Paule")

// Crea una funcion con multiples parametros
// Los parametros sin completar se definen como undefined
// Los parametros adicionales a la funcion original, son ignorados.

function multiplesParametros(nombre1, nombre2, nombre3){
    console.log("¡Hola "+nombre1+"!")
    console.log("¡Hola "+nombre2+"!")
    console.log("¡Hola "+nombre3+"!")
}

multiplesParametros("Ron", "Harry", "Hermione")
multiplesParametros("Ron", "Harry", "Hermione", "EstoSeraIgnorado")
multiplesParametros("Ron", "Habrá un undefined aquí")

// Las funciones pueden recibir variables personalizadas
// El function <nombre>(parametro) puede recibir <VARIABLES>

function cumpleanito(persona){
    console.log("Que los cumplas feliz "+persona)
}
let nombre = prompt("Cual es tu nombre?")
cumpleanito(nombre)