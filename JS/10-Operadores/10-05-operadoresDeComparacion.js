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
console.log(x);

/*
También, devuelve true por el simple echo de que ( == ) evalúa si es valor es igual
y como d es 5 pero en string el verifica su valor y lo compara, es decir, el operador 
de igualdad no compara tipo de valores.
*/
let g = a == d;
console.log(g);

/*
Donde: === genera una igualación fuerte que si valida el valor existente y 
compara si el valor es exactamente el mismo.
*/

let y = b === c;
console.log(y);


//Donde: != genera una diferencia entre valor existente y el valor impuesto.

let z = a != b;
console.log(z);

/*
También, devuelve false por el simple echo de que ( != ) evalúa si el valor es diferente
a d y de es 5 pero en string el verifica su valor y lo compara, es decir, el operador de
igualdad no compara tipo de valores.
*/

let h = a != d;
console.log(h);

//Para revisar el tipo de valor en una operación (!=) se le agrega un ( = )

let u = a !== d;
console.log(u);
