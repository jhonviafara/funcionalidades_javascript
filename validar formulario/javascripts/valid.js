function validar(form){
    if (form.nombre.value.trim().length == 0) {
        alert("el nombre es obligatorio")
       return false 
    }

    if (form.apellido.value.trim().length == 0) {
        alert("apellido es obligatorio")
        return false
        
    }
    let reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (form.email.value.length == 0) {
        alert(`espacio obligatorio`)
        return false
        
    }
    if (!reg.test (form.email.value)){
        alert(` formato de correo incorrecto`)
        return false
    }
    if (form.contraseña.value.trim().length == 0 ) {
        alert(`la contraseña es obligatoria`)
        return false
        }
   
    if (form.contraseña.value.length <= 5) {
      alert(`la contraseña es muy corta`)
      return false
       }
       if (form.confirmacion.value != form.contraseña.value) {
        alert(`las contraseñas no coinciden`)
        return false
        
    }
    if (form.genero.value == 0) {
      alert(`el genero es obligatorio`)
        return false        
    }


    if (form.fechaNacimiento.value == 0) {
      alert("la fecha esta incompleta") 
      return false       
    }
    if (form.pais.value == "") {
        alert("seleccione un pais")
        return false
        
    }
    if (!form.terminos.checked) {
        alert("debe aceptar los terminos")
        return false
        
    }
    return true

}