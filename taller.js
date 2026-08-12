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
  { nombre: "pantalon", precio: 750}
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

//