let contador = 0;
let numero = parseInt(prompt("Dime un numero positivo"))
while(numero > 0){
    contador++
    numero = parseInt(prompt("Dime un numero positivo"))
    if(numero <= 0){
        console.log("El usuario puso "+contador+" numeros")
    }
}