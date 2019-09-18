/*el for es igual al while pero en una linea resumida
FOR
inicia en la variable, mira la condicion, ejecuta la accion y sigue con incremento.
queda loopeando hasta que la condicion sigue siendo true

DO WHILE, la condicio esta al final y se ajecuta al menos una vez.

Inicializar el codigo: debe hacerlo cuando la voy a utilizar para grabar; sino no es necesario inicializar.
let es igual a var pero solo en ese momento scope

---

contador: es cuando suma con una constante
acumulador: es cuando suma con una variable

----



*/

function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;



	for (var/*let se usa para solo este scope*/ i=0/*variable*/; i<5/*condicion*/; i ++/*incremento*/)
	{
			numero = parseInt (prompt("ingrese un numero"));

			//acumulador = acumulador + numero;--- 
			acumulador += numero;//equivalentes estas dos opciones

			
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN