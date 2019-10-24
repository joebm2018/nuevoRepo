var grupoA=['Bolivia','Brasil','Peru','Venezueka'];
var goles=[1,3,4,0];
var estrellas=['Chumacero','Neymar','Guerrero','Maduro'];
for(var i=0;i<grupoA.length;i++){
    console.log(`${grupoA[i]} metio ${goles[i]} gole(s) y su mejor jugador es ${estrellas[i]}`);
    
}

// son 3 personas Sr Garnica, Sr rodriguez y la Srta Azucena
// ambos sres son ingenieros ya la srta psicologa y tienen
// 27 26 y 40 respectivamente imprima  

var persona=['Garnica','Rodriguez','Azucena'];
var profesion=['ingeniero','Ingeniero','Psicologo'];
var edad=[26,26,40];
for(var j=0;j<persona.length;j++){
    console.log(`El Sr.(La Srta.) ${persona[j]} tiene ${edad[j]} años y es ${profesion[j]}`);
    
}

var datos=[9,8,2,15,8,7,6,7,8,2,1];
var longitudDatos=datos.length;
var xVafriables=+prompt("Cuantos valores desea Retornar:");
var acum=0;
if (xVafriables<longitudDatos){
    for (var i=longitudDatos-1;i>xVafriables+1;i--){
        console.log(datos[i]);
        acum++;
        if (acum==xVafriables){
            break;
        }
    }
}

var jueves="PIZZA";
var nueva=[];
for(var i=jueves.length-1;i>=0;i--){
    // console.log(jueves[i]);   
    nueva[i]+=jueves[i];
}
console.log(nueva);

