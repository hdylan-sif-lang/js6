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
jugarAdivinanza("python");
jugarAdivinanza("java");
jugarAdivinanza("javascript");

let resultadoMoneda = Math.random() < 0.5 ? "Cara" : "Cruz";
console.log("Resultado de la moneda: " + resultadoMoneda);


for (let i = 1; i <= 5; i++) {
  console.log("Invocando al guerrero esqueleto número " + i);
}
console.log("¡Ejército levantado!");

function contruirTorre(numeroDePisos) {
    for (let i = 1; i <= numeroDePisos; i++) {
        console.log("Construyendo piso número " + i+ "...");
    }
    console.log("la torre de " + numeroDePisos + " pisos ha sido completada y de alza hacia los cielos.");
}


contruirTorre(8);

const sumarFlecha = (a, b) => a + b;

const saludarComplejo = (nombre) => {
    let saludo = "¡Hola, " + nombre + "!";
    conosle.log(saludo);
};

const puedeCruzar = nombre => nombre.length > 6;
const calcularCostosDeEspadas = cantidadDeEspadas => cantidadDeEspadas * 10;

console.log("¿Puedes cruzar Alexiño?: " +puedeCruzar("Alexiño"));
console.log("Costo de 3 espadas: " + calcularCostosDeEspadas(3) + "monedas.");


(function(nombreDelAgente) {
    let mensajeSecreto = " La reunion es al anochecer."
    console.log("mision para el agente " + nombreDelAgente + ":" + mensajeSecreto);
} )("007");

(function() {
    let ingredienteA = "polvo de estrella";
    let ingredienteB = "escencia de luna";
    let ingredienteC = "posicionde clarividencia hecha con: " + ingredienteA + "y" + ingredienteB;
    console.log("¡Experimento completado! se ha creado la: " + posiconFinal);
})();


let ingredientes = ["Ojo de tritón", "Pata de rana", "Ala de murciélago", "Lana de murciélago"];

console.log(ingredientes[0]);
console.log(ingredientes[1]); 
for (let ingrediente of ingredientes){
  console.log("Ingrediente listo: " + ingrediente);
}








