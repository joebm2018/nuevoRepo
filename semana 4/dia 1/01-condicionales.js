// var sueldo=3600.00;
// var sueldo=prompt("Ingrese un sueldo=>");
// sueldo=parseInt(sueldo);
// if (sueldo>3500){
//     console.log("se retiene el 13%");
//     console.log(`Total a pagar ${sueldo-sueldo*0.13} soles`);
// }else{
//     console.log("no se retiene el 13%");
//     console.log(`Total a pagar ${sueldo} soles`);
// }
// console.log("Fin del programa");

//el usuario ingrse horas trabajadas y sueldo por hora
// el total a pagar sera las 40 primeras horas multiplicado por el sueldo por hora
//el exceso a las 40 horas se paga el doble del sueldo por hora

// var horasTrabajadas=prompt("ingrese horas trabajadas:");
// horasTrabajadas=parseInt(horasTrabajadas);
// var sueldoPorHora=prompt("ingrese sueldo por hora:");
// sueldoPorHora=parseInt(sueldoPorHora);

// var sueldo=horasTrabajadas*sueldoPorHora;
// total=0;
// if(horasTrabajadas<=40){
//     total=sueldoPorHora*horasTrabajadas;
// }else{
//     var extras=horasTrabajadas-40;
//     total=(extras*2*sueldoPorHora)+(40*sueldoPorHora);
// }
// console.log(`sueldo a pagar ${total} soles`);

// COMPARADORES ARITMETICOS
// a > b    a mayor que b 
// a < b    a menor que b
// <= menor o igual que
// >= mayor o igual que
// == igual que
// != diferente

var anio=+prompt("INGRESE AÑO:");
// if(anio%400==0){
//     console.log("el año es biciesto");
// }else{
//     if(anio%4==0 && anio%100!=0){
//         console.log("el año es biciesto");
//     }else{
//         console.log("el año NO es biciesto");
//     }    
// }
//otra forma
if((anio%4==0 && anio%100!=0) || (anio%400==0)){
    console.log("el año es biciesto");
    }else{
        console.log("el año NO es biciesto");
}

