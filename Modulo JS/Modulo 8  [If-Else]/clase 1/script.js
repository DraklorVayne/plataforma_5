alert("Ejercicio 1 :D")
let miEdad = 22;
let maxEdad = 80;
let snackFav = "Doritos";
let cantidadSnackDia = 1;
let cantidadSnackTotal= ((maxEdad-miEdad)*365)*cantidadSnackDia;

alert("Necesitarás "+cantidadSnackTotal+" paquetes de "+snackFav+" para que te alcancen hasta los "+maxEdad+" años.")
let price = 250;
let lifecost = cantidadSnackTotal*price
alert("Wow... estará caro eh, yo que tu me lo pensaria dos veces. Te costará un total de "+lifecost+" pesos argentinos.")
/////////////////////////////////////////// DIV
alert("Ejercicio 2 D:")
let diasDeVacaciones = 15;
let presupuestoMaximo = 22000;
let comida;
comida = 30;
let gastoMaximoXComida = Math.trunc(presupuestoMaximo/comida);
alert("Podes gastar "+gastoMaximoXComida+" pesos en cada comida para que te alcance la plata durante los "+diasDeVacaciones+" dias de viaje.")
/// ECMASCRIPT23
let nombre = prompt("¿Cual es su nombre sr?");
let precio = parseFloat(prompt("¿Cual es el precio de lo que llevara?"))
let cantidad = parseFloat(prompt("¿Cuanto llevara?"))
let total = precio*cantidad;
let totalf = Math.ceil(total) // redondea hacia arriba
let abonar = `Sr ${nombre} usted deberá abonar ${totalf} pesos.`
alert(abonar)
