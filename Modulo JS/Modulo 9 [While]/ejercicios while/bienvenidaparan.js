let uno = "1"
let dos = "2"
let tres = "3"
let cuatro = "4"
let cinco = "5"
let ingreso = prompt("¿Nombre?");
while(ingreso == uno || ingreso == dos || ingreso == tres || ingreso == cuatro || ingreso == cinco){
    if(ingreso == uno){
        console.log("Bienvenido 1")
        ingreso = prompt("¿Nombre?");
    }
    if(ingreso == dos){
        console.log("Bienvenido 2, te presento a 1.")
        ingreso = prompt("¿Nombre?");
    }
    if(ingreso == tres){
        console.log("Bienvenido 3, te presento a 1 y 2.")
        ingreso = prompt("¿Nombre?");
    }
    if(ingreso == cuatro){
        console.log("Bienvenido 4, te presento a 1, 2 y 3.")
        ingreso = prompt("¿Nombre?");
    }
    if(ingreso == cuatro){
        console.log("Bienvenido 4, te presento a 1, 2 y 3.")
        ingreso = prompt("¿Nombre?");
    }
    if(ingreso == cinco){
        console.log("Bienvenido 5, te presento a 1, 2, 3 y 4.")
        ingreso = prompt("¿Nombre?");
    }
    else{
        console.log("Tu nombre no esta en la lista.")
    }
}
alert("Cerramos la fila por hoy.")
