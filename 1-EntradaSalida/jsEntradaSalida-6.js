/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

