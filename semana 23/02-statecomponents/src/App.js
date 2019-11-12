
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Productos from './components/Productos';

  class App extends Component {
    // como toda clase en Js podemos tener un constructor
    constructor(props){
      // se usa el super para hacer referencia a nuestra clase padre (component) para 
      //pasarle nuestras porpiedades, esto se usa como mas que todo para usar Hooks
      //aqui NO PODEMOS usar this 
      super(props)
      // AQUI SI SE PUEDE USAR THIS
      // para modificar nuestro state como estamos en una clase usamos el this
      this.state={
        productos:[
          {id:1,nombre:'Leche',precio:4.20},
          {id:2,nombre:'Arroz',precio:2.10},
          {id:3,nombre:'Manjar',precio:5.30},
        ],
        producto:{}
      }
    }

    // a diferencia de un cunctional component , una clase component tiene que tener el metodo render() y dentro de el, el retororno de lo que se va a mostrar (codigo)
  render(){
    console.log("productos render");
    
    return (
      <div >
        <Navbar marca={"CodiGo"}/>
        <Productos productos={this.state.productos}/>
      </div>
    )
  }  
  
}

export default App;
