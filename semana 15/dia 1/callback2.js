let BDAlumnos=[
    {
        id:1,
        nombre:"Roberto",
        edad:30
    },
    {
        id:2,
        nombre:"Danny",
        edad:30
    },
    {
        id:3,
        nombre:"Patrick",
        edad:27
    }
];
let getAlumnosById=(id,callback)=>{
    for (let i = 0; i < BDAlumnos.length; i++) {
        if(BDAlumnos[i].id===id){
            callback(null,BDAlumnos[i]);
            return;
        }
    }
    callback("No se encontro el alumno");  
}
getAlumnosById(2,(error,objAlumno)=>{
    if(error){
        console.log(error);
    }else{
        console.log(objAlumno);
    }
});