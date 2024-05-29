/*
NOTA: Existen funciones que podemos utilizar para string buscar elementos
o saber que poseen las cadenas de caracteres estos se pueden utilizar para 
ayudarnos en cualquier eventualidad las funciones mas importantes en Js 
es length que nos permite saber la cantidad de caracteres que posee una 
cadena.

Para utilizar esta función debemos colocar nuestro texto dentro de una vari-
able luego llamar a la variable y adicionarle la función con un (.).

Por ejemplo:
*/

let palabra = 'Canario';
document.write('la palabra es: ' +palabra);
document.write('<br>');
document.write('la cantidad de letras de la palabra son: '+ palabra.length);
document.write('<br>');

/*
NOTA: Si queremos obtener cierta y determinada cantidad de caracteres de un
elemento utilizamos la función slice() la cual recibe como parámetros dos 
numero con los cuales podríamos jugar para contabilizar de un elemento lo que 
que queramos.

debemos tener en cuenta que el primer carácter de un slice() denota 
el inicio o desde donde va a comenzar a ver el contenido de la cadena y el 
segundo es donde se detendrá.

si el inicio sobre pasa la cantidad de caracteres no mostrara ningún elemento.

si el final sobre pasa la cantidad de caracteres no pasara nada.

slice(desde,hasta)

Por ejemplo:
*/

document.write('las primeras 5 letras de la palabra son: '+ palabra.slice(0,5));
document.write('<br>');

/*
NOTA: para ver los caracteres especifico de una cadena de caracteres podemos
utilizar también la función substring() cumplen practicamente la misma funcion
pero teniendo en cuenta que substring() devuelve un subconjunto de un objeto 
String y slice() extrae una sección de una cadena y devuelve una cadena nueva.

substring(desde,hasta);
*/

document.write('las primeras 4 letras de la palabra son: '+ palabra.substring(0,4));
document.write('<br>');
document.write('<br>');

/*
NOTA: con las funciones de Js podremos cambiar también los valores de una cadena
de caracteres con la función de replace() esta función lo que hace es remplazar
una cadena de caracteres por otra

replace(palabraExistente,palabraCambiar);
*/
let nuevaPalabra = '¿Hola como estas?'

document.write(nuevaPalabra);
document.write('<br>');
document.write('cambiar la palabra hola por JavaScript: '+ nuevaPalabra.replace('Hola','Javascript'));
document.write('<br>');