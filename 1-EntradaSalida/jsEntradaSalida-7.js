/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    
    var numeroUno;
    var numeroDos;
    var suma;
    parseInt()
    

    numeroUno = parseInt (document.getElementById("numeroUno").value );
    numeroDos = parseInt (document.getElementById("numeroDos").value  );

    
    suma = numeroUno + numeroDos;

    alert ("la suma es: " + suma);

	
}

function restar()
{

    var numeroUno;
    var numeroDos;
    var resta;
    parseInt()
    

    numeroUno = parseInt (document.getElementById("numeroUno").value );
    numeroDos = parseInt (document.getElementById("numeroDos").value  );

    
    resta = numeroUno - numeroDos;

    alert ("la resta es: " + resta);


	
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultado;
    parseInt()

    numeroUno = parseInt (document.getElementById("numeroUno").value);
    numeroDos = parseInt (document.getElementById("numeroDos").value);

    resultado = numeroUno * numeroDos;

    alert ("la multiplicacion es:" + resultado);
 	
}

function dividir()
{ var num1;
    var num2;
    var resultado;
    

    num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);

    resultado = num1 / num2;

    alert("la division es:" + resultado)


	
}

