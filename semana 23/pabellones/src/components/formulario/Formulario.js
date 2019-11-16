import React, { Component } from 'react';

export default class Formulario extends Component {
    // escucharCambios=(e)=>{
    //     console.log({
    //         value:e.target.value,
    //         name:e.target.name
    //     });
    // }
    // state={
    //     nombrePabellon:''
    // }
    state={
        form:{
            nombrePabellon:'',
            encargado:'',
            area:''
        }
    }
    escuchaClick=(e)=>{
        console.log("se hizco click");
        
    }

    escucharSubmit=(e)=>{
        e.prevetDefault();
        console.log("se ejecuto el submit");
        console.log(this.state);    
    }
    manejarCambios=(e)=>{
        this.setState({
            //nombrePabellon: e.target.value
            [e.target.name]: e.target.value
        })
    }
  render() {
    return (
      <div> 
          <h4>Nuevo Registro</h4>
          <form onSubmit={this.escucharSubmit}>
              <div className="form-group" >
                  <label >Nombre Pabellon</label>
                  {/* <input onChange={this.manejarCambios}  */}
                   <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="nombrePabellon" 
                        // value={this.state.nombrePabellon}/>
                        value={this.props.formvalues.nombrePabellon}/>
              </div>
              <div className="form-group" >
                  <label >Encargado</label>
                  {/* <input onChange={this.manejarCambios}  */}
                   <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="encargado" 
                        // value={this.state.encargado}/>
                        value={this.props.formvalues.encargado}/>
                        
              </div>
              <div className="form-group" >
                  <label >Area</label>
                  {/* <input onChange={this.manejarCambios}  */}
                   <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="area" 
                        // value={this.state.area}/>
                        value={this.props.formvalues.area}/>
              </div>
              {/* onclick */}
              <buttoon type="submit" onClick={this.escuchaClick} className="btn btn-primary">Guardar</buttoon>

          </form>
     </div>
    );
  }
}
