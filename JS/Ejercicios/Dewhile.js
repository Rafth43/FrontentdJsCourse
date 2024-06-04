/*
Usando un bucle while escribir un script que pida un valor entero
y cree una lista con los números desde el 0 al valor tecleado.
Luego deberá sacar esa lista con un alert. ls números se separaran
por comas.
 */

/* let valor = prompt('Ingrese un numero')
let i = 0
let con = []

while (i <= valor) {
    con[i] = i
    i++
}
alert('Si le doy el numero '+valor+' pues deberá contar '+ con); */

/*
Se trata de pedir al usuario que teclee un número entre 1 y 5, si 
escribe alguno que esté fuera de ese rango deberá volver a pedir el 
número
*/

/* let valor = prompt('Ingrese un numero entre 1 y 5');

while (valor <1 || valor >5) {
    valor = prompt('Valor ingresado erróneo, debe Ingresar un numero entre 1 y 5');
}

document.write('El valor ingresado fue: ', valor); */


/*
Un script que preguntará al usuario si desea continuar con el progra-
ma. Si el usuario pulsa una letra n (mayúscula o minúscula), el pro-
grama finalizará. Cualquier otra entrada repetirá la pregunta
*/

/* let valor = prompt('¿Desea continuar con el programa?');

while (valor != 'n' && valor != 'N') {
    valor = prompt('¿Desea continuar con el programa?');
}
document.write('Programa cerrado'); */

/*
Escribir un script que pida al usuario una contraseña. Si coincide 
con la clave definida en el script le devolverá el mensaje "Acceso 
concedido" y si no coincide le devolverá el mensaje "Acceso Denegado". 
Si falla tres veces se emitirá el mensaje "Alerta, intruso"
*/

/* let contraseña = prompt('Ingrese su contraseña');
let contador = 2;
while (contraseña != 65941976 && contador != 0) {
    contraseña = prompt('Contraseña errada ingrese su contraseña de nuevo, posee un total de '+ contador);
    contador--
}
if (contraseña == 65941976) {
    document.write('Acceso concedido');
} else {
    alert('Alerta intruso');
} */

/*
En este script se pedirá al usuario que teclee un número cada vez. El 
proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma
de todos los números tecleados.
*/

/* let valor = parseInt(prompt('ingrese un numero')) ;
let sumatoria = 0;

while (valor != 0) {
    valor = parseInt(prompt('ingrese otro numero'));
    sumatoria += valor 
}
document.write('Programa cerrado la sumatoria de los números es '+sumatoria); */

/*
Este script le pide al usuario que vaya tecleando números enteros po-
sitivos hasta que el usuario ingrese el 0. En este caso el programa 
acaba mostrando el valor máximo y mínimo de los números tecleados.
*/

/* let valor = prompt('Ingrese un número');
let valores = [];
let máximo = 0;
let mínimo = 0;

while (valor != 0) {
    valor = prompt('Ingrese otro número');
    valores.push(Number(valor));
}

máximo = Math.max(...valores);
mínimo = Math.min(...valores);
document.write('El valor máximo introducido es: '+máximo);
document.write('<br>');
document.write('El valor mínimo introducido es: '+mínimo); */

/*
Este script le pide al usuario que vaya tecleando números una y otra 
vez, pero solo números pares, en caso de que teclee un número impar 
el programa acabará y dirá la cantidad de números pares ingresados 
(el 0 cuenta como par).
*/

/* let valor = 0;
let valores = [] ,i= 0;
while (valor % 2 == 0) {
    valor = prompt('Ingrese otro numero par');
    valores.push(valor)
}
valores.pop();
document.write('la cantidad de números pares ingresados es de: '+valores.length);  */

/*
Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar 
datos 3- Fin. El usuario deberá teclear uno de ellos y el programa 
mostrará la opción elegida. Si teclea un valor fuera del menu se mos-
trará un mensaje de error y se vuelve a pedir un número de opción. El 
programa finaliza al teclear el 3.
*/

/* let menu = prompt(['1- Leer datos. 2- Mostrar datos 3- Fin. ']);

while (menu < 0 || menu > 3) {
    alert('Error de selección');
    menu = prompt('Seleccione una opción valida del menu'+['1- Leer datos. 2- Mostrar datos 3- Fin. ']);
}
if (menu == 1 ) {
    alert(' la opción elegida es: Leer datos');
} else if (menu == 2) {
    alert(' la opción elegida es: Mostrar datos');
} else if (menu == 3){
    alert(' la opción elegida es: Fin');
}
 */

/*
Un script pedirá al usuario que vaya tecleando números de manera repe-
tida. cuando pulse 0, el programa muestra "La suma es " seguido de la 
suma de los números. Si esta suma es par el programa se repite y si es 
impar el programa acaba.
*/
let valor = 0, sumatoria = 0;
    valor = parseInt(prompt('Ingrese un numero'));
while (valor != 0) {
    valor = parseInt(prompt('Ingrese un numero'));
    sumatoria += valor 
    if (sumatoria % 2 == 0) {
        alert('La suma es '+sumatoria);
    
    } else {
        alert('La suma es '+sumatoria);
    }
}

