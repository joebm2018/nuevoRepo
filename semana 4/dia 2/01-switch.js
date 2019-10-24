var calificacion=20;
switch(true){
    case calificacion>=0 && calificacion<=10:
        console.log("en proceso de aprendizaje");
        break;
    case calificacion>=11 && calificacion<=15:
        console.log("regular");
        break;
    case calificacion>=16 && calificacion<=20:
        console.log("bueno");
        break;
    default:
        console.log("nota invalida");
}