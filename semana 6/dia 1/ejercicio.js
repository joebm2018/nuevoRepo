//reciba 4 parametros para crar una ventana

var urls="http://www.codigo.edu.pe";
var target="_blank";
var alto=600;
var ancho=400;
var nuevaVentana;
debugger;
function newVentana(urls,target,alto,ancho){
    nuevaVentana=window.open(urls,target,"width="+alto+",height="+ancho);
}
newVentana(urls,target,alto,ancho);