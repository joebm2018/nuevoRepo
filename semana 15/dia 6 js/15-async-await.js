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


// async await que convertirar mi funcion a una funcion asincrona

// en resumen lo transdorma en uan promesa
let getAlumnoById=async(id)=>{
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].id===id){
            return alumnos[i]; // equivalente a un resolve
        }        
    }
    throw "UOPS no hay el alumno"
}

let getCursosByAlumnobyId=async(id)=>{
    for (let i = 0; i < cursos.length; i++) {
        if(cursos[i].idAlumno===id){
            return cursos[i];
        }
        
    }
    throw "No se ha encontrado cursos para el Alumno"
};
// await indica a que mi variable no tome un valor hasat que la funcion retone algo

let getGatos=async()=>{
    let alumno=await getAlumnoById(1);
    let curso=await getCursosByAlumnobyId(1);
      
    return[alumno,curso] ; 
} 
getGatos().then(([alumno,curso])=>{
    console.log(alumno);
    console.log(curso);
      
}).catch(error=>{
    console.log(error);
    
})
