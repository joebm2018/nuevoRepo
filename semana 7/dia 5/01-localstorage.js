window.onload=function(){
    // var nombre="Paolo Guerrero";
    // localStorage.setItem("name",nombre);
    var cuerpo=document.getElementById("cuerpo");
    var nombre=document.getElementById("inputNombre");
    var apellido=document.getElementById("inputApellidos");
    var color=document.getElementById("inputColor");
    var guardar=document.getElementById("btnGuardar");
    var borrar=document.getElementById("btnBorrar");
    function obtener(){
        var nombreGuardado=localStorage.getItem("Nombre");
        var apellidoGuardado=localStorage.getItem("Apellido");
        var colorGuardado=localStorage.getItem("Color");
        if(nombreGuardado && apellidoGuardado && colorGuardado){
           cuerpo.style.backgroundColor=colorGuardado;
           color.value=colorGuardado;
           nombre.value=nombreGuardado;
           apellido.value=apellidoGuardado; 
        }else{
            console.log("no hay nada guardado");
            
        }
    }
    // obtener();
    function obtenerPorObjeto(){
        //obtenemos el objeto guardado como texto
        var objPreferenciasString=localStorage.getItem("objPreferencias");
        //con JSON.parse lo convertimos de texto a JSON 
        var objPreferenciasJSON=JSON.parse(objPreferenciasString);
        console.log("objeto convertido",objPreferenciasJSON);
        if(objPreferenciasJSON){
            cuerpo.style.backgroundColor=objPreferenciasJSON.Color;
            color.value=objPreferenciasJSON.Color;
            nombre.value=objPreferenciasJSON.Nombre;
            apellido.value=objPreferenciasJSON.Apellido;
        }else{
            console.log("ERROR objeto no encontrado");
        }
    }
    obtenerPorObjeto();
    borrar.onclick=function(){
        //borra por variables
        localStorage.removeItem("Nombre");
        localStorage.removeItem("Apellido");
        localStorage.removeItem("Color");
        localStorage.removeItem("objPreferencias");
        //borra todo
        // localStorage.clear();
    }
    guardar.addEventListener("click",function(e){
        e.preventDefault();
        
        localStorage.setItem("Nombre",nombre.value);
        localStorage.setItem("Apellido",apellido.value);
        localStorage.setItem("Color",color.value);
        
        var objPreferencias={
            Nombre:nombre.value,
            Apellido:apellido.value,
            Color:color.value
        }
        // JSON JAVASCRIPT OBJECT NOTATION
        console.log(objPreferencias);
        // localStorage.setItem(objPreferencias);
        preferenciasTexto=JSON.stringify(objPreferencias);
        localStorage.setItem("objPreferencias",preferenciasTexto);
        console.log(preferenciasTexto);

    });
}