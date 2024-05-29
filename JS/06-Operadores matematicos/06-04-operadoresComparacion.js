/*
NOTA: son aquellos permiten comparar dos expresiones y devuelven un valor booleano, 
es decir, devuelven true o false (verdadero o falso) que representa la relación de 
sus valores.

existen tres tipos de operadores de comparación los cuales se muestran a continua-
cion.
*/
let a = 5 , b = 6 , c = 7, d = "5";
//Los operadores de comparación son: ( == , ===, !=)

/*
Donde: == genera una igualación débil que no valida si el valor existente es 
exactamente el mismo.
*/
let x = a == b;
document.write('El valor de igualar (5 = = 6) es: '+x);
document.write('<br>');

/*
También, devuelve true por el simple echo de que ( == ) evalúa si es valor es igual
y como d es 5 pero en string el verifica su valor y lo compara, es decir, el operador 
de igualdad no compara tipo de valores.
*/
let g = a == d;
document.write('El valor de igualar (5 = = "5") es: '+g);
document.write('<br>');

/*
Donde: === genera una igualación fuerte que si valida el valor existente y 
compara si el valor es exactamente el mismo.
*/

let y = b === c;
document.write('El valor de igualar exacto (6 = = = 7) es: '+y);
document.write('<br>');


//Donde: != genera una diferencia entre valor existente y el valor impuesto.

let z = a != b;
document.write('El valor de diferenciar  (5 != 7) es: '+z);
document.write('<br>');

/*
También, devuelve false por el simple echo de que ( != ) evalúa si el valor es diferente
a d y de es 5 pero en string el verifica su valor y lo compara, es decir, el operador de
igualdad no compara tipo de valores.
*/

let h = a != d;
document.write('El valor de diferenciar  (5 != "5") es: '+h);
document.write('<br>');

//Para revisar el tipo de valor en una operación (!=) se le agrega un ( = )

let u = a !== d;
document.write('El valor de diferenciar exacto (5 !== 7) es: '+z);
document.write('<br>');
