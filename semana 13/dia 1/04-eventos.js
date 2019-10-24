window.onload=function(){
    function reset(){
        $("#listaWhisky, #listaRon, #listaChela, #listaVino").hide();
        $("#btnWhisky, #btnRon, #btnChela, #btnVino").removeClass("activo");
    }
    
    $("#btnWhisky").click(function (e) { 
        reset();
        $("#listaWhisky").toggle();
        $(this).addClass("activo");
    });
    $("#btnRon").click(function (e) { 
        reset();
        $("#listaRon").toggle();
        $(this).addClass("activo");
    });
    $("#btnChela").click(function (e) { 
        reset();
        $("#listaChela").toggle();
        $("#btnChela").addClass("activo");
        
    });
    $("#btnVino").click(function (e) { 
        reset();
        $("#listaVino").toggle();
        $("#btnVino").addClass("activo");
        Swal.fire({
            title: 'Error!',
            text: 'No hay Productos',
            type: 'error',
            confirmButtonText: 'Aceptar'
          })    
    });
    $("#listaWhisky > li, #listaRon>li, #listaChela>li").dblclick(function(){
        const Toast = Swal.mixin({
            toast: true,
            position: 'botton-end',
            showConfirmButton: false,
            timer: 3000
          })
          
          Toast.fire({
            type: 'success',
            title: 'Agregado '+$(this).text()
          })
    });
    //mouseover cuandp esta encima
    // $("#imagen").mouseover(function () { 
    //     $(this).addClass("rounded-circle");

    // });
    //mouseout contrario al over
    // $("#imagen").mouseout(function () { 
    //     $(this).removeClass("rounded-circle");

    // });
    //convina los dos mouseover y mouseout
    // $("#imagen").hover(function(){},function(){});
    $("#imagen").hover(function(){
        $(this).addClass("rounded-circle");
    },function(){
        $(this).removeClass("rounded-circle");
    });

<<<<<<< HEAD
    //focus cuando el cursor se encuentra sobre el elemento
    $("#inputBuscar").focus(function () {
        $(this).removeClass("form-control"); 
        $(this).addClass("barra-activa");
        
    });
    // blur
    $("#inputBuscar").blur(function () {
        $(this).removeClass("barra-activa"); 
        $(this).addClass("form-control");
        
    });
    // contextmenu => evento que se dispara cuando hacemos click derecho a un elemento
    $("#btnRon").contextmenu(function(e){
        e.preventDefault();
        //remove quita un elemento del DOM
        $("#miMenu").remove();

        var x=e.clientX;
        var y=e.clientY;

        //creando un elemento UL
        var menu=$("<ul></ul");
        // attr asigna valor de un atributo
        menu.attr("id","miMenu");
        menu.addClass("list-group");
        //creando un elemento li para el elemento ul
        var opcion1=$("<li></li>");
        opcion1.addClass("list-group-item");
        opcion1.html("Ocultar");
        opcion1.click(function(){
            $("#miMenu").remove();
            $("#btnRon").attr("hidden","true");
        });
        
        // creando una opcion2 
        var opcionImprimir=$("<li></li>");
        opcionImprimir.addClass("list-group-item");
        opcionImprimir.html(`<i class="fas fa-print    "></i>  Imprimir`)
        //asignando el evento click al evento click de imprimir
        opcionImprimir.click(function(){
            $("#miMenu").remove();
            window.print();
        })
        //inyectando el elemento li al elemento ul
        menu.append(opcion1);
        menu.append(opcionImprimir);
        menu.css("position","absolute")
            .css("top",`${y}px`)
            .css("left",`${x}px`);
        $("body").append(menu);
        
        
    });
=======
    
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
    

    reset();
}