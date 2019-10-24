
var cont=0;

for(var i=1;i<1000;i++){
    if(i%3==0){
        console.log(i);
        cont++;
        if (cont==5)
            break;
    }
}