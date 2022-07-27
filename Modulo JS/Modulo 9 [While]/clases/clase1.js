let cancion = ""
let elefante = 1
let limite = 5  
while(elefante <= limite){
if(elefante == 1){
    cancion += elefante + "elefante se balanceaba"
} else{
    cancion += elefante + "elefantes se balanceaban"
}
    elefante++
}
console.log(cancion)
//////// EXTRA CREDIT WHILE
let minutos = 5
let minutero = 1
let segundos = 60
let segundero = 1

while(minutero <= minutos){
  while(segundero < segundos){
    if(segundero > 1 && minutero > 1){
        console.log(minutero + " minutos, " + segundero + " segundos.")
    segundero++// Esta es la condición de corte o medida de seguridad del loop anidado.
    } else if(segundero >= 1 && minutero > 1){
        console.log(minutero + " minutos, " + segundero + " segundo.")
    segundero++
    } else if(minutero == 1 && segundero > 1){
        console.log(minutero + " minuto, " + segundero + " segundos.")
        segundero++
    } else if (minutero == 1 && segundero == 1){
        console.log(minutero + " minuto, " + segundero + " segundo.")
        segundero++
    }
  }
  segundero = 1 // Reestablecemos el valor de la variable para que vuelva a ser true.
  minutero++// Esta es la condición de corte o medida de seguridad del loop madre.
}
////////////
///SI O SI - AL NEGAR UN STRING VACIO, SE CONV EN VERDADERO Y SIGUE EL LOOP
let input

while( !(input = prompt('Escriba su nombre, por favor.')) ){
  alert("No recibimos la información.")
}

alert("¡Gracias! Su nombre es: " + input + ".")

