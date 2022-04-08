const prompt = require("prompt-sync")({ sigint: true });

/*Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.

let nombreUsuario= prompt('Ingrese su nombre: ');
console.log('Hola ' + nombreUsuario + '!');*/

/*Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

let numeroUsuario= parseInt(prompt('Por favor, ingresa un numero: '));
let numeroDosUsuario= parseInt(prompt('Por favor ingrese un 2do numero: '));
let resultado= numeroUsuario + numeroDosUsuario;
console.log('La suma de tus numeros es: ' + resultado);*/

/*Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años).

let nacimiento= parseInt(prompt('Ingrese su año de nacimiento: '));
function edadActual(){
    let edad= 2022-nacimiento;
    console.log('Tienes ' + edad + ' años');
}
edadActual();*/

//Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!"

let numero_aleatorio = Math.floor(Math.random()*(10 - 1)) + 1;
console.log(numero_aleatorio);
let numero_usuario= parseInt(prompt('Intenta adivinar el numero: '));

if(numero_usuario==numero_aleatorio){
    console.log('Felicitaciones, ese era!');
}else{
   console.log('Lo siento, intenta nuevamente!') 
}

/*Escribí un programa que imprima los números pares del 0 al 100.

for(i=0 ; i<=100 ; i+=2){
    console.log(i)
}*/
