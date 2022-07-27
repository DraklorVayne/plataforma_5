

function factorial (n) {
    // Start function
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

factorial(prompt("¿Dime un numero?")) //120
factorial(2) //2
factorial(10) //3628800

// Bonus 1

const longitudDelNombre = (nombre = "") => nombre.length

console.log( longitudDelNombre() ); // 0
console.log( longitudDelNombre('Ana') ); // 3


// Bonus 2

const saludarVisitanteWeb = (nombreUsuario) => {
    if (nombreUsuario === undefined) {
      return '¡Hola, anónimo!';
    } else {
      return `¡Hola, ${nombreUsuario}!`;
    }
   }
   console.log( saludarVisitanteWeb() ); // ¡Hola, anónimo!
   console.log( saludarVisitanteWeb('José') ); // ¡Hola, José!