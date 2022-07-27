let n = prompt("¿Elegirias un numero del 1 al 10?")
let c = 0

while(n = "" || n > 10 || n <= 0){
    n = prompt("Elegiste un numero invalido! Debe ser del 1 al 10.")
}

let rn = Math.ceil(Math.random() * 10) + n
let i = prompt("Ahora, adivina el numero magico!")

contador++

while(i != rn){
if(i > rn){
    alert("El numero que ingresaste es menor al numero magico")
    i = prompt("Ingresa otro numero!")
    contador++
    }

else{
    alert("El numero que ingresaste es mayor al numero magico")
    i = prompt("Ingresa otro numero!")
    contador++
    }
}

alert("Ganaste! Te llevo "+c+" intentos.")