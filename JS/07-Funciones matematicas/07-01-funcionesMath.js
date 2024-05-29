/*
NOTA:Una función en JavaScript es similar a un procedimiento — un conjunto de 
instrucciones que realiza una tarea o calcula un valor, pero para que un proce-
dimiento califique como función, debe tomar alguna entrada y devolver una sali-
da donde hay alguna relación obvia entre la entrada y la salida.

Math es uno de los objetos integrados globales o estándar de JavaScript y se 
puede usar en cualquier lugar donde se pueda usar JavaScript. Contiene constan-
tes útiles como π y la constante de Euler y funciones como floor(), round() y 
ceil() .
*/

/*
NOTA: Para redondear utilizamos la función Math.round() quien redondea el valor 
teniendo en cuenta el valor de los decimales si el decimal sobrepasael valor de 
0.5 redondea al proximo numero de resto dejara el numero tal cual como se ingresa.

También podemos redondear con la operación de Math.ceil() quien redondea el valor 
sea cual sea su decimal siempre redondea al numero siguiente esta función redondea 
cuando el valor del decimal va en incrementa.

Otra función para redondear es la operación de Math.floor() quien redondea el va-
lor sea cual sea su decimal siempre redondea al numero siguiente esta función re-
dondea cuando el valor del decimal va en decremento.

Por ejemplo:
*/

//Valor redondeado sin pasar el decimal 0.5
var precio = Math.round(599.45);
document.write('Valor de precio redondeado es: '+precio);
document.write('<br>');

//Valor redondeado pasando el decimal 0.5
var precio = Math.round(599.55);
document.write('Valor de precio redondeado es: '+precio);
document.write('<br>');

//Valor redondeado sin importar el decimal
var precio = Math.ceil(599.45);
document.write('Valor de precio redondeado es: '+precio);
document.write('<br>');

//Valor redondeado sin importar el decimal
var precio = Math.floor(600.1);
document.write('Valor de precio redondeado es: '+precio);
document.write('<br>');


/*
NOTA: Para resolver funciones trigonométricas podemos utilizar las funciones de 
Math.sin(), Math.cos(), estas nos ayudaran a obtener los resultados que nos ayuda-
ra a resolver problemas trigonométricos.

para utilizar esta función Math la utilizamos dentro de una variable donde le asig-
naremos el valor trigonométrico y luego mostramos el resultado.

lo mismo se genera con las demás funciones trigonométricas..

Por ejemplo:
*/
var seno = Math.sin(45);
document.write('El valor de seno de 45 grados es: ' +seno);
document.write('<br>');

var coseno = Math.cos(45);
document.write('El valor de coseno 45 grados es: ' +coseno);
document.write('<br>');


/*
NOTA: Para resolver funciones aritméticas como el exponencial podríamos utilizar la
función Math.exp() la cual calcula el exponente de un numero.

Por ejemplo:
*/
var exponenciacion = Math.exp(5);
document.write('El valor del exponencial es: ' +exponenciacion);
document.write('<br>');

/*
Para calcular el exponente de un numero podemos utilizar la función Math.pow() la cual
nos ayuda a elevar un numero por su exponente igual que el operador matemático (**).

para utilizar esta función debemos tener en cuenta que dentro de la misma debemos decla-
rar el numero y luego de una coma el numero a cual vamos a elevar.

Por ejemplo:
*/
var exponente = Math.pow(4,5)
document.write('El valor del exponente de 4 elevado a la 5 es: ' +exponente);
document.write('<br>');

/*
NOTA: También se puede calcular el logaritmo de un numero con la función Math.log() existen
varios tipos de logaritmos como lo son:
Math.log10()
Math.log1p()
Math.log2()
Estos son utilizados para cálculos matemáticos mas avanzados nosotros utilizaremos la 
función Math.log() para el ejemplo.

Por ejemplo:
*/

var logaritmo = Math.log(10);
document.write('El valor del logaritmo es: ' +logaritmo);
document.write('<br>');

/*
NOTA: Otra función importante es la función Math.abs() la cual calcula el valor absoluto de 
un numero.

Por ejemplo:
*/

var absoluto = Math.abs(-10);
document.write('El valor absoluto -10 es: ' +absoluto);
document.write('<br>');

/*
NOTA: Una de las formas mas fáciles de calcular el valor máximo o mínimo de un número es con 
las funciones matemáticas Math.max() y Math.min() para calcular el máximo o el mínimo 
de varios numero utilizamos estas funciones.

para utilizar esta función Math colocamos dentro de la función un arreglo de números 
para que ela misma función verifique cual es el valor máximo o mínimo que existe.

Por ejemplo:
*/

var maximo = Math.max(10, 50 , 600 , 1000);
document.write('El valor máximo entre (10 , 50, 600, 1000) es: ' +maximo);
document.write('<br>');

var minimo = Math.min(10, 50 , 600 , 1000);
document.write('El valor mínimo entre (10 , 50, 600, 1000) es: ' +minimo);
document.write('<br>');


/*
NOTA: Si queremos obtener un valor aleatorio podemos utilizar la función Math.random la cual 
toma un valor numérico cualquiera pero nos dará un número ramdon con decimales y el va-
lor principal siempre lo trae 0.

si quisieras hacer un número random mas largo utilizaremos la combinación de funciones 
donde utilizando la función matemática Math.round() y dentro colocamos la función ram-
don y esto lo multiplicamos por un numero de seis cifras y nos generara un numero ale-
atorio que este comprendido entre uno y seis cifras.

Por ejemplo:
*/

//Valor ramdon de un numero con decimales
var aleatorio = Math.random();
document.write('El valor aleatorio: ' +aleatorio);
document.write('<br>');

//Valor ramdon sin decimales
var aleatorio2 =Math.round(Math.random()*123456);
document.write('El valor aleatorio: ' +aleatorio2);
document.write('<br>');

/*
NOTA: para obtener la raíz cuadrada de un numero utilizaremos la función Math.sqrt() la cual
da como resultado la raíz cuadrada de un número

Por ejemplo:
*/

var raiz = Math.sqrt(25);
document.write('El valor de la raíz cuadrada de 25 es : ' +raiz);
document.write('<br>');