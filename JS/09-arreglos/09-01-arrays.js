/*
NOTA: Los arrays son objetos similares a una lista cuyo prototipo proporciona 
métodos para efectuar operaciones de recorrido y de mutación. Tanto la longi-
tud como el tipo de los elementos de un array son variables.

Los arrays son como estantes de almacenamiento mágicos. Nos permiten organizar
nuestros datos de manera ordenada en la memoria de la computadora. Imaginátelo 
así: cada elemento tiene su propio casillero, y podes acceder directamente a 
él sin perder tiempo.
*/

let arregloNumeros = [];
arregloNumeros = [10,20,30,40,50,-60];

document.write('Esto es lo que contiene el arreglo: '+arregloNumeros);
document.write('<br>');

/*
NOTA: Si queremos obtener un elemento en especifico dentro de nuestro arreglo
tenemos que especificar la posición que es de lo que se componen los arreglos
supongamos que tenemos un arreglo de 5 posiciones y queremos obtener el valor
de la posición 3 debemos indicarle al arreglo en numero la posición.

Por ejemplo:
*/

document.write('Esto es lo que contiene el arreglo en su posición 3: '+arregloNumeros[3]);
document.write('<br>');
/*
NOTA: En Js a los arreglos se le pueden cambiar los valores tanto del arreglo
en si o de una posición esto lo podemos hacer de la siguiente forma.

Por ejemplo:
*/

// cambio de todos los elemento
arregloNumeros = [1,2,3,4,5,7] ;
document.write('Esto es lo que contiene el arreglo con todos sus valores modificados: '+arregloNumeros);
document.write('<br>');
// cambio de un solo elemento
arregloNumeros[3] = 8 ;
document.write('Este es el cambio en su arreglo en la posición 3: '+arregloNumeros[3]);
document.write('<br>');

/*
NOTA: Podemos ver la cantidad de posiciones que posee un arreglo con la función
de Js length; para utilizarlo hacemos mansion a la variable y luego le agregas
la función.

con esta función también podemos saber cual es el elemento existente en la ulti-
ma posición del arreglo de la siguiente forma.

variable[variable.length.-1]

Por ejemplo:
*/

//Contar las posiciones de un array
document.write('Esta es la cantidad de elementos que contiene su arreglo: '+arregloNumeros.length);
document.write('<br>');

//Ver el elemento de la ultima posición de un array
document.write('Esto es lo que contiene el arreglo en su ultima posición: '+arregloNumeros[arregloNumeros.length-1]);
document.write('<br>');

/*
NOTA: Podemos transformar los arreglos a cadena de caracteres es con la función
toString(); la cual nor permite pasar un arreglo o cualquier elemento a cadena
de caracteres.

Por ejemplo:
*/

document.write('Esto es lo que contiene el arreglo pasado a string: '+arregloNumeros.toLocaleString());
document.write('<br>');

/*
NOTA: Si queremos borrar un elemento de un arreglo podríamos utilizar la función
pop(); el cual desaparece o hace que no se lea la posición del arreglo indicada
dentro de la función.

para eliminar el primer elemento podríamos utilizar la función  shift();

Lo mismo podríamos hacer si queremos agregar un elemento en el final del arreglo
con la función .push()


Para ello tenemos que tomar la variable y aplicarle la función para luego llamar
a la misma variable y podamos verificar que ya no existe el ultimo elemento.

para eliminar elementos a partir de un punto en especifico de un arreglo podemos
utilizar la función de splice(desde,hasta)

Por ejemplo:
*/

//sustrayendo el ultimo elemento del arreglo
arregloNumeros.pop();
document.write('Se desaparecerá del arreglo el ultimo valor: '+arregloNumeros);
document.write('<br>');


//sustrayendo el primer elemento del arreglo
arregloNumeros.shift();
document.write('Se desaparecerá del arreglo el primer valor: '+arregloNumeros);
document.write('<br>');

//agregando un elementos al final del arreglo
arregloNumeros.push(7);
document.write('Se agregara al arreglo en el final un numero 7: '+arregloNumeros);
document.write('<br>');

//agregando un elementos al final del arreglo
arregloNumeros.unshift(1);
document.write('Se agregara al arreglo en el inicio un numero 1: '+arregloNumeros);
document.write('<br>');

//tomar elementos apartir de un punto en especifico
arregloNumeros.splice(2);
document.write('Se mostraran los elementos desde la posición 2: '+arregloNumeros);
document.write('<br>');