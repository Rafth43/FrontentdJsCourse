/*
============================================================
|                                                          |
|                      INCREMENTO                          |
|                                                          |
============================================================
*/

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
//Existen dos formas de incrementar el valor de una variable

/*
Esta el Pre-incremento donde el operador ++ va antes de la 
variable donde primero se le suma uno al valor de la variable
por ejemplo:
*/
let preIncremento = ++a ;
console.log(preIncremento);
console.log(a);

/*
Esta el Post-incremento donde el operador ++ va después de 
la variable donde se le suma uno a la variable luego de ver
el valor del mismo por ejemplo:
*/

let postIncremento = b++ ;
console.log(postIncremento);
console.log(b);

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
console.log(preDecremento);
console.log(c);

/*
Esta el Post-Decremento donde el operador -- va después de 
la variable donde se le disminuir uno a la variable luego de ver
el valor del mismo por ejemplo:
*/

let postDecremento = d-- ;
console.log(postDecremento);
console.log(d);

