/*
NOTA: Existen dos operadores importantes en JS los cuales
son operadores de incremento y operadores de decremento los
cuales tienen como función aumentar o disminuir en uno el 
valor de la variable:

OPERADOR         DESCRIPCIÓN
    ++           Incremento
    --           Decremento
*/

let a = 5, b = 6;
/*
============================================================
|                                                          |
|                      INCREMENTO                          |
|                                                          |
============================================================
*/

//Existen dos formas de incrementar el valor de una variable

/*
Esta el Pre-incremento donde el operador ++ va antes de la 
variable donde primero se le suma uno al valor de la variable
por ejemplo:
*/

let preIncremento = ++a ;
document.write('El valor antes del pre incremento es igual a: '+preIncremento);
document.write('<br>');
document.write('El valor pre incremento es igual a: '+a);
document.write('<br>');

/*
Esta el Post-incremento donde el operador ++ va después de 
la variable donde se le suma uno a la variable luego de ver
el valor del mismo por ejemplo:
*/

let postIncremento = b++ ;
document.write('El valor antes del post incremento es igual a: '+postIncremento);
document.write('<br>');
document.write('El valor post incremento es igual a: '+b);
document.write('<br>');

/*
============================================================
|                                                          |
|                      DECREMENTO                          |
|                                                          |
============================================================
*/

//Existen dos formas de disminuir el valor de una variable

/*
Esta el Pre-Decremento donde el operador -- va antes de la 
variable donde primero se le resta uno al valor de la variable
por ejemplo:
*/

let c = 5, d = 6;

let preDecremento = --c ;
document.write('El valor antes del pre decremento es igual a: '+preDecremento);
document.write('<br>');
document.write('El valor pre decremento es igual a: '+c);
document.write('<br>');

/*
Esta el Post-Decremento donde el operador -- va después de 
la variable donde se le disminuir uno a la variable luego de ver
el valor del mismo por ejemplo:
*/

let postDecremento = d-- ;
document.write('El valor antes del post decremento es igual a: '+postDecremento);
document.write('<br>');
document.write('El valor post decremento es igual a: '+d);
document.write('<br>');

