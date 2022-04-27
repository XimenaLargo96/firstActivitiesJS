const prompt = require("prompt-sync")({ sigint: true });

/**** C O N C U R S O *****/
/*Te contactan desde un teatro donde hace falta determinar el ganador de un concurso de
stand up que consta de tres presentaciones por participante. Te piden que armes el
programa que determine al ganador y, a continuación, te explican el funcionamiento del
concurso para que lo tengas en cuenta a la hora de realizar el programa.
El público, máximo 100 personas, votó quién considera que estuvo mejor al terminar
cada etapa. Por ejemplo, sube Alicia, se presenta y baja; sube Bob, se presenta y baja.
Terminadas ambas presentaciones, el público vota indicando quién cree que ganó esa
tanda. Luego, continúa la siguiente tanda, igual que la primera. Y finalmente, una tercera.*/

const alicia = [10, 80, 75], bob = [90, 20, 25];

function encontrarGanador (alicia,bob){
    let puntosPrimerParticipante = 0, puntoSegundoParticipante = 0, ganadorFinal ='';
     for(let i= 0 ; i<alicia.length ; i++){
        if(alicia[i] > bob[i]){
                puntosPrimerParticipante = puntosPrimerParticipante + 1;
                ganadorRonda = 'Gana Alicia'
                console.log(ganadorRonda);
            }
        else if(alicia[i] < bob[i]) {
                puntoSegundoParticipante = puntoSegundoParticipante + 1;
                console.log('Gana Bob')
            }
        else if(alicia[i] == bob[i]) {
                puntoSegundoParticipante = puntoSegundoParticipante + 1;
                console.log('Ninguno tiene puntos')
            }
        }
     if (puntosPrimerParticipante>puntoSegundoParticipante){
                ganadorFinal ='El ganador final es: Alicia'
        }
        else if(puntosPrimerParticipante<puntoSegundoParticipante){
            ganadorFinal ='El ganador final es: Bob'
        }
        return ganadorFinal
}
let concurso = {
    etapas :{
        etapa1: 'Bob',
        etapa2: 'Alicia',
        etapa3: 'Alicia',
    }, 
    
}
concurso.ganador = encontrarGanador(alicia,bob)

console.log(concurso);

/**** D I G I T A L   H O U S E ****/

/*Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
siguientes criterios:
● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
mostrar el string “Digital” en lugar del número.
● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
mostrar el string “House” en su lugar del número.
● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
“Digital House” en lugar del número.*/

function digitalHouse(numeroUno,numeroDos){
    let mensaje = '';
  for(let i= 1 ; i<= 100 ; i++){
        if (i % numeroUno == 0 && i % numeroDos == 0){
        console.log('Digital House')
        } 
        else{  
            if ((i % numeroUno) == 0){
       console.log('Digital')
            }
            else if(i % numeroDos == 0){
        console.log('House')
            }
            else{
        console.log(i)
            }
        }
    } 
}
digitalHouse(3,5);

/**** SUMARRAY() RELOAD ***/
/*Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta vez lo modificaremos para que pueda recibir un array de números de cualquier cantidad de elementos.
Si no recordás el enunciado original: deberás crear una función sumaArray que acepte
un arreglo de números y devuelva la suma de todos ellos.
Ejemplo:

● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10, 4]) // 27
● sumArray([-5,100]) // 95*/

let array = [1,2,5,2,5,7];

function sumArray(){
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }
    return 'El resultado es ' + resultado
}
console.log(sumArray(array));


