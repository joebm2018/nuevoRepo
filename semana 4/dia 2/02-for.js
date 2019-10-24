// debugger;
// var suma=0;
// for (var i=0;i<100;i++){
//     if(i%2!=0)
//         suma=suma+i;    
// }
// console.log(suma);

// CUENTA LOS PARES E IMPARES 
// valorInicial = +prompt("ingrese valor inicial:");
// valorFinal = +prompt("ingrese valor final:");
// if (valorInicial < valorFinal) {
//     var suma = 0, sumai = 0;
//     for (var i = valorInicial; i <= valorFinal; i++) {
//         if (i % 2 == 0)
//             suma++;
//         else
//             sumai++
//     }
//     console.log("pares", suma);
//     console.log("impares", sumai);
// }else{
//     console.log("tiene que ingresar correctos ")
// }



valorInicial = +prompt("ingrese valor inicial:");
valorFinal = +prompt("ingrese valor final:");
for(var i=valorFinal;i>=valorInicial;i--){
    if (i%5==0)
        console.log(i); 
}