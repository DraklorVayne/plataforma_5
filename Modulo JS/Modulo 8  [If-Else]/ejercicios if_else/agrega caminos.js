let edad = parseInt(prompt("¿Cual es tu edad?"));
if(edad < 0){
    alert("Error, su edad no es valida ")
}
if(edad >= 21){
    alert("Bienvenido, y felicidades por haber llegado a la mayoria de edad")
}
if((edad % 2 ) == 1){
    alert("Sabias que tu edad es un numero impar?")
}