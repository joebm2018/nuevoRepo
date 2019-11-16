import React, { Component } from 'react';
import axios from 'axios';
class EditarPabellon extends Component {
    state={
        loading:true,
        error:null,
        pabellon:{},
    }
    manejarSubmit = e =>{
        e.preventDefault();
        if (this.state.nombrePabellon.trim()===''){
            this.setState({error:true})
        }else{
            let misHeaders={
                "Content-type":"application/json"
            };
            axios.put("http://localhost:5000/api/pabellon",
            this.state.pabellon,{misHeaders})
        }
    }
    manejarCambio=e =>{
        this.setState({
            // nombrePabellon:e.target.value,
            error :true
        })
        
    }
    componentDidMount(){
        this.obtenerData();
    }
    obtenerData= async e =>{
        this.setState({loading:true,error:null});
    
            const id= this.props.match.params.pabId;
            axios.get(`http://localhost:5000/api/pabellon/${id}`).then(
                rpta=>{
                    console.log(rpta);
                    this.setState({loading:false, pabellon:rpta.data.pabellon})
                    
                    // this.setState({nombrePabellon:rpta.data.pabellon.pab_nom});
                }).catch(error=>{
                    this.setState({loading:false,error:error})
                });      
            
    };
  render() {
      if (this.state.loading){
          return '...CargAndo';
      }
    return (
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <h2>Actualizar Datos|</h2>
                  <form onSubmit={this.manejarSubmit}>
                      <div className="form-group">
                          <label>
                              Nombre de Pabellon
                          </label>
                          <input type="text" 
                                name="nombrePabellon" 
                                onChange={this.manejarCambio}
                                value={this.state.nombrePabellon}
                                className="form-control"
                            />
                      </div>
                  </form>
                  <button className="btn btn-primary">Guardar Cambios</button>
              </div>
          </div>
      </div>
    );
  }
}
export default EditarPabellon;