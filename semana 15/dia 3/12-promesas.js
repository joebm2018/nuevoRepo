let miPromesa=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{},2000);
    })
}
miPromesa().then(respuesta=>{
    console.log("exito !!!!");
    console.log(respuesta);
}).catch(error=>{
    console.log(error);    
})