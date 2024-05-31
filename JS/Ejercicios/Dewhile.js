/*
Usando un bucle while escribir un script que pida un valor entero
y cree una lista con los números desde el 0 al valor tecleado.
Luego deberá sacar esa lista con un alert. ls números se separaran
por comas.
 */
let valor = prompt('Ingrese un numero')
let i = 0
let con = []

while (i <= valor) {
    con[i] = i
    i++
}
alert('Si le doy el numero '+valor+' pues deberá contar '+ con);

