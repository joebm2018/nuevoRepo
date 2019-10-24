window.onload = function(){


    //Document representa al DOM que representa cada nodo cada elemento de nuestro documento HTML
    //DOM => https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png
    //vamos a obtener a nuestro div mascota y lo asignaremos a una variable, sutipo de dato sera element
    //esta variable representara a un elemento HTML con todos sus atributos
    var mascota = document.getElementById("mascota");
    
    /**Al obtener un objeto podemos acceder a sus propiedades o incluso cambiarlas */
    mascota.setAttribute("title","Mi mascota");
    console.log("Alto: "+mascota.offsetHeight);
    console.log("Ancho: "+mascota.offsetWidth);
    console.log("Posición a partir de Top en px: "+mascota.offsetTop);
    console.log("Posicion a partir de Left en px: "+mascota.offsetLeft);
    //cambiamos sus estilos
    mascota.style.width = "50px";
    mascota.style.height = "50px";
    mascota.style.border = "2px dashed green";

    //funcion que usaremos para cambiar la posición inicial de nuestra mascota, la usaremos despues
    function posicionInicial(){
        mascota.style.top = "540px";
        mascota.style.left = "0px";
    }
    //vamos a crear con createElement("elementoacrear") un elemento img para añadir un icono a nuestro div mascota
    var icono = document.createElement("img");
    icono.setAttribute("src","./img/cat.png");
    icono.setAttribute("width","50px");
    //con appendChild agregamos nuestro elemento creado como elemento hijo del div mascota
    mascota.appendChild(icono);

    //también podemos agregar directamente HTML como contenido de un elemento, en este caso estamos agregando directamente al div instrucciones
    var instrucciones = document.getElementById("instrucciones");
    instrucciones.innerHTML = "<ol><li>Usa las teclas direccionales para mover a tu mascota!</li><li>Elije el tipo de comida para tu mascota</li></ol>";

    /**Igual que podemos acceder asus propiedades también podemos definir eventos para nuestros elementos como un click... haremos que los controles lobo y dino funcionen como botones al escuchar un evento click con addEventlistener */
    //de esta manera  => elemento.addEventListener("evento",function(){cosas a ejecutar})
    var lobo = document.getElementById("lobo");
    lobo.addEventListener("click",function(){
        icono.setAttribute("src","./img/lobo.png");
        posicionInicial();
    });

    var dino = document.getElementById("dino");
    dino.addEventListener("click",function(){
        icono.setAttribute("src","./img/dino.png");
        posicionInicial();
    });

    //Aca vamos a agregar opciones y cambiar a nuestros elementos input a partir de unos arreglos donde definiremos la comida a dar a nuestra mascota
    var carne = ['Hamburguesa','Atún'];
    var vegetal = ['Lechuga','Espinacas'];

    //obtendremos el elemento comida y le asignaremos un evento onchange que se ejecutará cuando cambie el elemento
    var comida = document.getElementById("comida");
    var tipoComida = document.getElementById("tipocomida");
    comida.addEventListener("change",function(){
        //removemos el atributo disabled del segundo input para poder elegir la comida
        tipoComida.removeAttribute("disabled");
        if(comida.value=="C"){
            tipoComida.innerHTML = "";
            for (var i = 0; i<carne.length; i++){
                //Creamos option y le añadimos un value que sera equivalente a la 1era letra de cada elemento del arreglo, esto gracias a charAt
                //funciona asi: "palabra".charAt(0) => p , devolvera la posición que le indiquemos, como si se tratará de un arreglo de letras.
                var opcion = document.createElement("option");
                    opcion.innerHTML = `${carne[i]}`;
                    opcion.setAttribute('value',carne[i].charAt(0));
                    //creará dos options con los value H y A
                    tipoComida.appendChild(opcion);
            }
        }else if(this.value=="V"){
            tipoComida.innerHTML = "";
            for (var i = 0; i<vegetal.length; i++){
                var opcion = document.createElement("option");
                    opcion.innerHTML = `${vegetal[i]}`;
                    opcion.setAttribute('value',vegetal[i].charAt(0));
                    //creará dos options con los value L y E
                    tipoComida.appendChild(opcion);
            }
        }else{
            tipoComida.innerHTML = "";
            tipoComida.setAttribute("disabled","true");
        }
    })


    var marco = document.getElementById("marco");
    //Recuerden que pueden utilizar addEventListener ú onclick,onchange...(onevento), la principal diferencia radicará, que un evento 'on' se sobreescrib ese evento, por ejemplo si tiene un onclick, este sobreescribira algun evento anterior,
    //La otra diferencia es que addEventListener funciona con navegadores modernos superiores a IE9, un onclick funcionaria con navegadores mas antiguos
    // marco.addEventListener("dblclick",function(){
    //     //Aqui va su código
    // });

    //usaremos un evento double click (dblclick) para añadir la comida obteniendo la posición del mouse, y evaluaremos si ya existe una comida, en caso de existir una, la removeremos con .remove()
    marco.ondblclick = function(e){
       
        if(document.getElementById("galleta") !=null){

            document.getElementById("galleta").remove();
        }
        if(tipoComida.value != "0"){
            var galleta = document.createElement("div");
            galleta.setAttribute("id","galleta");
            galleta.setAttribute("style","width:25px;height:20px;position:relative;border:2px solid black;border-radius:50%;")
            galleta.style.top = `${e.offsetY-50}px`;
            galleta.style.left = `${e.offsetX}px`;
            switch(tipoComida.value){
                case 'H': //Hamborgesa
                    galleta.style.backgroundColor = "red";
                break;
                case 'A': //Atún
                    galleta.style.backgroundColor = "blue";
                break;
                case 'L': //comida de mi comida
                    galleta.style.backgroundColor = "lightgreen";
                break;
                case 'E': //Espinacas
                    galleta.style.backgroundColor = "green";
                break;  
                default:
                    console.log("galleta ",tipoComida.value);
            }
            marco.appendChild(galleta);
        }
    }
    

    //obtenderemos el evento click derecho (oncontextmenu) y evitaremos que se habla el menu del navegador
    marco.oncontextmenu = function(e){
        e.preventDefault();
    }
    //Compara la posicion de la mascota mas su tamaño contra la posición de la galleta, más info lineas abajo
    function comer(){
        var galleta2 = document.getElementById("galleta");
        if((mascota.offsetLeft+mascota.offsetWidth)>galleta2.offsetLeft &&
            (mascota.offsetTop+mascota.offsetHeight)>galleta2.offsetTop){
            galleta2.remove();
            window.alert("Comida!!!!")
        }
    }

    //obtenemos las teclas presionadas con keyup, obtendremos las teclas direccionales capturando el evento y comparando el código de la tecla con keyCode, 
    //mas información de las teclas presionadas : gcctech.org/csc/javascript/javascript_keycodes.htm

    //y usaremos la función comer para evaluar la posición de la comida con la de nuestra mascota
    var body = document.querySelector("body");
    body.addEventListener("keyup",function(e){
        console.log(e.keyCode)
        if (e.keyCode == '38') {
            console.log("arriba");
            mascota.style.top = `${mascota.offsetTop -5}px`;
            comer();
        }
        else if (e.keyCode == '40') {
            console.log("abajo");
            mascota.style.top = `${mascota.offsetTop +5}px`;
            comer();
        }
        else if (e.keyCode == '37') {
           console.log("izquierda");
           mascota.style.left = `${mascota.offsetLeft -5}px`;
           comer();
        }
        else if (e.keyCode == '39') {
           console.log("derecha");
           mascota.style.left = `${mascota.offsetLeft +5}px`;
           comer();
        }
    })

}

