function cruzarElPuente(nombreDelAventurero) {
  let longitudDelNombre = nombreDelAventurero.length;

  if (nombreDelAventurero === "eduardo") {
    console.log("¡oh, no! es ${nombreDelAventurero}. ¡El troll se asusta y huye corriendo!, ¡el puente es tuyo!");
  } else if (longitudDelNombre > 6) {
    console.log("Tu nombre", + nombreDelAventurero,"es largo y poderoso. ¡Puedes pasar!");
  } else {
    console.log("¡Ja! Un nombre corto como", + nombreDelAventurero,"no es digno de mi puente. ¡Fuera!");
  }
}
console.log ('definir el mayor')
function mayor(a, b, c) {  // verifica si son iguales maoyres
    if (a==b && b==c) {
        console.log('Los tres números son iguales');
    } else if (a==b) {
        console .log('Los dos primeros números son iguales');
    } else if  (a==c) {
        console.log('el primer numero es igual all utlimo')

    } else if (b==c) {
        console.log('el segundo numero es igual al ultimo')
    }
    

    if (a > b && a > c) {
        console.log('el numero mayor es' + a)
    } else if (b > c && b > a) {
        console.log ('el numero mayor es' + b)
    } else{
        console.log('El número mayor es: ' + c);
    }
}

function convencerAlGuardian(frase) {
    let fraseEnMinusculas = frase.toLowerCase();
    console.log ("El guardian escucha: '" + fraseEnMinusculas + "'");
    
    if (fraseEnMinusculas.includes("secreta")) {
        console.log("guardian: 'has dicho la palabra magica. Puedes pasar. ")

    } else {
        console.log("guardian:  'no mw interesan  tus Historias . ¡largo!")

}
}

convencerAlGuardian("MI CONTRASEÑA es  SECRETA ");
convencerAlGuardian("Tengo un secreto que contarte");
convencerAlGuardian("No se nada espaecial");


console.log("\n\nLección 4.5: El Matemago");

let lingotes = 13;
let gemas = 6;

let espadasDeHierro = Math.floor(lingotes / 2); 
let espadasDeGemas = Math.floor(gemas / 1);  
let espadasReales = Math.min(espadasDeHierro, espadasDeGemas);
console.log("Puedo forjar un máximo de " + espadasReales + " espadas completas.");


function jugarAdivinanza(moneda) {
    let palabraSecreta = moneda.toLowerCase();
    console.log("la palabra  "+ palabraSecreta + "'");

    if (palabraSecreta.includes("moneda")) {
        console.log("acertado! La palabra secreta era" + palabraSecreta + "¡Eres un verdadero mago del código!")
    }else {
        console.log("Casi... pero no.")

    }
}
jugarAdivinanza("moneda");
jugarAdivinanza("frase");
