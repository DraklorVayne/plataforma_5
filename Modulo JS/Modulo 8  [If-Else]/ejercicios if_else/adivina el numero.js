let numeroSecreto = 5;
let respuesta = parseInt(prompt("¿Sabes cual es el numero secreto? (del 0 al 10)"));
if(respuesta == numeroSecreto){
    alert("Yeei! Adivinaste el numero secreto (5)")
} else if(respuesta > numeroSecreto){
    alert("Estas cerca, pero el nro secreto es menor al numero que ingresaste.")
} else if(respuesta < numeroSecreto){
    alert("Estas cerca, pero el nro secreto es mayor al numero que ingresaste.")
}