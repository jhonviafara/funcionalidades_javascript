function dibujar() {
    //tomamos el elemento de el DOM y lo asignamos a una variable
    var canvas = document.getElementById("lienzo")
    //existen varios conceptos como el 3d sin embargo este es el mas simple
    var contexto = canvas.getContext('2d'); 
    //variable que representa el centro de nuestro canvas
    var centro = {
        x:canvas.width / 2,//mitad del ancho//cordenada 0,0 
        y:canvas.height / 2,//mitad del alto//cordenada igual al ancho y alto
    }
    //procedemos a dibujar el primer circulo
    contexto.beginPath();//iniciar dibujo camino o recorrido
    contexto.arc(centro.x, centro.y, 50, 0, 2 * Math.PI,false);//
    contexto.fillStyle= 'yellow';//estilo de relleno
    contexto.fill();// ejecutar llenado
    contexto.lineWidth = 3;//ancho de la linea
    contexto.strokeStyle = 'black' //estilo de trazo
    contexto.stroke();// ejecutar trazo
}
dibujar();