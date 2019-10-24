window.onload=function(){
    var form=document.getElementById("formulario");
    var input=document.getElementById("inputTarea");
    var list=document.getElementById("lista");
    
    function obtener(){
        var tareasObtenidas=localStorage.getItem("misTareas");
        list.innerHTML=tareasObtenidas;
    }
    obtener();
    function guardar(){
        //en lugar de utilizar setItem("nombreItem","contenido")
        // guardaremos de la sgte manera
        //localstorage.nombreItem="contenidoItem"
        console.log(list.innerHTML);
        // localStorage.setItem("misTareas",list.innerHTML);
        localStorage.misTareas=list.innerHTML;
    }
    form.addEventListener("submit",function(e)
    {
        e.preventDefault();
        var tarea=input.value;
     // console.log(tarea);
        var li=document.createElement("li");
        li.innerHTML=tarea;
        list.appendChild(li);
        //borrar el contenido en html
        input.value="";
        guardar();
    });
    list.addEventListener("dblclick",function(e){
        //e.target nos imprime el elemento al que le hemos echo click
        var tarea=e.target;
        // console.log(tarea);
        
        //parentNode = nodo papá
        // console.log(tarea.parentNode);
        tarea.parentNode.removeChild(tarea);
        guardar();
    });
}