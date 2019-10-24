window.onload =()=>{
    let traerGatos=()=>{
        return new Promise((resolve,reject)=>{
            $.ajax({
                type:"GET",
                url:"https://5d4b6adb00dbb10014879b12.mockapi.io/gatos",
                timeout:1000,
                data:null,
                success:function(respuesta){
                    resolve(respuesta);
                },
                error: function(error){
                    reject(error);
                },
                beforeSend:function() {
                    console.log("Aqui buscando Gatos");
                }
            });
        });
    }
    let promesa=traerGatos();
    console.log(promesa);

    promesa.then((gatos)=>{ //resolve
        console.log("Exito !! Promesa Cumplida");
        
    }).catch((error)=>{  //reject
        console.log("Uops Algo a pasado ",error);
        
    })
    
}