function mostrar()
{
//tomo la edad  
var edad;

    edad = document.getElementById("edad").value;

    edad = parseInt(edad);

    if (edad >= 13 && edad <=17)
    {
        
                alert ("Es adolescente");
        
            }

    else if ( edad >17)
    {

        alert ("Es adulto");

    } else 
    {
        
                alert (" es menor");
        
            }



}//FIN DE LA FUNCIÓN