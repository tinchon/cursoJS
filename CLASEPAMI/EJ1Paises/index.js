window.addEventListener('load', () => {

    let selPaises = document.getElementById('selPaises');
    let selCiudades = document.getElementById('selCiudades');

    cargarSelect(selPaises, obtenerPaises(datos));

}

);

function cargarSelect(select, arr) {

    let option;

    arr.forEach(element => {
        option = document.createElement('option');
        let texto = document.createTextNode(element);
        option.appendChild(texto);
        option.setAttribute('value', element);

        select.appendChild(opcion);

    });








};

function obtenerPaises(arr) {
    return arr.map(elemento => elemento.pais)
        .unique()
        .sort()


};


function ObtenerCiudades(arr, pais) {
    let ciudades = arr.filter(function (elemento) {
        return elemento.pais === pais;


    })
        .map(function (elemento) {
            return elemento.ciudades;
        }
        )
        .unique()
        .sort();


};

Array.prototype.unique = function () {


}