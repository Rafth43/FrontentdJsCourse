/*
NOTA:comparan valores booleanos y devuelven respuestas booleanas. Hay dos 
tipos de operadores lógicos AND y OR. Estos operadores por lo general se 
escriben && (AND) y || (OR).

&& = hace alusión a una variable y otra 
|| = hace alusión a una variable o otra
*/
// Ejemplo de && regresa true si los operando son true 
let a = 1  , b = 0 , c = 10;

if (a >= b && a <= c) {
    console.log("si esta en el rango");
} else {
    console.log("No esta en el rango");
}


// Ejemplo de || funciona si alguno de los operando es true
let vacaciones = false , diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log("Si ira a al juego");
} else {
    console.log("No ira a al juego");
}

