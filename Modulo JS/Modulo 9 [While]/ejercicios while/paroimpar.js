let numero = parseInt(prompt("Dime un numero y te dire si es par o impar."));
while(numero > 0){
    if(numero % 2 == 0)
    alert("El numero "+numero+" es par")
    else{
        alert("El numero "+numero+" es impar")
    }
    numero = prompt("Dime un numero y te dire si es par o impar.");
}