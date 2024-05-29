/*
NOTA: Los operadores de asignación sirven para asignar, igualar,
diferenciar y verificar los valores de variables dadas, existen
varios tipos de operadores de asignación en JS.

Por ejemplo:
*/

// VALOR DE ASIGNACIÓN SIMPLE ( = )

/*
NOTA: la función del operador de asignación simple es
igualar una variable al valor asignado con el signo igual (=).

Por ejemplo:
*/

let a = 1, b = 2 , c = 3 , d = 4, e = 2, f = 8, g = 5, h = 2;
a = 1;
document.write('El valor de este número es igual a: '+a);
document.write('<br>')

// VALOR DE ASIGNACIÓN COMPUESTO ( +=, -=, *=, %=, /=, **=)

/*
NOTA: la función de los operadores de asignación compuesto es 
combinar una operación de asignación con otra operación aritmé-
tica para generar el nuevo valor ya sabemos que al agregar el 
valor de sumar (+) y un igual = esto sumara el numero agregado
en la variable y asi se hará con cada una de las operaciones 
aritméticas que le coloquemos a los valores de asignación compuesta.

Por ejemplo:
*/

//sumamos el valor de la variable contra el nuevo valor (3)
b += 3;

//restamos el valor de la variable contra el nuevo valor (5)
d -= 5;

//multiplicamos el valor de la variable contra el nuevo valor (2)
e *= 2;

//dividimos el valor de la variable contra el nuevo valor (5)
g /= 5;

//sacamos residuo del valor de la variable contra el nuevo valor (3)
f %= 3;

//potenciamos el valor de la variable contra el nuevo valor (6)
h **= 6;

document.write('El valor de este número es igual a: '+b);
document.write('<br>')
document.write('El valor de este número es igual a: '+d);
document.write('<br>')
document.write('El valor de este número es igual a: '+c);
document.write('<br>')
document.write('El valor de este número es igual a: '+d);
document.write('<br>')
document.write('El valor de este número es igual a: '+e);
document.write('<br>')
document.write('El valor de este número es igual a: '+f);
document.write('<br>')
document.write('El valor de este número es igual a: '+g);
document.write('<br>')
document.write('El valor de este número es igual a: '+h);