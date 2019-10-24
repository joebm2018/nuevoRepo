let alumnitos=[
    {id:1, nombre:"Juan", edad:19},
    {id:2, nombre:"Martha", edad:30},
    {id:3, nombre:"Renzo", edad:35},
    {id:4, nombre:"Ronald", edad:20}    
]
let mayoreA20=alumnitos.filter(alumno=>{
    return alumno.edad>20;
});

mayoreA20.forEach(function(elemento){
    console.log(elemento);  
})
//otra forma
mayoreA20.forEach(elemento=>console.log(elemento));
