coleccionRandom=["Hola", 22, true, null, function(){console.log("hello")}, ["hola", "chau"]] // Este Arreglo tiene distintos tipos de datos.

coleccionRandom[4]
coleccionRandom[4](0)
coleccionRandom[5] 
coleccionRandom[5][0]  

// Funcion devuelve undefined porque el lenght siempre es 1 numero mayor a la cantidad total de variables en un arreglo.
numbers =[22, 33, 54, 66, 72]

console.log(numbers[numbers.length])

// Se arregla con
console.log(numbers[numbers.length - 1])

let grupoDeAmigos =[
    ["Harry", "Ron", "Hermione"],
    ["Spiderman", "Hulk", "Ironman"],
    ["Penélope Glamour", "Pierre Nodoyuna","Patán"]
    ]
    console.log(grupoDeAmigos[2][0])

//  Lista de Super

let listaDeSuper =["Manzana", "Banana", "Durazno", "Coco"]

listaDeSuper[0]
listaDeSuper.push("Poppin","Ruppin","Muppin")
let ultimoElemento = listaDeSuper[listaDeSuper.length - 1]
ultimoElemento

// Metodos | Push -> Mete arrays dentro de un arreglo. | Pop -> Saca un arrey de un arreglo global || estos se ejecutan al final del array.
// Pop no debe llevar argumentos y solo quitará 1 elemento por vez.
Los valores de pop deben guardarse inmediatamente o se perderán permanentemente.

// metodos extras: existe shift y unshift que hacen lo mismo pero al principio del arreglo.
nombreArreglo.unshift(elemento/s)
nombreArreglo.shift() // Retorna el o los valores eliminados

let panas = ["bruno", "franco", "santi", "franco", "pedro"]
let nombre = prompt("Esta este nombre en tu lista?")
if (panas.indexOf(nombre) == -1){
    panas.push(nombre)
    console.log("Seria bueno tener un amigo llamado "+nombre+". Lo añadiremos")
}
