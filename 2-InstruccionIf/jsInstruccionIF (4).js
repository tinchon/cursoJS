function mostrar()
{
//tomo la edad  
var edad;

    edad = document.getElementById("edad").value;

    edad = parseInt(edad);

    //if (edad >= 13 && edad <=17)
    if (!(edad < 13 || edad >17))/*! SE USA PARA TOMAR EL CONTRATIO SIN MODIFICAR EL MENSAJE - NaN significa not and number
    funcion isNaN (si no es un numero me devuelve T sino F)
    */
    {

        alert ("Es adolescente");

    } else 
    {
        
                alert (" es adolescente");
        
            }


}//FIN DE LA FUNCIÓN