if(true == false){
    alert("Sip, 0 es negativo");
if(0 == true){
    alert("Mmm nope.")
}





}
   
let pwd = 123
let userPWD = prompt("¿Cual es la contraseña del sitio?")
if (userPWD == pwd){
    window.location = "http://www.google.com"}
// "|| (o)"
// "&& (ambas)"
// != (diferente de)
// !== comparador desigualdad estricto (string-number)
// === comparador igualdad estricto
// ! negación
// % divide un numero y deja el resto
// ejemplo if(!(numero % 2 = 0 (par)))
// operador ternario, alternativo a else if. Requiere una condición, un signo de interrogación (?) y los dos caminos, true y false, separados por dos puntos (:). Ejem: numTragos > 0 ? alert("msg") : alert("msg 2")