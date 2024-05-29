/*
NOTA:Los operadores relacionales son los que utiliza js para comparar 
valores y/o expresiones existen varios tipos de operadores relacionales
los cuales son ( < , > , <= , >= ).

donde: (<) es un operador que denota si el valor es menor.

donde: (>) es un operador que denota si el valor es mayor.

donde: (<=) es un operador que denota si el valor es menor o igual.

donde: (>=) es un operador que denota si el valor es mayor o igual.
*/

//Para los operadores menor, menor o igual
let a = 1 , b = 2 , c = 3 , d = 4;

let x = a < b;
document.write('El valor de verificar si mayor (1 < 2) es igual a: '+x);
document.write('<br>');

let y = c <= d;
document.write('El valor de verificar si mayor o igual (3 <= 4) es igual a: '+y);
document.write('<br>');

//Para los operadores mayor, mayor o igual

let z = a > b;
document.write('El valor de verificar si menor (1 > 2) es igual a: '+z);
document.write('<br>');

let v = c >= d;
document.write('El valor de verificar si menor o igual (3 >= 4) es igual a: '+v);
document.write('<br>');