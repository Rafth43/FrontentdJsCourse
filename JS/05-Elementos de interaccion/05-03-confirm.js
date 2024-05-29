/*
NOTA: La función confirm muestra una ventana modal con una pregunta y 
dos botones: OK y CANCELAR. El resultado es true si se pulsa OK y 
false en caso contrario.

esta función nos ayuda a mostrar en pantalla la acción la cual indico
el usuario teniendo en cuenta lo anterior, para ejecutar esta función
debemos crear una variable para almacenar el valor y luego el mensaje
que queremos enviar o que queremos que nos respondan.

y luego si queremos saber que fue lo que indico el usuario podríamos
utilizar cualquiera de las formas de mostrar funciones en JS, alert(),
document.write(), console.log(), entre otros

Por ejemplo:
 */

let esUnProgramador = confirm("¿Eres un programador?");

alert( esUnProgramador ); 