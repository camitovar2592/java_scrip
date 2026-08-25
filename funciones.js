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

///////////////////////////////////////////////////

// export function estudianteEdad(array){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].edad >= 18) {
//             console.log(`${array[i].nombre} Es mayor de edad con ${array[i].edad}`)
//         } else console.log(`${array[i].nombre} Es menor de edad con ${array[i].edad}`);
        
//     }
// }

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
// // }

// export function pagaMas(array) {
//     let precioSemestre = 0
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].precioSemestre > precioSemestre){
//             array[i].precioSemestre = precioSemestre
//         }
//             ;
        
//     }
// }

let saldo = 2_000_000;



export function consultarSaldo() {
    alert('Tu saldo es: ' + saldo)
}

export function transferir() {
    let persona = prompt(`Ingrese la persona para transferencia`);
    let valorTransferir = Number(prompt(`Ingrese el valor a transferir`));

    let impuestoTransfer = (valorTransferir * 4) / 1000
let saldoRetirableT = saldo - impuestoTransfer
    if (valorTransferir > saldoRetirableT) {
        alert('Fondos insuficientes')
    }
    else if (valorTransferir > 0) {
        saldo = saldo - valorTransferir - impuestoTransfer
        alert(`enviasté ${valorTransferir} a ${persona}`)
    }
    else {
        alert('Error calculo')
    }
}

export function retirar() {
    let retiro = Number(prompt(`Ingrese el valor a retirar`))
    
let impuestoRetiro = retiro * 4 / 1000
let saldoRetirableR = saldo - impuestoRetiro
    if (retiro > saldoRetirableR) {
        alert('Fondos insuficientes')
    }
    else if (retiro > 0) {
        saldo = saldo - retiro - impuestoRetiro
        alert(`retiraste ${retiro}`)
    }
    else {
        alert('Error calculo')
    }
}

export function depositar() {
    let deposito = Number(prompt(`Ingrese el valor a depositar`))
    if (deposito <= 0) {
        alert('Error')
    }
    else if (deposito > 0) {
        saldo = saldo + deposito
        alert(`depositaste ${deposito}`)
    }
    else {
        
    }
}

