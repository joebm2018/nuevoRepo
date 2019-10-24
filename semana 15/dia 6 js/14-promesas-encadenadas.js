let alumnos=[
    {
        id:1,
        nombre:"Joe",
        edad:30,
    },
    {
        id:2,
        nombre:"Elard",
        edad:43,
    },
    {
        id:3,
        nombre:"Nico",
        edad:33,
    },
    {
        id:4,
        nombre:"Meda",
        edad:28
    }
]



let cursos=[
    {
        idAlumno:1,
        cursos:["HTML","CSS","JavaScript"],
    },
    {
        idAlumno:2,
        cursos:["WebPack","MongoDB","FireBase"]
    }
]

let getAlumnoById=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            for (let i = 0; i < alumnos.length; i++) {
                if(alumnos[i].id==id){
                    resolve(alumnos[i]);
                    return;
                }

            }
            reject("No se encontro ninug alumno con ese ID.");
        },2500);
    })
}
let getCursosByAlumnoId=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            for (let i = 0; i < cursos.length; i++) {
                if(cursos[i].idAlumno==id){
                    resolve(cursos[i]);
                    return;
                }
                
            }
            reject("Se encontro el alumno pero no tiene cursos");
        },2000);
    });
}

// getAlumnoById(10).then(objAlumno=>{
//     console.log(objAlumno);
//     // getCursosByAlumnoId(objAlumno.id).then(objCursos);
//     getCursosByAlumnoId(objAlumno.id).then(({cursos})=>{
//         console.log(cursos);
//     }).catch((error)=>{
//         //error de cursos
//         console.log(error);        
//     });
// }).catch((error)=>{
//     // error de alumnosById
//     console.log(error);
    
// });

getAlumnoById(1).then((objAlumno)=>{
                console.log(objAlumno);
                return getCursosByAlumnoId(1);
                }).then(({cursos})=>{
                    console.log(cursos);
                }).catch((error)=>{
                    console.log(error); 
                });