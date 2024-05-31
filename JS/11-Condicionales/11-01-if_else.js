/*
NOTA: Una parte muy importante de una estructura de control es la 
“condición”. Cada condición es una expresión que se evalúa a true 
o false. JavaScript ofrece un total de cuatro instrucciones para 
procesar código de acuerdo a condiciones determinadas por el 
programador: 

if: a sentencia “if” evalúa la condición en los paréntesis, y si 
el resultado es verdadero ( true ), ejecuta un bloque de código.

estos if vienen compuestos con un else que nos valida si el if 
devuelve un valor en false o un valor que no esperamos o que 
estemos esperando todo dependerá del programador. 

no es obligatorio utilizar el else pero se puede utilizar también
en un contexto donde se necesite utilizar mas de dos condiciones
esta condición es llamada "else if" que nos ayuda a generar una
condición controlada.

Por ejemplo:

*/

let edad = prompt('Ingrese su edad: ');
let frutas = prompt('Ingrese una fruta: ');

//if solo

if (edad >= 18) {
    document.write('Usted es mayor su edad es: ',edad);
    document.write('<br>');
}

//if con else
if (edad >= 18) {
    document.write('Usted es mayor su edad es: ',edad);
    document.write('<br>');
}else{
    document.write('Usted es menor su edad es: ',edad);
    document.write('<br>');
}

//if con elseif
if (frutas == 'manzana') {
    document.write('Usted selecciono una: ',frutas);
    document.write('<br>');
}else if(frutas == 'pera'){
    document.write('Usted selección una: ',frutas);
    document.write('<br>');
}else if(frutas == 'uva'){
    document.write('Usted selección una: ',frutas);
    document.write('<br>');
}else{
    document.write('Lo que indico no existe en el stock');
    document.write('<br>');
}