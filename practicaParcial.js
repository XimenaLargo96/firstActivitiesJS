// 1. dado el sig arreglo
let numeros = [ 5, 9 , 12, 25, 6 , 7, 18, 1, 24, 4];

/*Determinar la suma total de ellos, solamente sumando los numeros impares y guardando en una variablee que se llame resultado*/

function sumaImpares (array){
    let resultado = 0;
    for(let i= 0 ; i< array.length ;i++){
        if(array[i] % 2 !== 0){
            resultado = resultado + array[i]
        }
    }
    return resultado
}
let totalSumaImpares = sumaImpares(numeros);
//console.log(totalSumaImpares);

// 2. dado el siguiente arreglo

const arrayNumeros = [ 7, 16, 32, 27, 45, 27, 51, 12, 19, 21]

/* Crear uno nuevo el cual contendra los numeros de este arreglo pero solo los numeros que sean mayores que 15 y menores o iguales que 30 */

function unNuevoArreglo (array){
    let nuevoArreglo = [];
    for( let i= 0 ; i< array.length ; i++){
        if(array[i]> 15 && array[i]<=30 ){
            nuevoArreglo.push(array[i])
        }
    }
    return nuevoArreglo;
}
let muestraUnNuevoArreglo = unNuevoArreglo(arrayNumeros);
//console.log(muestraUnNuevoArreglo);

// 3.dado el siguiente arreglo

let profesionales = [
    {
        nombre : 'juancito',
        profesion : 'programador',
    },
    {
        nombre : 'maria',
        profesion : 'comerciante'
    },
    {
        nombre : 'pepito',
        profesion : 'docente'
    }
];

/* crear una funcion para que le agregue un metodo a cada objeto lo que debe hacer el metodo es retornar un string con el nombre y su profesion por ejemplo ; 'mi nombre es juancito y soy programador.
luego nos dimos cuenta que no le agregamos la edad a ninguna persona debemos crear una funcion que le agregue esa propiedad a todos los objetos*/ 

function nuevoMetodo (array){
    for( let i= 0 ; i<array.length ; i++){
        array[i].mensaje = function mensaje(){
        return ('mi nombre es ' + this.nombre + ' y soy ' + this.profesion)
        }
    }
    return array
}
nuevoMetodo(profesionales);
//console.log(profesionales)


function agregandoEdad (array){
    let primeraEdad = 41;
    for( let i= 0 ; i< array.length ; i++){
        array[i].edad = primeraEdad + i
    }
    return array
}
let edad = agregandoEdad(profesionales);
//console.log(edad);

/*Crear una función llamada mayorMenorIgual, la cual recibe 2 parámetros numéricos, y deberá indicar si el número es menor, mayor o igual al segundo parámetro. Deberá retornar el siguiente mensaje según corresponda. Si es menor: “El número (N1) es menor que (N2)”;
 Si es mayor: "El número (N1) es mayor que (N2)"; Si es igual: "El número (N1) es igual a (N2)". (Al momento de ingresar la respuesta en el form se deberá ingresar la invocación/ejecución de la función). Ej: mayorMenorIgual(15,3) */

function mayorMenorIgual (numeroUno, numeroDos){
    let mensaje = '';
    if( numeroUno < numeroDos){
        mensaje = 'El número ' + numeroUno + ' es menor que ' + numeroDos;
    }
    else if( numeroUno > numeroDos){
        mensaje = 'El número' + numeroUno + ' es mayor que ' + numeroDos;
    }
    else{
        mensaje = 'El numero ' + numeroUno + ' es igual ' + numeroDos;
    }
    return mensaje;
 }
 let resultado = mayorMenorIgual(1,9)
 //console.log(resultado);