function obtenerDatos(){
var peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://127.0.0.1:5500/datos.json') 
    
    peticion.onload = function () {
        var dato = JSON.parse(peticion.response)
           document.getElementById("contenedor").innerHTML= "pais:"+dato.pais
    }

peticion.send();
};

