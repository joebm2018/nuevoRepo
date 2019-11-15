import React, { Component } from 'react';
import {URL_BACKEND} from '../../Enviroment/enviroment';
import { MDBDataTable } from 'mdbreact';

export default class Pabellon extends Component {

  constructor (props){
    super(props);
    this.state={
      pabellones:[],
      cargando: true,
      data:{}
    }
  }

  async cargarPAbellones(){
    let response = await fetch (`${URL_BACKEND}/api/pabellon`);
    let pabellonesJSON = await response.json();
    // console.log(pabellones);  
    let filas=[];
    pabellonesJSON.content.forEach((pabellon,i)=>{
      let objFila={
        nro:(i+1),
        pab_id:pabellon.pab_id,
        pab_nom:pabellon.pab_nom,
        createdAt:pabellon.createdAt,
        updatedAt:pabellon.updatedAt
      }
      filas.push(objFila);
    });

    let datosTabla={
      columns:[
        {
          label:'#',
          field:'nro',
          sort:'asc',
        },
        {
          label:'Id',
          field:'pab_id',
          sort:'asc',
        },
        {
          label:'Nombre',
          field:'pab_nom',
          sort:'asc',
        },
        {
          label:'Fecha de Creacion',
          field:'createdAt',
          sort:'asc',
        },
        {
          label:'Fecha de Actualizacion',
          field:'updatedAt',
          sort:'asc',
        }
      ],
      rows: filas
    }
    this.setState(
      {
        pabellones:pabellonesJSON,
        cargando:false,
        data: datosTabla
      }
    ) 
  }

  componentDidMount(){
    this.cargarPAbellones();
  }

  render() {
    if(this.state.cargando===true){
      return (
        <div>cargando...</div>
      )
    }
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            {
              this.state.data.rows.length===0 ?
              (<div>no hay datos</div>) :
              (<MDBDataTable
                striped
                bordered
                hover
                data={this.state.data}
              />)
            }
              
          </div>
        </div>
      </div>
    );
  }
}
