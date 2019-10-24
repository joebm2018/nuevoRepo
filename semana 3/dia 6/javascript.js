console.log('hola cumpa');
console.log('este es mi numero',6);
console.table('habla bien');

// variables
// var nombreVariable=valor
var nombre;
nombre="Joe";
var apellidos="Barrionuevo Manchego"
dni=29712729, estadocivil="soltero", genero="M", hobbie="Comer";
EstadiCivil='es complicado';

// NUMEROS / NUMBER
var numero=10;
decimal=3.5;
exponencial=10e5
negativo=-1000;

console.log("Hola soy un entero =>"+numero);
console.log("Yo soy un decimal =>"+decimal);
console.log("Exponencial=>",exponencial);
console.log("el negativo es=>"+negativo);

// texto/string

var miTexto='Hoy ganamos';
var miNota="A";
console.log("mi texto es => "+miTexto);
console.log("mi nota es=>"+miNota);

console.log("HOY GANAMOS \n \"3-0\"");  

// VALORES BOOLEANOS
var mequiere=true;
perolaverdad=false;
console.log(mequiere);
// OPERADORES ARITMETICOCS
var n1=5, n2=6;
suma=n1+n2, resta=n2-n1, multi=n1*n2, div=n1/n2,residuo=n2%n1 ;
console.log("Mi suma es =>"+suma);
console.log("la resta=>"+resta);
console.log("la multiplicacion=>"+multi);
console.log("la division=>"+div);
console.log(`El Ressiduo =>${residuo} y esta con operaciones aritmetica`);

var operacion=1.2*3;
console.log("la operacion segun javascript de 1.2 x 3="+operacion)
operacion=1.2*10*3/10;
console.log("mi operacion corrigiendo seria 1.2*10*3/10 es:"+operacion);

// var miEdad=prompt("ingrese edad");
// var edad=parseInt(miEdad);
var goles=1;
goles += 1;
console.log("Peru metio "+goles+" Goles");


// TIPOS ESPECIALES

console.log("resultado de la operaion 5/0=>"+5/0);
console.log("resultado de la operaion 5/'goles'=>"+5/"goles");

// typeof devuelve el tipo de valor
console.log(typeof(10/'camotes'));