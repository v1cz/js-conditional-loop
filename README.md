# js-conditional-loop
#introduces un correo
#lo añandes a una lista 
#recorres la lista y eliminas los que no acaban en @uji.es for 
#con lo que queda haces un while que recorra la lista y diga el año de matrícula while 

prompt:
tengo que hacer un programa en javaScript. mi idea: 
introducimos correos en una lista. luego con un bucle for la recorremos y todos los que NO acaben en @uji.es los eliminamos de la lista (aquí usamos el for)
después con un while la volvemos a recorrer y tenemos que decir en qué año se matriculó cada alumno. para esto sabemos que si eres al405638@uji.es te matricuaste en el 2020, si tienes al415538@uji.es te matriculaste en 2021, si tienes al 425174@uji.es te matricuaste en 2022




// 1. Lista inicial de correos (incluye válidos y no válidos)
const correos = [
  "al405638@uji.es",
  "usuario@gmail.com",
  "al415538@uji.es",
  "profesor@yahoo.es",
  "al425174@uji.es",
  "estudiante@hotmail.com"
];

console.log("--- Lista original ---");
console.log(correos);

// 2. Bucle FOR: eliminar los que NO terminen en @uji.es
// TRUCO IMPORTANTE: Al eliminar elementos de un array con .splice(), 
// es mejor recorrerlo de atrás hacia adelante para no saltarse posiciones.
for (let i = correos.length - 1; i >= 0; i--) {
  if (!correos[i].endsWith("@uji.es")) {
    correos.splice(i, 1); // Elimina 1 elemento en la posición i
  }
}

console.log("\n--- Lista filtrada (solo @uji.es) ---");
console.log(correos);

// 3. Bucle WHILE: calcular el año de matrícula
console.log("\n--- Años de matrícula ---");

let indice = 0;

while (indice < correos.length) {
  const correoActual = correos[indice];

  // Extraemos los dos dígitos después de 'al' (posiciones 2 y 3)
  // Ej: de "al405638@uji.es", toma "40"
  const codigoStr = correoActual.slice(2, 4);
  const codigoNum = parseInt(codigoStr, 10);

  // Relación: 40 -> 2020, 41 -> 2021, 42 -> 2022
  // Año = 2000 + (código - 20)
  const anio = 2000 + (codigoNum - 20);

  console.log(`El alumno con correo ${correoActual} se matriculó en el año ${anio}.`);

  indice++; // Incrementamos el contador para evitar un bucle infinito
}
