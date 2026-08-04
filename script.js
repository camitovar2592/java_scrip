//let nombre = prompt('tu nombre: ');
//let apellido = prompt('tu apellido: ');
//let edad = prompt('tu edad: ');
//console.log(`Hola te llamas ${nombre} ${apellido} y tienes ${edad} años`);

// let nombre = prompt('Dime tu nombre ');
// let salario = prompt('Dime tu salario en US');
// let salarioCol = salario * 3100
// console.log(`Hola ${nombre} tu salario en COP es ${salarioCol}`)

// let nombre = prompt('Dime tu nombre ');
// let salario = prompt('Dime tu salario en COP');
// let salarioUS = salario / 3100;
// console.log(`Hola ${nombre} tu salario en Us es ${salarioUS}`)

// let nombre = prompt('Dime tu nombre ');
// let peso = prompt('Dime tu peso en Kg');
// let pesoLuna = peso / 6;
// let pesoMarte = peso * 0.377;
// let pesoVenus = peso * 0.9;
// console.log(`Hola ${nombre} tu peso en la luna es ${pesoLuna} Kg, tu peso en Marte es ${pesoMarte} Kg y tu peso en Venus es ${pesoVenus}Kg`)

// let altura = Number(prompt('Digite la altura del triangulo'));
// let base = Number(prompt('Digite la base del triangulo'));
// let areaTriangulo = altura * base / 2;
// console.log(`Hola el area del triangulo es ${areaTriangulo}`)

// let centrigados = Number(prompt('Digite la temperatura en Centrigados'));
// let temperaturaFaren = ((centrigados*(9/5))+32);
// console.log(`Hola la temperatura en Fahrenheit es ${temperaturaFaren}`)

// let distanciaKm = Number(prompt('Digite la distancia en Kilometros'));
// let metros = (distanciaKm*1000);
// console.log(`Hola la distancia en metros es ${metros}`)

// let precio = Number(prompt('Digite el precio del producto'));
// let descuento = precio * 0.8;
// console.log(`Hola el precio con descuento es ${descuento}`)

// let nota1 = Number(prompt('Digite la nota 1'));
// let nota2 = Number(prompt('Digite la nota 2'));
// let nota3 = Number(prompt('Digite la nota 3'));
// let promedio = (nota1 + nota2 + nota3) / 3;
// console.log(`Hola Alumno, la nota promedio es ${promedio}`)

// let dia = Number(prompt('Digite los dias'));
// let diaHora = dia * 24;
// let diaMinuto = diaHora * 60;
// console.log(`Hola, los dias introducidos equivalen a ${diaHora} horas y a ${diaMinuto} minutos`)

// let km = Number(prompt('Digite los Km recorridos'));
// let tiempo = Number(prompt('Digite las horas transcurridas'));
// let velocidad = km / tiempo;
// console.log(`Hola, la velocidad promedio de tu viaje fue ${velocidad} km/hr`)

let peso = Number(prompt('Cual es su peso en Kg?'));
let libras = peso*2.20462
let genero = (prompt('Digite su genero, unica opcion F o M'))

console.log(`Hola tu peso en libras es ${libras}`);

if(genero = 'M'){

    if(libras < 160){
    console.log('Tu categoria de competencia es peso Gallo Masculino');
    } else if (libras >= 160 && libras < 180) {
        console.log('Tu categoria de competencia es peso Pluma Masculino');
    } else {
        console.log('Tu categoria de competencia es peso Ligero Masculino')
    }
}

else{
    if(libras < 115){
    console.log('Tu categoria de competencia es peso Gallo Femenina');
    } else if (libras >= 115 && libras < 135) {
        console.log('Tu categoria de competencia es peso Pluma Femenina');
    } else {
        console.log('Tu categoria de competencia es peso Ligero Femenina')
    }
}