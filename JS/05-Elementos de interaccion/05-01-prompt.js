/*
NOTA: para capturar datos en Js, existen muchas formas pero una de 
las que utilizaremos es la función prompt la cual muestra un mensaje 
pidiendo al usuario que introduzca un texto. Donde si hace click en
aceptar retorna el texto o si se hace clic en cancelar o se presiona 
Esc, retorna null.

prompt siempre espera un mensaje string o caracteres indefinidos para
mostrar un mensaje tipo label.

antes que nada debemos asignar variables donde se almacenaran los valo-
res para luego utilizarlos donde se necesitan, las variables como ya 
sabemos se comportan como espacios en memoria para almacenar cierto
contenido.

Por ejemplo:
*/

let nombre, edad;

nombre = prompt('Ingrese su nombre: ');
edad = prompt('Ingrese su edad: ');
direccion = prompt('Ingrese dirección: ');
correo = prompt('Ingrese su correo electrónico:')

document.write('El nombre que ingreso el usuario es: '+nombre);
document.write('<br>');
document.write('La edad que ingreso el usuario es: '+edad);
document.write('<br>');
document.write('La dirección que ingreso el usuario es: '+direccion);
document.write('<br>');
document.write('El correo que ingreso el usuario es: '+correo);