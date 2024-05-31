/*
NOTA: La declaración switch evalúa una expresión, comparando el 
valor de esa expresión con una instancia case , y ejecuta decla-
raciones asociadas a ese case , así como las declaraciones en 
los case que siguen.

Se puede utilizar para simplificar la forma en la que hacemos 
muchas validaciones al tiempo o si queremos validad varias condi-
ciones.

Por ejemplo:
*/

let valor;
valor = parseInt(prompt("Ingrese un valor entre 1 y 3"));
document.write("El valor: ", valor);
document.write('<br>');

switch (valor) {
    case 1:
        document.write("El valor que a ingresado es: ", valor);
        document.write('<br>');
        document.write('<br>');
    break;
    case 2:
        document.write("El valor que a ingresado es: ", valor);
        document.write('<br>');
        document.write('<br>');
    break;
    case 3:
        document.write("El valor que a ingresado es: ", valor);
        document.write('<br>');
        document.write('<br>');
    break;

    default:
        document.write("El valor que a ingresado no se encuentra registrado el valor ingresad es: ", valor)
        document.write('<br>');
        document.write('<br>');
    break;
}

/*
Los switch también se pueden utilizar con valores tipo string o 
cadena de caracteres de la siguiente forma

Por ejemplo:
*/

let color;
color = prompt("Ingrese un color entre amarillo, azul y rojo");
document.write("El color es: ", color);
document.write('<br>');

switch (color) {
    case 'amarillo':
        document.write("El color que a ingresado es: ", color);
        document.write('<br>');
    break;
    case 'azul':
        document.write("El color que a ingresado es: ", color);
        document.write('<br>');
    break;
    case 'rojo':
        document.write("El color que a ingresado es: ", color);
        document.write('<br>');
    break;

    default:
        document.write("El color que a ingresado no se encuentra registrado el color ingresad es: ", color);
        document.write('<br>');
    break;
}