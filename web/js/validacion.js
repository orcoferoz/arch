function validacion() {
    var isbn=document.getElementById("isbn");
    var miniformulario=document.getElementById("miformulario");
    if(isbn.value=="") {
        alert("datos no válidos")
        return false;
    }
    else {
      miformulario.submit();
    }
}