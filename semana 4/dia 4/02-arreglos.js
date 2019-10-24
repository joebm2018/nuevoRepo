// sumando matrices
var matriz1=[[1,8,4],[3,2,5],[8,1,9]];
var matriz2=[[3,1,2],[4,3,1],[0,2,1]];
var matriz3=[];

for(i=0;i<matriz1.length;i++){
    // al declarar que matriz3 estoy declarando que 
    matriz3[i]=[];
    for(j=0;j<matriz1[i].length;j++){
        matriz3[i][j]=matriz1[i][j]+matriz2[i][j];
    }
}
console.log(matriz3);

