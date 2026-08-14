// export function mostrarNombres(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].nombre)
//     }
// }


// export function mostrarEdad(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].edad)
//     }
// }

// export function mostrarNotaFinal(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].notaFinal)
//     }
// }

// export function mostrarPrecioSemestre(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].precioSemestre)
//     }
// }

// export function obtenerPromedio(array){
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].notaFinal>=3.5);       
//    console.log('aprobado')
        
//     }
// }

export function estudianteEdad(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i].edad >= 18) {
            console.log(`${array[i].nombre} Es mayor de edad con ${array[i].edad}`)
        } else console.log(`${array[i].nombre} Es menor de edad con ${array[i].edad}`);
        
    }
}

////////////////////////////////////////////////////

// export function mostrarNombres(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].nombre)
//     }
// }

// let notas = [3, 4, 5];
// let nota = 1.5;

// // if(nota >= 3.5){
// //     console.log('aprobado')
// // } else {
// //     console.log('reprobado')
// // }
// for (let i = 0; i < notas.length; i++) {
//     aprobar(notas[i])
// }

// function aprobar(nota) {
//     if(nota >= 3.5){
//         console.log('aprobado')
//     } else {
//         console.log('reprobado')
//     }
// }