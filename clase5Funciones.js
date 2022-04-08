const prompt = require("prompt-sync")({ sigint: true });



function test1(x,y) {
    return y-x
}
console.log(test1(10,40))


// Funciones simples

 //1. Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function PulgadasACentimetros(numero){
    let resultado = numero * 2.54;
    return resultado
}
console.log(PulgadasACentimetros(50))

//2.Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”

function deStringAUrl(texto){
    return encodeURI('http://www.' + texto +'.com');
}

console.log(deStringAUrl('pepito'));

//3.Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

function edadPerro(variable){
    let edadHumana= variable * 7;
    return edadHumana;
}
console.log(edadPerro(2));

//4.Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.

function horaDeTrabajo(sueldo){
    let resultado= sueldo / 40;
    return resultado;
}
console.log(horaDeTrabajo(1000000));

//5. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

function calculadoIMC(altura, peso){
    let imc= peso / (altura*altura);
    return imc;
}
console.log(calculadoIMC(1.69, 73));

//6.Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.

function aMayuscula(variable){
    let texto= variable.toUpperCase();
    return texto;
}

console.log(aMayuscula('certified tech developer'));

//7.Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.

function tipoDeDato(parametro){
    return typeof(parametro);
}
console.log(tipoDeDato(true));

//8.Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.

function circulo(radio){
    let circunferencia= 2 * Math.PI * radio;
    return circunferencia
}

console.log(circulo(5));