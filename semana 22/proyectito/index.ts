import express from 'express'
const app = express();
app.get('/api',(req,res)=>{
    res.send("Hola soy la API en TS");
});
const port= 3000;
app.listen(port,()=>console.log("Servidor corriendo en el puerto "+port));