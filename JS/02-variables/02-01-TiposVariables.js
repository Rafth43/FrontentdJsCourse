/*
NOTA: LAs variables son espacios en memoria utilizados para almacenar valores
los cuales fungen como formas en las cuales podemos designar parámetros para
asi poder utilizarlos luego, es decir, una variable es un lugar donde almacenar
numero, letras o numero y letras para utilizarlas luegos.

las variables son case sensitive que quiere decir esto que no es lo mismo llamar
una variable nombre "Todo en minúsculas" que Nombre "con la primera letra en 
mayúscula" ya que se rigen por el parámetro case sensitive.

En Js existen varios tipos de formar de como llamar una variable existen las 
variables:

VAR : La sentencia var declara una variable, opcionalmente inicializándose 
con un valor.

LET : la sentencia let te permite declarar variables limitando su alcance 
(scope) al bloque, declaración, o expresión donde se está usando.

CONST : La sentencia const es una variables de sólo lectura (no confundir con 
inmutables), esto quiere decir que, cuando asignamos una variable, el nombre 
de esta va estar asignada a un puntero en memoria, el cual no puede ser sobres-
crito o reasignado.

Por ejemplo:
*/

var nombre="Rafael";
var Nombre="Antonio";
var _nombre="Rafita";
var NOMBRE="RAFILIN";
var $_nombre="Rafita Money"

document.write(nombre);

let saludo=" hola";
let Saludo=" Hola";
let _saludo=" _hola";
let SALUDO=" HOLAAA!";
let $_saludo=" Saludo con dinero"

document.write(saludo);

const constante=" constante estatica";
const Constante=" QUEJEQUIETO";

document.write(constante);