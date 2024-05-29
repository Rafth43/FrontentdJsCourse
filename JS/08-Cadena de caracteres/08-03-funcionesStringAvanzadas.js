/*
NOTA: Existen funciones que podemos utilizar para string las cuales
se pueden utilizar para ayudarnos en cualquier eventualidad las 
funciones que existen en Js son :

|=============================================================================|
|                                                                             |
|                           FUNCIONES MODIFICADORAS                           |
|                                                                             |
|=============================================================================|
|      Función           |                  Tarea y comentarios               |
|=============================================================================|
|=============================================================================|
|   toUpperCase()        |          Transforma la cadena a mayúsculas         |
|=============================================================================|
|=============================================================================|
|   toLowerCase()        |          Transforma la cadena a minúsculas         |
|=============================================================================|
|=============================================================================|
|  replace('carácterA',  |  Reemplaza la primera aparición de carácter A por  |
|  'caracterB')          |  carácter B en la cadena.                          |
|=============================================================================|
|=============================================================================|
|  replace (/carácterA/g,|  Reemplaza todas las aparición de carácter A por   |
|  'caracterB')          |  carácter B en la cadena. Se debe tener en cuenta  |
|                        |  que el primer parámetro no va entre comillas.     |
|=============================================================================|
|=============================================================================|
|  replace (/cadenaA/g,  |  Reemplaza todas las aparición de la subcadena A   |
|  'cadenaB')            |  por cadena B. Se debe tener en cuenta             |
|                        |  que el primer parámetro no va entre comillas.     |
|=============================================================================|

Por ejemplo:
*/

var textoUsuario = prompt ('Introduzca una frase');

var mayusculas = textoUsuario.toUpperCase(); 

var minusculas = textoUsuario.toLowerCase();

var primeraLetra = textoUsuario.charAt(0); 

var ultimaLetra = textoUsuario.charAt(textoUsuario.length-1);

var cadenaCambiaPrimeraePorE = textoUsuario.replace('e', 'E');

var cadenaCambiaTodasePorE = textoUsuario.replace (/e/g, 'E');

var reemplazoSubcadena = textoUsuario.replace (/plo/g, 'XX');

document.write('Transformación en mayúsculas es:'+mayusculas);
document.write('<br>');
document.write('Transformación en minúsculas es:'+minusculas);
document.write('<br>');
document.write('adquisición de la primera letra:'+primeraLetra);
document.write('<br>');
document.write('adquisición de la ultima letra:'+ultimaLetra);
document.write('<br>');
document.write('cambio de la primera letra por la letra E (si existe "e"):'+cadenaCambiaPrimeraePorE);
document.write('<br>');
document.write('Cambia todas las letras "e" por "E":'+cadenaCambiaTodasePorE);
document.write('<br>');
document.write('reemplaza plo por XX (si existe en la cadena):'+reemplazoSubcadena);
document.write('<br>');
document.write('<br>');


/*
|=============================================================================|
|                                                                             |
|              FUNCIONES PARA EXTRAER SUBCADENAS O CARACTERES                 |
|                                                                             |
|=============================================================================|
|      Función           |                  Tarea y comentarios               |
|=============================================================================|
|=============================================================================|
|                        |  Devuelve la subcadena extraída entre los índices  | 
|                        |  firstIn y lastOut-1. Es decir, el carácter en la  |
|   substring(firstIn,   |  posición firstIn se incluye y el carácter en la   | 
|   lastOut)             |  posición lastOut se excluye. Recordar que el pri- |
|                        |  mer índice es cero y el último la longitud menos  |
|                        |  uno.                                              |
|=============================================================================|
|=============================================================================|
|                        |  Misma función omitiendo el segundo parámetro.     |
|   substring (firstIn)  |  Devuelve la subcadena desde el índice firstIn     | 
|                        |  hasta el final de la cadena                       |
|=============================================================================|
|=============================================================================|
|                        |  Análogo a substring pero permite que los índices  |
|     slice (firstIn,    |  sean negativos. En este caso, se toman desde el   |
|     lastOut)           |  final de la cadena hacia el principio, excluyendo |
|                        |  el último carácter.                               |
|=============================================================================|
|=============================================================================|
|                        |  Análogo a substring pero permite definir que se   |
|     slice (firstIn)    |  tome una porción final de cadena, desde el índice |
|                        |  señalado hasta el final.                          |
|=============================================================================|
|=============================================================================|
|                        |  Devuelve un array con las subcadenas resultantes  |
|                        |  de dividir la cadena original en subcadenas deli- |
| split('caracterSepara')|  mitadas por el carácter separador especificado    |
|                        |  (que queda excluido). Si se indican unas comillas |
|                        |  vacías se extraen todos los caracteres a un array.|
|=============================================================================|
|=============================================================================|
|  nombreCadena[indice]  |  Devuelve el carácter en la posición indicada por  |
|                        |  índice.                                           |
|=============================================================================|

Por ejemplo
 */
