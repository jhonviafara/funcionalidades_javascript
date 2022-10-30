function mensajeSaliente() {
    document.getElementById("mensaje").innerHTML="conectando.....";
    setTimeout(function(){
        document.getElementById("mensaje").innerHTML="conectado.....";
    },3000
    )
    setTimeout(function(){
        document.getElementById("mensaje").innerHTML="fin de coneccion.....";
    },6000
    )
    
}
var contador = 10; 
 var intervalo = setInterval(function(){
    document.getElementById("contador").innerHTML = contador;
    contador--; //para detener esta planificacion hacemos un clearIntervar  asignando la function a una variable
    if (contador < 0 ){
    // clearInterval(intervalo); //pasamos como parametro la variable que contiene nuestra funccion de setInterval
    contador = contador+11
    document.getElementById("contador").innerHTML= contador;
    contador--;
   } 
}, 1000);
   function reconteo() {
    
    if(contador=1){
        contador= 10
        document.getElementById("contador").innerHTML= contador;
        contador--;
        }
   }