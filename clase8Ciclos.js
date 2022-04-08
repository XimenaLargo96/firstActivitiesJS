const prompt = require("prompt-sync")({ sigint: true });

function diezNumeros(valor){
    for(let i = valor ; i<=valor+10 ; i++)
    console.log(i)
}

diezNumeros(10);

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function numerosCincoEnCinco(){
   for(let i=5 ; i<=20 ; i+=3){
    console.log(i)
   }
}
numerosCincoEnCinco();

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

function sumatoria(){
    let resultado= 0;
    for(let i=0 ; i<=100 ; i++){
    resultado =(((i+1)/2)*100);
    }
    return resultado;
}
console.log(sumatoria());

//Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function factorial(numero){
    let resultado = 1;
    for(let i=1 ; i<=numero ; i++){
        resultado *= i;
    }
    return resultado;
}
console.log(factorial(5));

//Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.

function numerosFibonacci(parametro){
    let numero1 = 0;
    let numero2 = 1;
    let sigNum;
    for(let i=1 ; i<=parametro ; i++){
        console.log(numero1)
        sigNum=numero1+numero2;
        numero1=numero2;
        numero2=sigNum;
    }
}
numerosFibonacci(20)