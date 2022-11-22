function obtenerDatos(){
var peticion = new XMLHttpRequest();
    peticion.open('GET', 'datos.json') 
    
    peticion.onload = function () {
        var dato = JSON.parse(peticion.response)
           document.getElementById("contenedor").innerHTML= "Nombre:"+dato.nombre}           
peticion.send();                            
};

