function contarDeA_n(contar_de_a, contar_hasta){
    let n = 1;
    while(n < contar_hasta){
        n+=contar_de_a
        console.log(n)
    }
    while(n > contar_hasta){
        console.log("Excedimos el limite. Eliminaremos un numero.")
        n--
        console.log("Numero:"+n)
    }
}
contarDeA_n(2,10)