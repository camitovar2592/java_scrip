//Ejercicio 1

let colores = ["Amarillo", "Azul", "Rojo", "Verde", "Morado"];

console.log("Primer color:", colores[0]);

console.log("Último color:", colores[colores.length - 1]);

// Ejercicio 2

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 651351, 35136136];

console.log("El array tiene:", numeros.length, "elementos");

// Ejercicio 3

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Ejercicio 4

let numeros1 = [15, 80, 23, 120, 67, 35138];
let numeroMayor = numeros1[0];

for (let i = 0; i < numeros1.length; i++) {
    if (numeros1[i] > numeroMayor) {
        numeroMayor = numeros1[i];
    }
}

console.log("El numero mayor es: " + numeroMayor);

// Ejercicio 5

let productos = [
    { nombre: "gafas", precio: 250 },
    { nombre: "gorra", precio: 400 },
    { nombre: "camisa", precio: 600 },
    { nombre: "pantalon", precio: 750 }
];

let precioTotal = 0;

for (let i = 0; i < productos.length; i++) {
    precioTotal += productos[i].precio;
}

console.log("El precio total es: " + precioTotal);

// Ejercicio 6

let estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Pedro", nota: 2.8 },
    { nombre: "Laura", nota: 4.0 },
    { nombre: "Carlos", nota: 2.5 },
    { nombre: "Maicol", nota: 5.0 }
];

for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota >= 3.0) {
        console.log(estudiantes[i].nombre + " - " + estudiantes[i].nota);
    }
}

// Ejercicio 7

let ejercicios = [
    { nombre: "Sentadillas", peso: 80 },
    { nombre: "Press banca", peso: 60 },
    { nombre: "Peso muerto", peso: 120 },
    { nombre: "Dominadas lastradas", peso: 25 }
];

let maximoPeso = ejercicios[0].peso;
let ejercicioMasPesado = ejercicios[0].nombre;

for (let i = 1; i < ejercicios.length; i++) {
    if (ejercicios[i].peso > maximoPeso) {
        maximoPeso = ejercicios[i].peso;
        ejercicioMasPesado = ejercicios[i].nombre;
    }
}

console.log("El ejercicio más pesado es: " + ejercicioMasPesado + " con " + maximoPeso + " kg");

// Ejercicio 8

let boxeadores = [
    { nombre: "Floyd Maywether", victorias: 50, derrotas: 0, kos: 27 },
    { nombre: "Mike Tyson", victorias: 50, derrotas: 6, kos: 44 },
    { nombre: "Muhammad Ali", victorias: 56, derrotas: 5, kos: 37 },
    { nombre: "Gennadiy Golovkin", victorias: 42, derrotas: 2, kos: 37 }
];

let masVictorias = boxeadores[0];
let masKOs = boxeadores[0];

for (let i = 0; i < boxeadores.length; i++) {
    let b = boxeadores[i]
    let peleasTotales = b.victorias + b.derrotas;
    let porcentajeVictorias = (b.victorias / peleasTotales * 100).toFixed(1);
    let porcentajeKOs = (b.kos / peleasTotales * 100).toFixed(1);

    console.log(`${b.nombre}`);
    console.log(`Peleas totales: ${peleasTotales}`);
    console.log(`% Victorias: ${porcentajeVictorias}%`);
    console.log(`% KOs: ${porcentajeKOs}%`);

    if (b.victorias > masVictorias.victorias) {
        masVictorias = b;
    }

    if (b.kos > masKOs.kos) {
        masKOs = b;
    }
}

console.log(`El boxeador con más victorias es: ${masVictorias.nombre} (${masVictorias.victorias})`);
console.log(`El boxeador con más KOs es: ${masKOs.nombre} (${masKOs.kos})`);