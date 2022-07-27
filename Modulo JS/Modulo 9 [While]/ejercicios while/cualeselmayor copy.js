alert("Te pedire que ingreses dos numeros, yo te diré cual es mayor o menor al primer numero ingresado. Los numeros deben ser distintos y de valor superior a 0.")
let num1 = parseInt(prompt("Dime el primer numero..."))
let num2 = parseInt(prompt("Dime el segundo numero..."))
while(num1 > 0 && num2 > 0){
    if(num1 > num2){
        alert("El primer numero ("+num1+") es mayor al segundo numero ("+num2+")")
         num1 = parseInt(prompt("Dime el primer numero..."))
         num2 = parseInt(prompt("Dime el segundo numero..."))
    } else if(num1 < num2){
        alert("El primer numero ("+num1+") es menor al segundo numero ("+num2+")")
         num1 = parseInt(prompt("Dime el primer numero..."))
         num2 = parseInt(prompt("Dime el segundo numero..."))
    }
    else if(num1 == num2){
        alert("¡Los numeros no pueden ser iguales!")
         num1 = parseInt(prompt("Dime el primer numero..."))
         num2 = parseInt(prompt("Dime el segundo numero..."))
    }
}