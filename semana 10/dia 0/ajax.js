var xmlhttprequest=new  XMLHttpRequest();
//https://jsonplaceholder.typicode.com/users
// console.log(xmlhttprequest.readyState);
var tbody=document.getElementById("tbody");
var tr=document.createElement("tr");
var td=document.createElement("td")
xmlhttprequest.onreadystatechange=function(){
    if (xmlhttprequest.readyState==4){
        console.log(xmlhttprequest.readyState);
        console.log(JSON.parse(xmlhttprequest.responseText));
    }
    
}
xmlhttprequest.open("GET","https://jsonplaceholder.typicode.com/users");
xmlhttprequest.send(null);