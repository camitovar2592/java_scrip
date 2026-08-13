let notasMatematicas = [ 2,3,2,1,2 ];
let notasIngles = [ 5,4,4,4.8,2 ];
let notasSociales = [ 1,1,1,1,2 ];

function obtenerPromedio(notas){

    let sumaNotas = 0
    for(let i = 0 ; i< notas.length ; i++){
        sumaNotas += notas[i];
    }
    let promedio = (sumaNotas / notas.length).toFixed(1);
    console.log(`La nota final es: ${promedio}`);
}

obtenerPromedio(notasMatematicas);
obtenerPromedio(notasIngles);
obtenerPromedio(notasSociales);
obtenerPromedio([2,4,4,4]);

///////////////////////////////////////////////


let operacion = prompt(`ingrese la operacion que desea realizar`)
let n1 = number(prompt(`ingrese el primer digito `))
let n2 = number(prompt(`ingrese el segundo digito `))

function calculadora(n1, n2, operacion){
    if(operacion === 'sumar'){
        console.log(n1+n2);

    }else if(operacion === 'restar'){
        console.log(n1-n2);
    }else if(operacion === 'dividir'){
        console.log(n1/n2);
    }else (operacion === 'multiplicar'){
        console.log(n1*n2);   
    }
}
