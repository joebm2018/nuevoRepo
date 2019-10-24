var titulo=$('h1');
var parrafo=$('p');
var modificarParrafo=$('#modificarParrafo');
var agregarClases=$('#agregarClases');
var agregarElementos=$('#agregarElementos');
console.log(titulo.html());
titulo.html("este titulo es mas corto");
parrafo.css("color","peru")
       .css("font-weight","bold")
       .css("background-color","yellow");
modificarParrafo.click(function(){
    var primerParafo=$("p:first");
    var segundoParrafo=$("p:eq(1)");
    primerParafo.css("text-align","justify");
    segundoParrafo.css("color","blue");
});
agregarClases.dblclick(function(){
    $(this).removeClass("btn-info");
    // $(this).attr("class","btn btn-success btn-block");

    $(this).addClass("btn").addClass("btn-danger").addClass("btn-block");
});
agregarElementos.click(function(){
    $('.row').prepend("<small>este es una descripcion del titulo </small>");
    $('.row').append("<p>Hola souhn parrafo nuevo </p>");
});

$("p:eq(1)").click(function(){
    $(this).toggleClass("text-danger");
});