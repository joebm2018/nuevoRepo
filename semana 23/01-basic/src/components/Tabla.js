import React, {Fragment} from 'react';

const Tabla = (props) => {
    console.log(props.data);
    let llamarAlPadre=(e)=>{
        props.funcion();
    }
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((m,indice)=>{
                            return(<tr key={indice}>
                                <td>{m.nombre}</td>
                                <td>{m.tipo}</td>
                                <td><button onClick={
                                    ()=>{
                                        props.funcion(m.nombre)
                                    }
                                }>Enviar {m.nombre}</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <button onClick={llamarAlPadre}>
                Referencia al padre
            </button>
            <button onClick={()=>{
                props.funcion('Joe');
            }}>
                Click al Padre | enviar datos a una funcion Padre
            </button>
        </Fragment>
      );
}
 
export default Tabla;