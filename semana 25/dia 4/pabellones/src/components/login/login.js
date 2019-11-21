import React from 'react';
import {withRouter} from 'react-router-dom';

const Login = (props) =>{
    let usuRef = React.createRef();
    let passRef = React.createRef();
    const iniciarSesion = event =>{
        event.preventDefault(); //
        props.signin(usuRef.current.value, passRef.current.value);
    }
    return(
        <main className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <form action="" className="form-group" onSubmit={iniciarSesion}>
                        <div className="form-group">
                            <label htmlFor="">Usuario</label>
                            <input type="text" className="form-control" placeholder="Ingrese su usuario" ref="usuRef"/>
                        </div> 
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" placeholder="Ingrese su Contraseña" ref="passRef"/>
                        </div> 
                        <input className="btn btn-success" type="submit" value="Iniciar Sesion"/>                       
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </main>
    )
}

export default withRouter(Login);
