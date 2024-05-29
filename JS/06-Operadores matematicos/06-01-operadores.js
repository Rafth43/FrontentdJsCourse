/*NOTA: Existen varios tipos de operadores aritméticos en JS los cuales 
son los mismos que en matemática existen varios tipos de operadores 
aritméticos en Js.

OPERADOR       DESCRIPCIÓN

    +          Adición
    -          sustracción
    *          Multiplicación
    **         Exponenciación
    /          Division
    %          Residuo
    ++         Incremento
    --         Decremento

Con estos operadores podemos hacer las mayorías de las funciones matemáticas
necesarias también podríamos hacer una calculadora simple.
Por ejemplo:
*/

let a, b, suma, resta, multiplicacion, divicion, residuo, potenciacion;

a = prompt('Ingrese un numero:');
b = prompt('Ingrese un segundo numero:');

//para la suma utilizaremos (+)
suma = a + b;
document.write(suma);
document.write('<br>');

//para la resta utilizaremos (-)
resta = a - b;
document.write(resta);
document.write('<br>');

//para la multiplicación utilizaremos (*)
multiplicacion = a * b;
document.write(multiplicacion);
document.write('<br>');

//para la division utilizaremos (/)
divicion = a / b;
document.write(divicion);
document.write('<br>');

//para la residuo utilizaremos (%)
residuo = a % b;
document.write(residuo);
document.write('<br>');

//para la potenciación utilizaremos (**)
potenciacion = a ** b;
document.write(potenciacion);
document.write('<br>');

/*
NOTA: con la forma que tenemos anterior no podemos sumar correctamente
ya que en vez de sumar concatena para que eso no suceda podemos hacer
varias cosas pero la mas fácil es parsear los prompt para que asi 
los caracteres ingresados se vuelvan números enteros o también
podríamos volver las variables en números enteros de la siguiente
forma.
*/

//parseando los prompt
a = parseInt(prompt('Ingrese un numero:'));
b = parseInt(prompt('Ingrese un segundo numero:'));

suma = a + b;
document.write(suma);
document.write('<br>');

//transformando las variables a números enteros
a = prompt('Ingrese un numero:');
b = prompt('Ingrese un segundo numero:');

suma = Number(a)  + Number (b);
document.write(suma);
document.write('<br>');