// do{

// }while();


do {
    // debugger;
    var opcio = +prompt("ingrese un numero:");
    if (opcio == 10) {
        console.log("Fin del Rpograma");
        break;
    }
    
    switch (opcio) {
        case 1:
            console.log("LUNES");
            break;
        case 2:
            console.log("MARTES");
            break;
        case 3:
            console.log("MIERCOLES");
            break;
        case 4:
            console.log("JUEVES");
            break;
        case 5:
            console.log("VIERNES");
            break;
        case 6:
            console.log("SABADO");
            break;
        case 7:
            console.log("DOMINGO");
            break;
        default:
            opcio=1;    
    }
} while (opcio >= 1 && opcio <= 7)