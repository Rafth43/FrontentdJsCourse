/*
NOTA: una cadena de caracteres es un tipo de datos que representa una 
secuencia de caracteres que puede consistir de letras, números, símbo-
los, palabras o frases. Es importante saber que en JavaScript, las 
cadenas de caracteres son inmutables.

para denotar una cadena de caracteres en Js podemos hacerlo introduci-
endo caracteres dentro de comillas simple ('') o comillas dobles ("") 
las dos formas cumplen la misma función volver todo lo que esta envuel-
to en ellas se vuelvan una cadena de caracteres.

Por ejemplo:
*/

let cadenaCaracteres = 'Esto es una cadena de caracteres con comillas simples';
let CadenaCaracteres = "Esto es una cadena de caracteres con comillas dobles";
document.write(cadenaCaracteres);
document.write('<br>');
document.write(CadenaCaracteres);
document.write('<br>');

/*
NOTA: algo que si se debe tener en cuenta es que si queremos colocar 
comillas dobles dentro de una cadena de caracteres debemos utilizar
las comillas simples para envolver el texto a ingresar y dentro colo-
car las comillas dobles, ya que si se colocan mas comillas simples 
se puede interrumpir la cadena de caracteres.

Esta misma connotación funciona de forma contraria si envuelves tu 
cadena de caracteres con comillas dobles puedes dentro utilizar comi-
llas simples

Por ejemplo:
*/

//Comillas dobles dentro del string
let comillas = 'Esto es un texto con "comillas dobles" dentro';
document.write(comillas);
document.write('<br>');

//Comillas simples dentro del string
// let Comillas = 'Esto es un texto con 'comillas dobles' dentro'

//Comillas simples dentro del string
let comillasDobles = "Esto es un texto con 'comillas simples' dentro";
document.write(comillasDobles);
document.write('<br>');

/*
NOTA: Si queremos agregar saltos de lineas en Js existen varias formas pero
utilizaremos la mas comun existente en el lenguaje que es el signo de back-
slash y n(\n) es la forma mas facil de generar un salto de lina.

para mostar y ver que esto funciona utilizaremos consle.log() ya que con 
document.write() se ve como un espacio en blanco ' ' y no es lo que queremos.

para hacer un salto de linea con el document.write() utilizaremos la etique-
ta de HTML (<br>) que nos muestra en pantalla un salto de linea.

Por ejemplo:
*/

let saltoLinea = "Hola,\nBienvenido a nuestro sitio!";
console.log(saltoLinea);

let saltoLineaHTML = "Hola, <br> Bienvenido a nuestro sitio!";
document.write(saltoLineaHTML);

