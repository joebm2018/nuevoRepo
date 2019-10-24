import express from 'express'
import bodyParser from 'body-parser'
const app = express();
// MANEJANDO PETICIONES
app.get('/api',(req,res)=>{

    console.log(req.query);
    //MANDANDO EL CODIGO DE ESTADO
    res.status(201);
    //MANDANDO LA RESPUESTA
    res.send({
        //"Hola soy la API en TS"
        "operation":"rxito",
        "message":"factura creada con exito"
    });
});
const port= 3000;
//ESCUCHANDO PETICIONES
app.listen(port,()=>console.log("Servidor corriendo en el puerto "+port));