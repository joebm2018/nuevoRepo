var inputCorreo=document.getElementById("inputCorreo");
var resultado=document.getElementById("resultado");

var personas = [{
    nombre:"Jorge",
    correo:"jgarnica@gmail.com"
},{
    nombre:"Omar",
    correo:"ojimenez@gmail.com"
}];

// onfocus cuando el cursor se encuentra sobre un elemento
inputCorreo.onfocus=function(){
    inputCorreo.style.backgroundColor="#F9FF5C";
    inputCorreo.style.borderBottom="4px solid white";
    inputCorreo.style.borderRadius="8px";
}
// onblur- cuandoo el cursor sale del elemento
inputCorreo.onblur=function(){
    this.style.backgroundColor="transparent"
    this.style.borderBottom="4px solid #666666";
    this.style.borderRadius="0px";

    var correoIngresado=inputCorreo.value.toLowerCase();
    correoIngresado=correoIngresado.trim()

    for(i=0;i<personas.length;i++){
        if(personas[i].correo==correoIngresado){
            resultado.removeAttribute("hidden");
            break;
            
        }
    }
}