window.onload=function(){
    var input=document.getElementById("inputCorreo");
    var captcha=document.getElementById("captcha");
    var imagen=document.getElementById("imagen");
    // onkeyup cuandoo se suelta la tecla
    input.onkeyup=function(e){
        console.log("una tecla a sido pulsdo");
        console.log("tecla pulsada: "+e.key);
        console.log("codigo de tecla: "+e.keyCode);
        console.log("keyCode transformado: "+String.fromCharCode(e.keyCode));
        console.log(this.value);     
    }
    // onkeypress tecla presionada
    input.onkeypress=function(e){
        console.log("onkeypress: "+this.value);
    }
    captcha.ondblclick=function(){
        imagen.style.filter="grayscale(100%)";
        imagen.style.border="2px solid red"
    }
    var comidaCasera=['Lentejitas','Seco de cordero','Saltado','Aji de GAllina'];
    var comidaRapida=['Salchipapa','Empanada','Papa Rellena','Hamburguesa'];
    var piqueos=['Papitas','Chocolates','Galletas'];

    var selectComida=document.getElementById("comida");
    var selectTipo=document.getElementById("tipoComida")
    selectComida.onchange=function(){
        selectTipo.removeAttribute("disabled");
        // if(selectComida.value) ó
        // evaluamos selectComida para asegurarnos para que de verdad haya una opcion seleccionada
        if(this.value !=0){
            switch (this.value){
                case 'ff':
                    // this.innerHTML="";
                    selectTipo.innerHTML="";
                    for (let i = 0; i < comidaRapida.length; i++) {
                        var opcion=document.createElement("option");
                        opcion.innerHTML=`${comidaRapida[i]}`;
                        opcion.setAttribute("value",comidaRapida[i].charAt(0));
                        selectTipo.appendChild(opcion);
                    }
                    break;
                case 'cc':
                    
                    selectTipo.innerHTML="";
                    for (let i = 0; i < comidaCasera.length; i++) {
                        var opcion=document.createElement("option");
                        opcion.innerHTML=`${comidaCasera[i]}`;
                        opcion.setAttribute("value",comidaCasera[i].charAt(0));
                        selectTipo.appendChild(opcion);
                        
                    }
                    break;
                case 'p':
                    
                    selectTipo.innerHTML="";
                    for (let i = 0; i < piqueos.length; i++) {
                        var opcion=document.createElement("option");
                        opcion.innerHTML=`${piqueos[i]}`;
                        opcion.setAttribute("value",piqueos[i].charAt(0));
                        selectTipo.appendChild(opcion);
                        
                    }
                    break;
            }

        }
    }
}