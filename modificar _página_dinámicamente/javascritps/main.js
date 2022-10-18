function saludar() {
    var elemento = document.getElementById('saludo'); //le pedimos que devuelva el valor q se encuentre dentro del nodo/elemento con el id que pasemos como argumento
    elemento.innerHTML = "bienvenido a mi pagina";//agrega contenido al thml interno con lo que pasemos como argumento string
    }

let noticia = ["noticia 1", "noticia 2", "noticia 3", "noticia 4"];

function cargarLista() {
    var lista = document.getElementById("lista");
    for (var i = 0; i < noticia.length; i++) {
        var li= document.createElement("li");
        li.innerText = noticia[i];
        lista.appendChild(li);

    }}
    function cambiarImagen(){
        var imagen = document.getElementById("imagen");
        // imagen.src = `./images/imagen2.jpeg`; //opcion numero 1 para hacer el cambio de imagen 
         imagen.setAttribute("src",`./images/imagen2.jpeg`);      
    }