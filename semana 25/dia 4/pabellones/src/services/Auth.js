// se necesitara axios para hacer peticiones al back 
import axios from 'axios';
import {URL_BACKEND} from '../environments/environments'

export default class AuthService{
    token;
    constructor(){
        this.cargarToken();
    }
    // 1 - EVALUAR SI HAY UN TOKEN EXISTENTE
    cargarToken(){
        if(localStorage.getItem('token')){
            this.token=localStorage.getItem('token');
        }
    }
    login = async (email , pass) =>{
        //encripta pass a base 64
        let pass_enc = window.btoa(pass);
        let contenido={
            usu_email: email,
            usu_pass: pass_enc
        };
        let misHeaders={
            "Content-Type":"application/json"
        };
        // let rpta = await axios.post('${URL_BACKEND}/api/usuario/loggin',contenido,{headers:misHeaders});
        let rpta = await axios.post(`${URL_BACKEND}/api/usuario/loggin`,contenido,{headers:misHeaders});

        return rpta;
    }
    isLoged(){
        if (this.token){
            try{
                let payload=this.token.split('.')[1];
                let payload_dec = JSON.parse(window.atob(payload));
                if (payload_dec.expireIn > (new Date().getTime())/1000){
                    return true;

                }else{
                    localStorage.removeItem("token");
                    return false;
                }
            }catch{
                localStorage.removeItem("token");
                return false;
            }            
        }else{
            console.log("Nel no hay token");
            return false;
            
        }
    }
    guardarToken(token){
        this.token=token;
        localStorage.setItem('token',token);
    }
    cerrarSesion(){
        this.token=null;
        localStorage.removeItem('token');
    }
    
}
