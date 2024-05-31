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
utilizar también la función substring() cumplen prácticamente la misma función
pero teniendo en cuenta que substring() devuelve un subconjunto de un objeto 
String y slice() extrae una sección de una cadena y devuelve una cadena nueva.

substring(desde,hasta);

Por ejemplo:
*/

document.write('las primeras 4 letras de la palabra son: '+ palabra.substring(0,4));
document.write('<br>');
document.write('<br>');

/*
NOTA: con las funciones de Js podremos cambiar o reemplazar los valores de una 
cadena de caracteres con la función de replace() esta función lo que hace es 
remplazar una cadena de caracteres por otra

replace(palabraExistente,palabraCambiar);

También si queremos hacer que los caracteres de una cadena de caracteres cambie 
a mayúsculas podremos utilizar la función toUpperCase() la cual transforma todos
los valores de la cadena en mayúsculas.

toUpperCase(palabraEnMinuscula);

También si queremos hacer que los caracteres de una cadena de caracteres cambie 
a mayúsculas podremos utilizar la función toLowerCase() la cual transforma todos
los valores de la cadena en mayúsculas.

toUpperCase(palabraEnMinuscula);

Por ejemplo:
*/
let nuevaPalabra = '¿Hola como estas?'

document.write(nuevaPalabra);
document.write('<br>');
document.write('cambiar la palabra hola por JavaScript: '+ nuevaPalabra.replace('Hola','Javascript'));
document.write('<br>');
document.write('<br>');

let palabraminusculas = '¿hola como estas?'
document.write(palabraminusculas);
document.write('<br>');
//cambiar a mayusculas
document.write('cambiar la palabra a mayúsculas: '+ palabraminusculas.toUpperCase());
document.write('<br>');
document.write('<br>');

let palabramayusculas = '¿HOLA COMO ESTAS?'
document.write(palabramayusculas);
document.write('<br>');
//cambiar a minisculas
document.write('cambiar la palabra a minúsculas: '+ palabramayusculas.toLowerCase());
document.write('<br>');
document.write('<br>');

/*
NOTA: Si queremos quitar espacios de una cadena de text podemos utilizar la
función trim donde existen varias formas de quitar los espacios su puede 
utilizar:

trim(); para quitar los espacios existentes

trimStart(); para quitar los espacios del inicio

trimEnd(); para quitar los espacios del final

para utilizar esta función debemos asignársela a una variable para que pueda
borrar los espacios que se le indiquen dentro de la función.

Por ejemplo:
*/
let quitarEsoacios = ' Aquí existe un espacio ';
console.log(quitarEsoacios);
console.log(quitarEsoacios.trim());

//Quitar espacio del inicio
let quitarEspaciosIni = ' <-Aquí existe un espacio';
console.log(quitarEspaciosIni);
console.log(quitarEspaciosIni.trimStart());

//Quitar espacio del final
let quitarEspaciosFin = 'Aquí existe un espacio-> ';
console.log(quitarEspaciosFin);
console.log(quitarEspaciosFin.trimEnd());

/*
NOTA: Si queremos quitar o sustraer palabras dentro de una cadena de caracteres
utilizaremos a función split(palabra que quitaras); esta función luego de quitar
la palabra colocara una coma (,)

para utilizar esta función debemos asignársela a una variable para que pueda
borrar las palabras que se le indiquen dentro de la función.

Por ejemplo:
*/

let quitarPalabra = 'Aquí existe una palabra-> hola';
document.write(quitarPalabra);
document.write('<br>');
document.write('sustraer la palabra "hola": '+quitarPalabra.split('hola'));