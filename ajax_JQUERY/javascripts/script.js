function cargarDatos() {
    $.ajax({
        url:"http://127.0.0.1:5500/datos.JSON"
    }).done(function(respuesta){
        $(".contenedor").html("hola:" +  respuesta.nombre)//de esta manera seleccionamos el elemento con clase contenedor
            console.log(respuesta.nombre)
            console.log(respuesta.edad)
            console.log(respuesta.pais)
            console.log(respuesta.apellido)
            $(".contenedor").slideDown("slow");
    })
}//llamada a ajax ubicacion del servidor indicada en el url




$(document).ready(function(){//las funciones comienzan con caracter $, cuando el documento este .ready(listo) se van a ejecutar las instrucciones dentro dela funcion
    $(".contenedor").hide();
    $("button.cargar").click(function(){//algo similar a en evento onclick de javascript
    cargarDatos();//asociamos una funcion a un evento
});
});