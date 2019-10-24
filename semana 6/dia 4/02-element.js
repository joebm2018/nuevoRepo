var autos=["mazda","audi","toyota","renault"];
var principal=document.getElementById("principal");

var miUL=document.createElement("ul");



for(i=0;i<autos.length;i++){
    var li=document.createElement("li");
    li.innerHTML=autos[i];
    li.style.display="inline-block";
    li.style.marginRight="10px"
    li.classList.add("item");
    miUL.appendChild(li);
}
principal.appendChild(miUL);
// [elemento].children=>devuelve un arreglo
// con todo los elementos hijos de un elemento padre
console.log(ul.children[2]);