function bordeImagen() {
    if (document.getElementById("imagenParte1").style.border == "2px solid red") {
        document.getElementById("imagenParte1").style.border = "none";
        
    } else {
        document.getElementById("imagenParte1").style.border = "2px solid red";
    }
}
function calculo() {
    let valor1 = Number(document.getElementById("cantidadIn1").value);
    let valor2 = Number(document.getElementById("cantidadIn2").value);
    let valor3 = Number(document.getElementById("cantidadIn3").value);
    let mensaje = document.getElementById("mensaje");
    let total = valor1+valor2+valor3;
    if (total<=10) {
        mensaje.innerHTML = "Llevas: "+total+" memes.";
    }else{
        mensaje.innerHTML = "Llevas demaciados memes , que sean menos!";
    }
}
function validacion() {
    let valor1 = document.getElementById("select1").value;
    let valor2 = document.getElementById("select2").value;
    let valor3 = document.getElementById("select3").value;
    let mensajePassword = document.getElementById("mensajePassword");

    if (valor1==9 && valor2==1 && valor3==1) {
        mensajePassword.innerHTML = "password 1 correcto";
    } else if(valor1==7 && valor2==1 && valor3==4){
        mensajePassword.innerHTML = "password 2 es correcto";
    }else{
        mensajePassword.innerHTML = "password incorrecto";
    }
}