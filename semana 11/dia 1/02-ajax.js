window.onload=function(){
    var inputNombre=document.getElementById("inputNombre");
    var inputCargo=document.getElementById("inputCargo");
    var btnCrear=document.getElementById("btnCrear");
    var divAlertas=document.getElementById("alertas");

    btnCrear.onclick=function(e){
        e.preventDefault();

        var trabajador={
            name: inputNombre.value.trim(),
            job: inputCargo.value.trim()
        };
        var xhr=new XMLHttpRequest();
        // console.log(xhr);
        //tiempo de repuesta de nuestra peticion, el tiempo ees en milisegundos
        xhr.timeout=1500;
        xhr.ontimeout=function(){
            console.log("tiempo de espera superado");
            
        }
        xhr.onreadystatechange=function(){

            switch(xhr.readyState){
                case 1:console.log("configurando"); break;
                case 2:console.log("enviando"); break;
                case 3:console.log("procesando"); break;
                case 4:
                    console.log("Hecho!!!");
                    if(xhr.status==201){
                        var json=JSON.parse(xhr.responseText);
                        console.log(json);
                        divAlertas.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                        Tu Usuario<strong> ${json.name}!</strong> ha sido creado Satisfactoriamente con el cargo <strong>${json.job}</strong>.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>`;
                    }else{
                        console.log("respuesta obtenida pero status error");
                    }
                    // console.log("Hecho!!!");
                    // console.log(xhr.responseText);
                    break;
                default: console.log("Algo inesperado ha pasado");
                
            }
        }
        xhr.open("POST","https://reqres.in/api/users");
        //recibira el header y su valor
        xhr.setRequestHeader("Content-Type","application/json");
        //convertimos nuestro objeto a texto para que pueda ser enviado
        xhr.send(JSON.stringify(trabajador));
    }

}