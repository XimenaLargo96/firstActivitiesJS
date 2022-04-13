
/*1. Crear la estructura adecuada para guardar las siguientes películas: "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella" 
Importante: verificá que todo funciona correctamente accediendo a alguna de las películas una vez creada la estructura correspondiente. */

const PELICULAS = ['star wars', 'totoro','rocky','pulp fiction','la vida es bella'];

/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas. Pista: revisá qué hace el método de strings .toUpperCase(). */


console.log(PELICULAS[0]);

function UpperCase(array){
    let mayus = '';
    let newArray = [];
    for(let i= 0 ; i< array.length ; i++){
        mayus = array[i].toUpperCase()
        newArray.push(mayus)
    }
    return newArray
}
let resultToUpperCase = UpperCase(PELICULAS)
//console.log(resultToUpperCase);


/*3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.*/

const PELISANIMADAS = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fornite'];

function bothArrays (arrayOne, arrayTwo){
    let mayus = '';
    for(let i= 0 ; i< arrayTwo.length ; i++){
        mayus = arrayTwo[i].toUpperCase()
        arrayOne.push(mayus)
    }
    return arrayOne
}
let resultBothArrays = bothArrays (resultToUpperCase,PELISANIMADAS)
console.log(resultBothArrays);

/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

let deleteFornite = resultBothArrays.pop()

console.log(resultBothArrays);

