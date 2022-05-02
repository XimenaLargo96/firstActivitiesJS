
/*** E X A M E N   P A R C I A L  X I M E N A  L A R G O  C 5 */

/* EJERCICIO 1
1. Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
nombre
apellido 
camada
esParcial (VERDADERO)*/
let alumno ={
    nombre : 'Ximena',
    apellido : 'Largo',
    camada : 5,
    esParcial : true,
}
/*2. Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
	 NOTA < 4 :           desaprobado
 4 <= NOTA < 7 :  debe rendir examen final 
	 NOTA >= 7 :         promocionado.  
La función deberá retornar la condición final del alumno (solo retorna la palabra). 
Al momento de llamar a la función, deberás mostrar la siguiente frase: 
	“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICION]*/

function calificacionAlumno (futuraNota){
    let condición = ''
    if(futuraNota < 4){
        condición = 'Desaprobado'
    }
    else if(futuraNota >= 4 && futuraNota < 7){
        condición = 'Debe rendir examen final'
    }
    else{
        condición = 'Promocinado'
    }
    return 'El alumno obtuvo una nota igual a ' + futuraNota + ' por lo tanto su condición es: ' + condición;
}
let resultadoNota = calificacionAlumno(1);
//console.log(resultadoNota);

//EJERCICIO 2
//1. Crea 1 array llamado clase.  
const CLASE = []

/*2.Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1*/

    let companeroUno ={
        nombre : 'LeandEstebanro',
        apellido : 'Piazza',
        bimestre : 1
    }

    let companeroDos ={
        nombre : 'Leandro',
        apellido : 'Borelli',
        bimestre : 1
    }

    let companeroTres ={
        nombre : 'Martin',
        apellido : 'Cejas',
        bimestre : 1
    }

//a. Agrega estos 3 objetos al array llamado clase.
    clase.push(companeroUno, companeroDos, companeroTres);

//b.Imprimir el array para ver que contenga esos objetos.
    //console.log(clase);

/* 3. Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición.*/
function siguienteCursada (array){
    for(let i= 0 ; i< array.length ; i++){
        array[i].bimestre = array[i].bimestre + 1
    }
    return array
}
/* 4. Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada. */

//console.log(clase);

let cambioSiguienteCursada = siguienteCursada(clase);

//console.log(cambioSiguienteCursada);

//EJERCICIO 3

/*Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán: 
-Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas para la aprobación de la materia, en este caso serán 23 asistencias mínimas.  

-La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround del alumno.

-Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 

-Deberá retornar un string aprobado o desaprobado según corresponda*/

function aprobacionAlumno (asistencia,progreso){
    let asistenciaMinima = 23;
    let mensaje ='';
    if(asistencia >= asistenciaMinima && progreso === true){
        mensaje = 'Aprobado'
    }
    else{
        mensaje = 'Desprobado'
    }
    return mensaje
}
let aprobacionCurso = aprobacionAlumno(22, true);
console.log(aprobacionCurso);