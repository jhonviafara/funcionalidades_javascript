function cargar() {
    var valor = document.getElementById("pais");

    var elemento = valor.options[valor.selectedIndex].text;

    localStorage.setItem('pais', elemento);


    document.getElementById("paisVisitado").innerText = localStorage.getItem('pais');
}

    
function guardarPais(){
     document.getElementById("paisVisitado").innerText = localStorage.getItem("pais")
     
}


