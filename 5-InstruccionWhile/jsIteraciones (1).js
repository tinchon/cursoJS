/*
while significa mientras. es similar al if (condicion); cuando llega  a la llave de cierre vuelve a 
evaluar la condicion hasta que termine con un loop

break se usa para recortar el recorrido y que no continue
continue no se hace y deja de pasar a lo siguiente(saltea)

ESTRUCTURA

DO -HACER-
{
	
}
WHILE (CONDICION)
;


----

FOM



*/
function mostrar()
{
	var contador = 0;



	while (contador < 10)
{
	console.log("Cont:" + contador);
	contador++; //es igual a poner +1
		if (contador ==4)
		{break;
		}
}




	//alert('iteración while');


}//FIN DE LA FUNCIÓN