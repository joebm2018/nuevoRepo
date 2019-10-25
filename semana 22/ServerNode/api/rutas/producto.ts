import {Router} from 'express';
export let producto_router=Router();

producto_router.get("/productos",(req,res)=>{
    res.send("entregando la lista de productos");
})
