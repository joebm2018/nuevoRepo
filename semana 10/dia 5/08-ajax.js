window.onload = function() {
  var btnTraerDatos = document.getElementById("btnTraerDatos");
  var tabla = document.getElementById("tabla");
  
  
  function ponerDatos(personas){
    tabla.innerHTML=`<thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Foto</th>
                        </tr>
                      </thead>
                      <tbody id="tbody">
                      </tbody>`
    var tbody=document.getElementById("tbody");
    
    personas.forEach(function(persona) {
        var tr=document.createElement("tr");

        var tdId=document.createElement("td");
        tdId.innerHTML=persona.id;
        tr.appendChild(tdId);

        var tdNombre=document.createElement("td");
        tdNombre.innerHTML=persona.first_name;
        tr.appendChild(tdNombre);

        var tdApellidos=document.createElement("td");
        tdApellidos.innerHTML=persona.last_name;
        tr.appendChild(tdApellidos);

        var tdCorreo=document.createElement("td");
        tdCorreo.innerHTML=persona.email;
        tr.appendChild(tdCorreo);

        var avatar=document.createElement("img");
        avatar.setAttribute("src",persona.avatar);
        
        var tdImagen=document.createElement("td");
        
        tdImagen.appendChild(avatar);
        tr.appendChild(tdImagen);
        tbody.appendChild(tr);
    });
  }
  btnTraerDatos.onclick = function() {
    
    
    //creando mi objeto xhr

    var xhr = new XMLHttpRequest();
    // console.log(xhr);

    //Devuelve el estado actual dle objeto de la comunicacion que esta teniendo
    //va de 0-4 dependiendo de que evento haya ocurrido
    console.log(xhr.readyState);
    // onreadystatechange estara pendiente del readyState
    xhr.onreadystatechange = function() {
      switch (xhr.readyState) {
        case 1:
          console.log("se ha ejecutado la funcion open()");
          break;
        case 2:
          console.log("se ha disparado una petición http ");
          break;
        case 3:
          console.log("ya se esta descargando los datos");
          break;
        case 4:
          console.log("operacion terminada");
          console.log("el codigo de estado es: " + xhr.status);
          
          var json=JSON.parse(xhr.response);
          console.log("el contenido de la solicitud es:",json.data);
          ponerDatos(json.data);
          break;
        default:
          console.log("ha ocurrido un error inesperado");
      }
    }
    // .open recibira como variable la direccion url de la API que nos dara datos
    // GET/POST es el tipo de peticion
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.send(null);
    
  }
}
