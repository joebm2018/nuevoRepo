// window.onload evento que se ejecuta cuando ya se cargue todo los elementos del html(DOM)
window.onload=function(){
    var body=document.querySelector("body");
    // var lapiz=document.getElementById("lapiz");
    // onmousemove hace el evento cuando nosotros movamos el mouse
    // body.style.cursor="pointer";

    body.style.cursor="url('./pen2.png') 7 8
    0, auto";
    body.onmousemove=function(evento){
        console.log(`La posicion en X=>${evento.offsetX}`);
        console.log(`La posicion en Y=>${evento.offsetY}`);
        // lapiz.style.left=`${evento.offsetX-26}px`;
        // lapiz.style.top=`${evento.offsetY-100}px`;

        
        // agregando puntito
        var punto=document.createElement("div");
        punto.style.width="2px";
        punto.style.height="2px";
        punto.style.borderRadius="50%";
        punto.style.backgroundColor="lightblue"
        punto.style.position="absolute";
        punto.style.left=`${evento.offsetX}px`;
        punto.style.top=`${evento.offsetY}px`;
        punto.style.boxShadow="0 0 6px #fff";

        this.appendChild(punto);

    }
}
