//imrc o rcc para crear toda la clase 
import React, { Component } from 'react';

export default class Productos extends Component {
    //snipped con => crea todo el constructor
    constructor(props){
        super(props);
        console.log("constructor de los productos",props);
        this.state={
            productos:props.productos,
            producto:{}
        }
    }
    
    seleccionaProducto=(prod)=>{
        console.log(prod);
        // para cuando necesitemos actualizar el estate se hace con el this.setstat
        this.setState({
            producto:prod
        })
    }
    //componentDidMount() funcion que se ejectura luego del render cuando todo el DOM ya ha sido cargado con exito
    // esta funcion se ejecuta solo una vez y puede al igual que otras, modificar el state
    //FUNCIONALIDAD. se usa drgalmente para traer data mediante las API's y para settear objetos JQUERY, como los DatePicker, modales, datatables, etx
    componentDidMount(){
        console.log("Productos componentDidMount");
    }
    generarAleatorio= ()=>{
        let productoTemporal={
            id:Math.floor(Math.random()*(50-5))+5,
            nombre:'producto aleatorio',
            precio:Math.random()*(10000-1000)+1000,
        };
        this.setState({
            // estamos sobrescribiendo los productos pero antes guardamos lo que teniamos 
            // con "...this.state.productos" y lo que va despues de la coma es lo que se a a insertar
            // en este caso, el objeto prodcuto Temporal
            productos:[...this.state.productos,productoTemporal]
        })
    }
  render() {
    //let {productos}=this.state;
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //productos.map(p=>{
                        this.state.productos.map(p=>{
                            return(
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nombre}</td>
                                <td>{p.precio}</td>
                                <td><button className="btn btn-block btn-success" 
                                    onClick={
                                        ()=>{ 
                                            this.seleccionaProducto(p);
                                        }
                                     } >Seleccionar {p.nombre}</button></td>
                            </tr>)
                        })
                    }
                    
                </tbody>
                

            </table>
            {
                this.state.producto.nombre ? (<p>Producto Seleccionado:
                    {this.state.producto.nombre}</p>) :(<p>Producto no seleccionado</p>)
            }
            <button onClick = { this.generarAleatorio} >
                Generar producto aleatorio
            </button>
        </div>
    );
  }
}
