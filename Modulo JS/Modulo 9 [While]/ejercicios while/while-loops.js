/////// wHILE LOOPS - EJERCICIO 1
/*
Paso 1: Todos los números entre -10 y 19.
Paso 2: Todos los números pares entre 10 y 40.
Paso 3: Todos los números impares entre 300 y 333.
Paso 4: Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.
*/

// PASO 1
let todosLosNumeros1 = -10;
while(todosLosNumeros1 <= 19){
    console.log(todosLosNumeros1)
    todosLosNumeros1++   
}
//
// PASO 2
let todosLosPares2 = 10;
while(todosLosPares2 < 40){
    console.log(todosLosPares2)
    todosLosPares2+=2
}
//
// PASO 3
let todosLosImpares3 = 301
while(todosLosImpares3 < 333){
    let cuenta = todosLosImpares3 % 2 == 0
    if (cuenta == true){
        console.log(todosLosImpares3)
        todosLosImpares3++
    }else{
        console.log(todosLosImpares3)
        todosLosImpares3+=2
    }
}
//
// PASO 4 --- a retocar---
let todosLosDivisibles = 5
while(todosLosDivisibles  <= 45)
{
    if(todosLosDivisibles % 3 == 0 && todosLosDivisibles % 5 == 0){
        console.log(todosLosDivisibles)
        todosLosDivisibles++
    } else{
    todosLosDivisibles++
    }
}
