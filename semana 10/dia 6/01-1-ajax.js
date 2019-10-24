window.onload=function(){
    var btnDescargar=document.getElementById("btnDescargar");
    var progressBar=document.getElementById("idProgreso");
    btnDescargar.onclick=function(){
        var xhr=new XMLHttpRequest();

        //imgur.com
        //cors
        xhr.open("GET","https://i.imgur.com/EyYzdZi.jpg");
        xhr.responseText="text;"
        xhr.onprogress=function(e){
            console.log(e);
            if(e.lengthComputable){
                var porcentaje=(e.loaded/e.total)*100;
                progressBar.style.width=`${porcentaje}%`
            }
        }
        xhr.onload=function(){
            console.log("se esta cargando el archivo");
            
        }
        xhr.onloadstart=function(){
            console.log("esta iniciando la carga del arvhico");
            
        }
        xhr.onloadend=function(){
            console.log("la carga a finalizado");
        }


        xhr.send(null);
    }
}