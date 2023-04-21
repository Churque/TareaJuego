var Personaje = {
    nombre :"heroe",
    vidaMaxima : 300,
    vidaActual : 300,
    Daño : 20
}


var PersonajeRival = {
    nombre :"villano",
    vidaMaxima : 100,
    vidaActual : 100,
    Daño : 20
}

console.log("Empieza el combate");

do{
    console.log(Personaje.nombre+"- "+Personaje.vidaActual+"/"+Personaje.vidaMaxima)
    console.log(PersonajeRival.nombre+"- "+PersonajeRival.vidaActual+"/"+PersonajeRival.vidaMaxima)
    console.log(Personaje.nombre+" deals "+Personaje.Daño+" DMG to "+PersonajeRival.nombre);

    PersonajeRival.vidaActual -= Personaje.Daño;

    if(PersonajeRival.vidaActual <= 0){
        console.log(PersonajeRival.nombre+" died")
        break;
    }

    console.log(Personaje.nombre+"- "+Personaje.vidaActual+"/"+Personaje.vidaMaxima)
    console.log(PersonajeRival.nombre+"- "+PersonajeRival.vidaActual+"/"+PersonajeRival.vidaMaxima)
    console.log(PersonajeRival.nombre+" deals "+PersonajeRival.Daño+" DMG to "+Personaje.nombre);
    Personaje.vidaActual -= PersonajeRival.Daño;

    if(Personaje.vidaActual <= 0){
        console.log(Personaje.nombre +" died")
        break;
    }
 } while (true );
