window.onload=function(){
    let btnObtenerDatos=document.getElementById("obtenerDatos");
    let btnEnviarDatos=document.getElementById("enviarDatos");
    let inputNombre=document.getElementById("nombre");
    let inputDireccion=document.getElementById("direccion");
    btnObtenerDatos.onclick=function(){
        fetch("https://prueba-e59b6.firebaseio.com/restaurantes.json")
        .then((respuesta)=>{
            return respuesta.json();
        }).then((respuestaJson)=>{
            console.log(respuestaJson.json());
             
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    // btnEnviarDatos.onclick=function(){
    // }
    // ó
    btnEnviarDatos.onclick=()=>{
        let nombre = inputNombre.value;
        let direccion= inputDireccion.value;

        let objRestaurante={
            nombre:nombre,
            direccion:direccion
        }
        let configuration={
            method:'POST',
            body:this.JSON.stringify(objRestaurante),
            headers:{'Content-Type':'application/json'}
        }
    
    fetch("https://prueba-e59b6.firebaseio.com/restaurantes.json",configuration)
    .then((respuesta)=>{
        return respuesta.json();

    }).then((respuestaJson)=>{
        console.log(respuestaJson);
    })
    }
}