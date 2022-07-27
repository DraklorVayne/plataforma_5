let traduccion = prompt("Ingresa una de las siguientes palabras 'Casa' - 'Perro' - 'Pelota' - 'Arbol' - 'Genio'.").toLowerCase()
switch(traduccion){
    case "casa": alert("Home")
    break
    case "perro": alert("Dog")
    break
    case "pelota": alert("Ball")
    break
    case "arbol": alert("Tree")
    break
    case "genio": alert("Genius")
    break
    default: alert("La palabra indicada es incorrecta.")
    break
}
let valoracion = prompt("¿Cual es tu valoracion, del 1 al 5, de la pelicula? '1 significa muy mala, y 5 significa muy buena.'");
switch(valoracion){
    case("1"): alert("Calificaste la película como 'Muy Mala'. Lamentamos que tu experiencia haya sido negativa.")
    break
    case("2"): alert("Calificaste la película como 'Mala'. Lamentamos que tu experiencia haya sido negativa.")
    break
    case("3"): alert("Calificaste la película como 'Mediocre'. Lamentamos que tu experiencia haya sido negativa.")
    break
    case("4"): alert("Calificaste la película como 'Buena'. Nos alegramos de que te haya gustado!")
    break
    case("5"): alert("Calificaste la película como 'Muy Buena'. Nos alegramos de que te haya gustado!")
    break
    default: alert("Eso no es un numero valido...")
}