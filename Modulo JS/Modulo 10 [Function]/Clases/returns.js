// Return nos devuelve el valor de una funcion

let n = 0;
while(n <= 100){
console.log(n)
let total = n + n
let totalFinal = total + n
if(n % 2 == 0){
    console.log("El numero "+n+" es par. La suma de todos los valores de parametros hasta ahora es: "+totalFinal)}
n++
} 
// Arrow functions

let sumaDeTres = (a, b, c) =>{
   return (a + b + c)
   }
   
 let cuadrado = (num)=>{
    return num * num}
   
   
let saludar = nombre => `¡Hola, ${nombre}!`;

// Arrow functions 2
let saludar2 = (nombre) =>{
    if (nombre == undefined) {
      return console.log("hola anónimo");
    } else {
      return console.log("hola " + nombre);
    }
   }

let nombreCompleto = (nombre, apellido) => console.log(`${nombre}, ${apellido}`);
   
   nombreCompleto("Ada, Lovelace")


let exclamar = (str) => {
    `str`.charCodeAt
   }
let mayusculas = (st2r) => return st2r.toUpperCase()

let minusculas = st3r => st3r.toLowerCase