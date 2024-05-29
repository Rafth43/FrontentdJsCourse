/*
NOTA:Un tipo de datos sirve para definir el tipo y el comportamiento de los datos: 
En otras palabras, con esto podemos decirle al compilador o al intérprete cómo 
pretendemos usar una parte de los datos. La mayoría de los lenguajes de progra-
mación admiten tipos de datos básicos como números, booleanos, cadenas, etc.

Existen dos tipos de datos en JavaScript los cuales son los primitivos y los no
primitivos donde entre los primitivos existen:

los de tipos STRING o cadena de caracteres 

los de tipo NUMBER o numero 

los BOOLEANS o buleanos

los UNDEFINED o indefinidos

Los NULL o nulos

Los SYMBOL o los símbolos

y en los no primitivos existen:

Los de tipo OBJECT o tipo objeto
*/

let texto = "String";
let numero = 30;
let booleano = true;
let indefinido = undefined;
let nulo = null;
let objeto = {nombre: 'Rafael', edad: 50};
document.write(texto);
document.write('<br>');
document.write(numero);
document.write('<br>');
document.write(booleano);
document.write('<br>');
document.write(indefinido);
document.write('<br>');
document.write(nulo);
document.write('<br>');
document.write(objeto.nombre);


/*
NOTA: Podemos utilizar HTML dentro de un archivo JS de manera facil colocando el
elemento dentro de comillas.
*/
