// permitira arrastrar el elemento por toda la ventana

$(".cuadrado").draggable();

$(".cuadrado").resizable();

$(".bandas").sortable({
    update:function(){
        console.log("Se ha reoordenado la tablita");
        
    }
});
$(".cajita").draggable();
$(".cajota").droppable({
    drop:function(evento){
        console.log("ha caido alguien o algo!");
        console.log(evento);
        $(this).css("background-color","yellow");
        $(this).css("border-radius","50%")
    }
});

$("#btnAnimar1").click(function(){
    // $(".efecto1").effect("explode");
    $(".efecto1").toggle("shake",500);
});

$("#imagen").tooltip();