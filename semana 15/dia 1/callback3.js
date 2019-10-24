let alumnos=[
    {
        id:1,
        nombre:"Jorge",
        edad:28
    },
    {
        id:2,
        nombre:"Diana",
        edad:28
    },
    {
        id:3,
        nombre:"Paloma",
        edad:20
    },
    {
        id:4,
        nombre:"Jorge",
        edad:28
    },
];

let cursos=[
    {
        alumnoId:1,
        cursos:["Python","Diseño"]
    },
    {
        alumnoId:2,
        cursos:["ethical hacking","Electroncia"]
    }
];
let getAlumnoById=(id,llamada)=>{
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].id===id){
            llamada(null,alumnos[i]);
            return;
        }
    }
    llamada("No se encontro Alumno");
}
let getCursosByAlumnoId=(id,callback)=>{
    for (let i = 0; i < cursos.length; i++) {
        if(cursos[i].alumnoId===id){
            callback(null,cursos[i]);
            return;
        }    
    }
    callback("no existen cursos para el alumno");
}
getAlumnoById(1,(error,objAlumno)=>{
    if(error){
        console.log(error);
    }else{
        getCursosByAlumnoId(1,(error,listaCursos)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Se han encontrado los siguientes cursos para "+objAlumno.nombre);
                console.log(listaCursos.cursos);                                
            }
        })
    }
});