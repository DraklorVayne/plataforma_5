
function fizzBuzz2(max, word1, word2, word3, nUno, nDos){

    let i = 1
    let acumulado = "";
    let mensaje = "";
while(i <= max){
    if((!(i % nUno)) && (!(i % nDos))){
        console.log(word1+"("+i+")")
        i++
    }
    else if(!(i % nUno)){
        console.log(word2+"("+i+")")
        i++
    }
    else if(!(i % nDos)){
        console.log(word3+"("+i+")")
        i++
    } else{
        i++
    }
    if (i < max) {
        acumulado += `${mensaje || i},`;
      } else {
        acumulado += `${mensaje || i}`;
      }
    }
    return string_acumulado;
}

fizzBuzz2(12, "FichBuch", "Fich", "FichBuch", 2, 4)