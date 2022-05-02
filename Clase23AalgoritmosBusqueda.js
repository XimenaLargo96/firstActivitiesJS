/*
Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
¿Cuál es la posición del número 1?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 6?
¿Cuál es la posición del número 9?
¿Cuál es la posición del número 11?
*/

const binarySearch = (list, item) => {
	let low = 0;
	let high = list.length - 1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = list[mid];
		if (guess === item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null; 
};
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//console.log(binarySearch(list, 1));

/*Desafío extra: Orden, lugar y números

Aumentemos la dificultad un toque, y apliquemos lo aprendido en semanas anteriores. Queremos que hagan lo mismo del ejercicio anterior —buscar la posición de un número en un array—, pero partiendo de esta lista:

let list = [12,3,5,7,1,22,47,100];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?
*/
let listDos = [12,3,5,7,1,22,47,100];

function ordenaArregloAsc (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j +1 ]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            
        }
    }
    return array
}
let arregloOrdenado = ordenaArregloAsc(listDos);
console.log(arregloOrdenado);

const binarySearchDos = (list, item) => {
	let low = 0;
	let high = list.length - 1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = list[mid];
		if (guess === item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null; 
};
console.log(binarySearchDos(arregloOrdenado, 100));