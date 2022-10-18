
function welcome(event) {
    alert("bienvenido a la pagina");
    
}
function secondwelcome() {
    alert("bienvenido denuevo");
}
var entrada = document.getElementById('saludo');
entrada.addEventListener("click", welcome)
entrada.addEventListener("click", secondwelcome)
