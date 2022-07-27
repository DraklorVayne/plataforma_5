// Estos parametros, darian un NaN porque carecen de
// valores asignados inicialmente.
function multiply(a, b = 1) {
    console.log (a * b);
  }
  
  multiply(5, 2);
  multiply(5);
  // multiply() seria undefined/NaN/null.

//Se puede solucionar de la siguiente manera:
let suma1 = (a = 0, b = 0) => {
    return a + b;
   }
   console.log(suma1());
// retorna 0

// Otro ejemplo:
let suma2 = (a, b = 0) => {
    return a + b;
   }
   console.log( suma2() );
   // retorna NaN (not a number)
   console.log( suma2(3) ); // 3 es el valor de a.
   // retorna 3