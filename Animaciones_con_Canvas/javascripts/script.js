//tomo el elemento DOM con el id indicado
var canvas = document.getElementById('lienzo')
//doy un contexto a la animacion
var contexto = canvas.getContext('2d');
var centro = {
  x: canvas.width / 2,
  y: canvas.height / 2,
}

//estas variables contienen el inicio de el movimiento de los ojos
var despX = 0;
var despY = 0;


//asigna valores aleatorios entre -2y2 para los desplazamientos en ambos  ejes
function moverOjos(){
  despX = Math.round(Math.random()*5)-3
  despY = Math.round(Math.random()*5)-3
  dibujar() //a su vez lamamos la funcion dibujar asi siempre se mantiene la carita
}

function dibujar(){
  //cuando se llama a dibujar limpiamos y dibujamos
  contexto.clearRect(0, 0, canvas.width, canvas.height);

  contexto.beginPath();
  contexto.arc(centro.x, centro.y, 50, 0, 2 * Math.PI, false);
  contexto.fillStyle = 'yellow';
  contexto.fill();
  contexto.lineWidth = 3;
  contexto.strokeStyle = 'black';
  contexto.stroke();

  contexto.beginPath();
  contexto.arc(centro.x - 15 - despX, centro.y - 15 + despY, 8, 0, 2 * Math.PI, false);
  contexto.arc(centro.x + 15 + despX, centro.y - 15 -  despY, 8, 0, 2 * Math.PI, false);
  contexto.fillStyle = 'black';
  contexto.fill();

  contexto.beginPath();
  contexto.arc(centro.x, centro.y, 30, 0, Math.PI, false);
  contexto.stroke();

}

canvas.addEventListener("mousemove",function(evento){
  centro = {
    x: evento.x,
    y: evento.y
  }
})

setInterval(moverOjos,200);//para ver la animacion





