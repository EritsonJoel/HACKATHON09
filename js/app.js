//1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se
//deberá imprimir en pantalla.

let numero1 = 5;
let numero2 = 6;

const result = Number(numero1 + numero2);

console.log("la suma de los dos numeros es:" + result );

//2. Un estudiante realiza 4 exámenes, calcular el promedio de estos

let nota1 = 11;
let nota2 = 14;
let nota3 = 16;
let nota4 = 20;

const resultadoNotas = Number(nota1 + nota2 + nota3 + nota4) / 4;

 console.log("el  promedio de notas es:" + Number(resultadoNotas));

 //3.Calcular el área de un rectángulo

 let  base;
 let altura;



  const BaseRectangulo = Number(prompt ("ingrese el area del rectangulo:"));
  const  AlturaRectangulo =Number(prompt("ingrese la altura del  rectangulo:"));


  const areaRectangulo = BaseRectangulo * AlturaRectangulo ;

  console.log("Area del Rectangulo es:" + Number(areaRectangulo));

//4. Calcular el área de un triángulo


const  baseTriangulo = Number(prompt("ingrese la base del Triangulo"));
const alturaTriangulo = Number(prompt("ingrese la altura del triangulo"));

const areatriangulo = (baseTriangulo * alturaTriangulo) /2 ;

console.log("el area total del triangulo es:" + Number(areatriangulo));



//5. Calcular el área de una circunferencia


const circun =Number(prompt("ingrese el area de la circunferencia"));

areaCircunferencia =  circun * Math.PI;

console.log("area de la circunferencia es:" + areaCircunferencia);


//6. Determinar el sueldo semanal de un trabajador basándose en sus horas
//trabajadas y su salario de hora hombre


let  sueldoMinimo = 930;
let diaMes = 31;
let diasSemana = 7;
let horasTrabajadas=8;


const sueldoDia = Number((sueldoMinimo / diaMes));
const sueldoSemanal  = Number((sueldoDia * diasSemana));
const sueldoHora = Number((sueldoDia / horasTrabajadas));

console.log(`sueldo por dia es: ${sueldoDia} soles
            sueldo por semana es: ${sueldoSemanal} soles
            sueldo por por hora trabajada es: ${sueldoHora} soles

`
);

//7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
//Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
//pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
//resolver el problema, determinando cuantas pulgadas debe pedir con base en
//los metros que requiere. Represéntelo mediante el diagrama de flujo y el
//pseudocódigo (1 pulgada = 0.0254 m).


     

let pulgada = 39.37;//lo que equivale la pulga en un metro

const metroRequerido = Number(prompt("ingrese los metros que requiera"));

const metropulgada = (metroRequerido * pulgada);


console.log("los metros Requeridos en pulgadas es:" + metropulgada + " pulgadas ");


//8. Una empresa importadora desea determinar cuántos dólares puede adquirir
//con equis cantidad de dinero peruano

let  precioDolar = 3.8; //el precio de cambio de dolar actual

const dineroPeruano = Number(prompt("ingrese la cantidad de dinero que desea cambiar a dólares"));

const montoDolares = (dineroPeruano * precioDolar);

console.log(`El monto en Dólares es:  ${montoDolares} Dólares`);

//9. Una empresa que contrata personal requiere determinar la edad de las
//personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
//les pregunta el año en que nacieron


let anioActual = 2021;

const anioNacimiento = Number(prompt("ingrese el año de nacimiento"));
const Edad =  anioActual - anioNacimiento;

console.log("edad Actual es : " + Edad + " años")



//10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
//edad de la persona de menor edad



//11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
//año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
//años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
//y represéntelo ,que permita determinar el bono que recibirá un trabajador




//12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual
//durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido
//en cada uno de los 6 años? Realice el algoritmo y representan la solución,
//utilizando el ciclo apropiado

let sueldoInicial = 1500;
let incremento = 0.1;
let aniosIn = 6;
let mesesAnio = 12;

//sueldo el incremento1 año1
const porcientoSueldo = sueldoInicial * incremento;
const anioincremento =  sueldoInicial + porcientoSueldo;



//sueldo el incremento2 año2
const  porcientoSueldo2  =   anioincremento * incremento;
const anioincremento2  =   anioincremento + porcientoSueldo2;


const  porcientoSueldo3 = anioincremento2 * incremento;
const  anioincremento3 = anioincremento2 + porcientoSueldo3;


const porcientoSueldo4 = anioincremento3 * incremento;
const anioincremento4  =  anioincremento3 + porcientoSueldo4;

const porcientoSueldo5 = anioincremento4 * incremento;
const anioincremento5 = anioincremento4 + porcientoSueldo5;

const porcientoSueldo6 = anioincremento5 * incremento;
const anioincremento6 = anioincremento5 + porcientoSueldo6;

const salarioseisanio = anioincremento + anioincremento2 + anioincremento3 + anioincremento4 + anioincremento5 + anioincremento6 ;

console.log( `su salario al cabo de seis años es de : ${salarioseisanio} soles
           su  primer suelario  fue: ${anioincremento} soles,
           su segundo salario fue: ${anioincremento2} soles,
           su tercer salario fue: ${anioincremento3} soles,
           su cuarto salario fue: ${anioincremento4} soles,
           su quinto salario fue: ${anioincremento5} soles,
           su sexto salario fue: ${anioincremento6} soles,

`
);

//13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el
//número de aprobados y reprobados.



//14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea
//contabilizar, de un lote de N focos, el número de focos de cada color que hay en
//existencia