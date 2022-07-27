let i = 1
while(i <= 100){
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz "+i)
        i++
    }
    else if(i % 3 == 0){
        console.log("Fizz "+contador)
        contador++
    }
    else if(contador % 5 == 0){
        console.log("Buzz "+contador)
        contador++
    } else{
        console.log(contador)
        contador++
    }
}

// Refactorización

let i = 1
while(i <= 100){
    if((!(i % 3)) && (!(i % 5 == 0))){
        console.log("FizzBuzz "+i)
        i++
    }
    else if(!(i % 3)){
        console.log("Fizz "+i)
        i++
    }
    else if(!(i % 5)){
        console.log("Buzz "+i)
        i++
    } else{
        console.log(i)
        i++
    }
}