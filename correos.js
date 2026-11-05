// Lista de correos (válidos y no válidos)
const correos = [
  "al405638@uji.es",
  "usuario@gmail.com",
  "al415538@uji.es",
  "profesor@yahoo.es",
  "al425174@uji.es"
];

// 1. FOR: guardamos solo los que acaban en @uji.es
const correosUji = [];

for (const correo of correos) {
  if (correo.endsWith("@uji.es")) {
    correosUji.push(correo);
  } else {
    console.log(correo + " eliminado: no es de la UJI");
  }
}

// 2. WHILE: decimos el año de matrícula de cada alumno
// al40... -> 2020, al41... -> 2021, al42... -> 2022
let i = 0;

while (i < correosUji.length) {
  const correo = correosUji[i];
  const anio = 2020 + Number(correo[3]); // el 4º carácter: "0", "1" o "2"
  console.log(correo + " se matriculó en " + anio);
  i++;
}
