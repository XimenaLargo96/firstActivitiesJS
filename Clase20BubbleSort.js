
/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

const LIKES = [15, 13, 12, 14, 14, 78, 98, 56, 72, 193, 25, 8, 6, 89, 23]

function contarLikes (array){
    for(let i= 0 ; i< array.length; i++){
        for(let j= 0 ; j<array.length; j++){
           if(array[j] < array[j+1]){
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
           }
        }
    }
    return array
}
let resultadoLikes = contarLikes(LIKES);

function mayorLikes (array){
    let resultado1;
    let resultado2;
    let resultado3;
    let resultadoUltimo;
    let resultado;
    for(let i= 0 ; i< array.length ; i++){
        switch (i) {
            case 0:
                resultado1 = `La mayor cantidad de likes es ${array[0]}, `
                break;
            case 1:
                resultado2 = `El segundo lugar en likes es ${array[1]}, `
                break;
            case 2:
                resultado3 = `El tercer lugar en likes es ${array[2]}, `
                break;
            case (array.length - 1):
                resultadoUltimo = `El ultimo lugar en likes es ${array[i]}, `
                break;
            default:
                break;
        }
    }
    resultado = resultado1 + resultado2 + resultado3 + resultadoUltimo
    return resultado
}
let resultadoConcurso = mayorLikes(resultadoLikes);
//console.log(resultadoConcurso);

/*Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día —valor numérico del día—, mes —valor numérico—, temperatura máxima y temperatura mínima,correspondiente a dicho día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
*/ 


const TEMPERATURAS = [
    {
        dia: 1,
        mes: 1,
        temperaturaMaxima: 30,
        temperaturaMinima: 22,
    },
    {
        dia: 2,
        mes: 1,
        temperaturaMaxima: 25,
        temperaturaMinima: 21,
    },
    {
        dia: 3,
        mes: 1,
        temperaturaMaxima: 35,
        temperaturaMinima: 28,
    },
    {
        dia: 4,
        mes: 1,
        temperaturaMaxima: 26,
        temperaturaMinima: 22,
    }
]

function ordenarTempMinAsc(array){
    for(let i= 0 ; i< array.length ; i++){
        for(let j= 0 ; j< array.length - 1 ; j++){
            if(array[j].temperaturaMinima > array[j + 1].temperaturaMinima){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}
let resultadoOrdenTempMinAsc = ordenarTempMinAsc(TEMPERATURAS);
//console.log(resultadoOrdenTempMinAsc);

//b) Ordenar por temperatura máxima de mayor a menor.
function ordenarTempMaxDes(array){
    for(let i= 0 ; i< array.length ; i++){
        for(let j= 0 ; j< array.length - 1 ; j++){
            if(array[j].temperaturaMaxima < array[j + 1].temperaturaMaxima){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}
let resultadoOrdenTempMaxDesc = ordenarTempMaxDes(TEMPERATURAS);
//console.log(resultadoOrdenTempMaxDesc);