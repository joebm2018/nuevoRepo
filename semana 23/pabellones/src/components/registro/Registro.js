import React, { Component } from 'react';
import Formulario from '../formulario/Formulario';
import Tarjeta from '../tarjeta/Tarjeta';


class Registro extends React.Component{

    manejarCambios=(e)=>{
        this.setState({
            form:{
                [e.target.name]:e.target.value
            }
        })
    }
    render(){
        return (
            <div>
                <div className="container mt-4">
                    {/* <h1>Registro</h1> */}
                    <div className="row">
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <Formulario 
                                    onChange={this.manejarCambios}
                                    formValues={this.state.form}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <Tarjeta />
                                </div>
                            </div>
                        </div>                         
                    </div>

                </div>
            </div>
        )
    }
}

export default Registro;