var subcadena26 = textoUsuario.substring(1, 6);

var subcadena5aFinal = textoUsuario.substring(5); 

var subcadena26sli = textoUsuario.slice(1,6);

var subcadena5aFinalsli = textoUsuario.slice(5);

var tresCharDesdeFinal = textoUsuario.slice(-5, -2); 

var caracterIndice3 = textoUsuario[3];

document.write('Subcadena entre segunda letra y sexta letra es:'+subcadena26);
document.write('<br>');
document.write('Subcadena desde el carácter indice 5 hasta el final es:'+subcadena5aFinal);
document.write('<br>');
document.write('Subcadena desde el carácter indice 5 hasta el final es:'+subcadena26sli);
document.write('<br>');
document.write('se extrae con slice:'+subcadena5aFinalsli);
document.write('<br>');
document.write('Uso de slice negativo para extraer del quinto por atrás al antepenúltimo carácter:'+tresCharDesdeFinal);
document.write('<br>');
document.write('<br>');
/*
|=============================================================================|
|                                                                             |
|               FUNCIONES PARA RECUPERAR ÍNDICES DE POSICIONES                |
|                                                                             |
|=============================================================================|
|      Función           |                  Tarea y comentarios               |
|=============================================================================|
|=============================================================================|
|                        |  Devuelve la letra situada en la posición indice-  |
| charAt(indicePosicion) |  Posición. Tener en cuenta que el primer índice es |
|                        |  cero y el último la longitud menos uno.           |
|=============================================================================|
|=============================================================================|
|                        |  Devuelve el índice de la primera aparición de la  |
|                        |  cadena especificada empezando a buscar desde la   |
|   indexOf ('cadena')   |  izquierda. Si no existe el carácter se devuelve   |
|                        |  -1. Recordar que la primera letra lleva índice    |
|                        |  cero.                                             |
|=============================================================================|
|=============================================================================|
|   indexOf ('cadena',   |  Devuelve el índice de la primera aparición de la  |
|   indiceInicial)       |  cadena especificada empezando la búsqueda desde   |
|                        |  el índice inicial especificado (incluido).        |
|=============================================================================|
|=============================================================================|
|                        |  Devuelve el índice de la última aparición de la   |
| lastIndexOf ('cadena') |  cadena especificada en un string. Si no existe el |
|                        |  carácter se devuelve -1. Recordar que la primera  |
|                        |  letra lleva índice cero.                          |
|=============================================================================|
*/

var cincoUltimasLetras = textoUsuario.slice(-5);

var indicePrimeraP = textoUsuario.indexOf('o'); 

var indicePrimeraPDesdeIndice5 = textoUsuario.indexOf('p', 5);

var ultimaP = textoUsuario.lastIndexOf('p'); 

var subcadenasPorEspacios = textoUsuario.split(' ');

document.write('Cinco últimos caracteres:'+cincoUltimasLetras);
document.write('<br>');
document.write('Indice posición de la primera p en la cadena:'+indicePrimeraP);
document.write('<br>');
document.write('Indice primera p desde la 5ta posición es:'+indicePrimeraPDesdeIndice5);
document.write('<br>');
document.write('División de subcadenas por espacios:'+ultimaP);
document.write('<br>');
document.write('Cambia la subcadena por una coma'+subcadenasPorEspacios);
document.write('<br>');
