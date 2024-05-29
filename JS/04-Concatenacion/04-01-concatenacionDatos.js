/*
NOTA:La concatenación de cadenas siempre ocurre en el mismo orden 
en el que se escriben los operados. El operando izquierdo se convi-
erte en la parte izquierda de la cadena, y el operando derecho en 
la parte derecha, es decir, en Js Para unir cadenas en JavaScript 
el símbolo de más (+), el mismo operador que usamos para sumar 
números, pero en este contexto hace algo diferente.

Existe otro concatenado en Js que es la coma (,) este signo se 
utiliza también para concatenar cadenas de caracteres.

También tenemos la funcion concat(concatenacion); cumple la misma
función de el mas (+) y la coma (,).

Por ejemplo:
*/
//Concatenacion con signo mas (+)
let primerNombre = "Pedro"
let segundoNombre = "Juan"

document.write(primerNombre+' '+segundoNombre);

/*
NOTA: En el ejemplo anterior podemos denotar que el signos de mas (+) 
concatena primerNombre con un espacio en blanco que se encuentra entre 
comillas y luego segundoNombre. Esta es la forma tradicional de hacerlo 
pero no debemos olvidar la existencia de la concatenación con coma (,).

Por ejemplo:
*/

//concatenación con signo de puntuación coma (,)
let primerApellido = "Morales"
let segundoApellido = "Castillas"

document.write(' ',primerApellido,' ',segundoApellido);

/*
NOTA: el concat();  El método concat() combina dos o más cadenas de texto
y devuelve una cadena de texto nueva. 

Por ejemplo:
*/

let saludo = "Buenos dias Sr(a). ".concat(primerNombre);
document.write('<br>')
document.write(saludo);

/*
NOTA: Se puede concatenar numero también no solamente texto se puede conca-
tenar. 

Por ejemplo:
*/

let saldo = 200.00;
document.write('<br>')
document.write(saldo);



