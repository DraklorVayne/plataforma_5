let genero = prompt("Hola! ¿Sos hombre o mujer?");
let edad = prompt("¿Y que edad tenés?");

if(genero.toLowerCase() == "mujer" && edad >= 60){
    alert("Sip, ya podes jubilarte.")
} else if(genero.toLowerCase() == "mujer" && edad < 60){
    alert("Alto ahi vaquera, a partir de los 60 años podes jubilarte, vos tenés "+edad+" años.")   
}
if(genero.toLowerCase() == "hombre" && edad >= 65){
    alert("Sip, ya podes jubilarte.")
} else if(genero.toLowerCase() == "hombre" && edad < 65){
    alert("Alto ahi vaquero, a partir de los 65 años podes jubilarte, vos tenés "+edad+" años.")   
}

// EXTRA BONUS -- OPTIMIZACIÓN DE CODIGO
let genero = prompt("Hola! ¿Sos hombre o mujer?");
let edad = prompt("¿Y que edad tenés?");
if(genero.toLowerCase() == "mujer" && edad >=60 || genero.toLowerCase() == "hombre" && edad >=65){
    alert("Si. Jubilese maldit@ ancian@.")
} else{alert("no podes jubilarte todavia.")}
// ELSE ES OPCIONAL. nomas pa tecnicatura.