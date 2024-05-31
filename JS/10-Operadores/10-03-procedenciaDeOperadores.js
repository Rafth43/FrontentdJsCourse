/*
NOTA: la procedencia de operadores trata de interpretarlas operaciones aritméticas 
por orden de prioridad donde en JS existen varios niveles de prioridad pro ejemplo:

__________________________________________________________________________________
|_____NIVEL__________OPERADOR___________________________LECTURA__________________|
|              |        ()           |                                           |
|      15      |        []           |  la operación es de izquierda a derecha   |
|              |        -            |                                           |
|______________|_______new___________|___________________________________________|
|              |     ++ o --         |                                           |
|      14      |      + o -          |                                           |
|              |        !            |  la operación es de derecha a izquierda   |
|              |     delete          |                                           |
|              |     typeof          |                                           |
|______________|______void___________|___________________________________________|
|              |        *            |                                           |
|      13      |        %            |  la operación es de izquierda a derecha   |
|______________|________/____________|___________________________________________|
|______12______|_______+ y -_________|_ la operación es de izquierda a derecha___|
|              |        >>           |                                           |
|______11______|________<<___________|_ la operación es de izquierda a derecha___|
|              |      < o <=         |                                           |
|______10______|______> o >=_________|_ la operación es de izquierda a derecha___|
|              |        ==           |                                           |
|      09      |        !=           |  la operación es de derecha a izquierda   | 
|              |       ===           |                                           |
|______________|_______!==___________|___________________________________________|
|_______08_____|________&____________|_ la operación es de izquierda a derecha___|
|_______07_____|________^____________|_ la operación es de izquierda a derecha___|
|_______06_____|________|____________|_ la operación es de izquierda a derecha___|
|_______05_____|_______&&____________|_ la operación es de izquierda a derecha___|
|_______04_____|_______||____________|_ la operación es de izquierda a derecha___|
|_______03_____|_______?:____________|_ la operación es de derecha a izquierda___|
|              |        =            |                                           |
|              |      += -=          |                                           | 
|      02      |    *= /= %=         |  la operación es de derecha a izquierda   |
|              |    &= ^= |=         |                                           |
|______________|_____<<= >>=_________|___________________________________________|
|_______01_____|_______,____________|_ la operación es de izquierda a derecha____|

En la tabla de precedencia de operadores se denota desde que punto a que punto
funcionan  los operadores y como se leen por ejemplo:
*/

/*
NOTA: Para que JS lea la operación de derecha a izquierda podemos utilizar el nivel 15
donde están (), [], -, new, por ejemplo:
*/

let a = 5, b = 6, c = 2, d = 4;

let x = (a + b) * c / d;
let y = [a * b] + c;
let z = --a * b + c;
console.log(x);
console.log(y);
console.log(z);

/*
NOTA: Por otra parte los operaciones que comienzan de izquierda a derecha podemos comenzar
a evaluarlas desde el nivel 13 para abajo donde se encuentran la mayoría de los 
operadores matemáticos por ejemplo.
*/

let r = a % b + d;
let e = a >> b + d;
let q = a === b + d;
console.log(r);
console.log(e);
console.log(q);







