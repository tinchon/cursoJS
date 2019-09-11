/*

default es como el else; break es como para terminar y continuar;

*/

function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes)
{
    
    case  "Enero":
    case "Febrero": alert("Verano")
break;
case "Marzo": alert("a clases");
break;
case "Julio": alert("se vienen las vacaciones!!!.")
break;
case "Diciembre": alert("FIESTAS!!!")
break;
default:
alert("Default")

}



}//FIN DE LA FUNCIÓN