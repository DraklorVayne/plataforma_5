let numero = prompt("¿Podrias decirnos tu numero favorito? Nosotros te diremos si es par");
let esPar = numero % 2;

if(esPar == false){
    alert("Si, el numero "+numero+" es par.")
}
else{
    alert("No. El numero "+numero+" es impar.")
}