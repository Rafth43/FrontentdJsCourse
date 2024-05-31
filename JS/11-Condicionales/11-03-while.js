/*
NOTA: La sentencia (hacer mientras) o en ingles while crea un 
bucle que ejecuta una sentencia especificada, hasta que la 
condición de comprobación se evalúa como falsa.

El bucle while es otra estructura de control de flujo, concre-
tamente lo que hace es repetir un código mientras dure una 
determinada condición. Se puede decir que el bucle while se 
utiliza para hacer algo repetidamente, bajo unas condiciones 
específicas, sin saber cuantas veces se repetirá.

Por ejemplo:
 */

let numero = 1; 

while (numero < 10 ) {
    document.write('esta es la vuelta n°: ', numero);
    document.write('<br>');
    numero++;
}
document.write('esta es la vuelta n°: ', numero, ' y el final del bucle')