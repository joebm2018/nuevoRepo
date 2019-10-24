var liDark=document.getElementById("liDark");
var liLight=document.getElementById("liLight");

var link=document.getElementById("estilos");
// FORMA 1 de asignar un elemento
// [elemento].onclick=funcion anonima
liDark.onclick=function(){
    link.setAttribute("href","./01-eventos-dark.css");
}
liLight.onclick=function(){
    link.setAttribute("href","./01-eventos-light.css");
}
// FORMA 2
// [ELEMENTO].addeventListener([evento_sin_prefijo_on],funcion anonima)
var btnCentral=document.getElementById("btnCentral");
btnCentral.addEventListener("click",function(evento){
    // console.log(evento);
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    var alto=window.innerHeight;
    var ancho=window.innerWidth;
    
    var nuevoDiv=document.createElement("div");
    nuevoDiv.style.width="15px";
    nuevoDiv.style.height="15px";
    nuevoDiv.style.borderRadius="50%";
    nuevoDiv.style.backgroundColor="yellow";
    var randomX=Math.random()*(ancho-0)+0;
    var randomY=Math.random()*(alto-0)+0;

    nuevoDiv.style.position="absolute";
    nuevoDiv.style.top=randomY+"px";
    nuevoDiv.style.left=randomX+"px";
    // asignarlo al MAIN
    var principal=document.getElementById("principal");
    principal.appendChild(nuevoDiv);
});
