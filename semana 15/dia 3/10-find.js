
let alumnitos=[
    {id:1, nombre:"Juan", edad:19},
    {id:2, nombre:"Martha", edad:30},
    {id:3, nombre:"Renzo", edad:35},
    {id:4, nombre:"Ronald", edad:20}    
]

let encontrado=alumnitos.find((alumno)=>{
    return alumno.edad==35;
})

console.log(encontrado);
