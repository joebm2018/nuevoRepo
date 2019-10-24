// pabellon.objPabellon.verPabellon();
// desarrollar las siguientes funciones
// venderNicho(idNicho) => la funcion mostrara un mensaje por consola de nicho vendido tras cambiar su estado a ocupado
// si el nicho estaba ocupado el sistema debera mostrar un mensaje de error indicando que el nicho no se puede vender
// 
// consultarNichosLibres() la funcion retornara la cantidad de nichos en estado libre
// 
// liberarPabellon- la funcion borarra todo los nichos del pabellon,limpiara el arreglo de nichos

//  repoblarPabellon() la funcion primero llamara a la funcion liberarPabellon() luego creara tantos nichos como capacidad tenga el pabellon, con valores por defecto para cada nicho.
// el nro y el id del nichos deben ser valores correlativos, el precio iniciara en 0 y todo los estados sera "libre"





// objeto constructor
function Pabellon(nuevoNombre,nueva_fila,nueva_col,nuevoId){
    var objPabellon={
        nombre:nuevoNombre,
        capacidad:nueva_fila*nueva_col,
        nro_filas:nueva_fila,
        nro_col:nueva_col,
        id:nuevoId,
        nichos:[
            {
                id:"n1",
                nro:1,
                precio:1000,
                estado:"ocupado",
            },
            {
                id:"n2",
                nro:2,
                precio:2000,
                estado:"libre",
            },
            
        ],
        verPabellon: function(){
            console.log(this);        
        },
        venderNicho: function(idBuscar){
            for(var i=0;i<this.nichos.length;i++){
                if(this.nichos[i].id==idBuscar){
                    if(this.nichos[i].estado=="libre"){
                        this.nichos[i].estado="ocupado";
                        console.log("Nicho Vendido");
                        break;
                    }else{
                        console.log("Nicho esta OCUPADO");
                    }
                }
            }
        },
        consultarNichosLibres:function(){
            var contLibres=0;
            for(var i=0;i<this.nichos.length;i++){
                if(this.nichos[i].estado=="libre"){
                    contLibres++;
                }
            }
            console.log(`Nichos Libres:${contLibres}`);
        },
        liberarPabellon:function(){
            this.nichos=[];
        },
        repoblarPabellon:function(){
            this.liberarPabellon();
            

             for(i=0;i<this.capacidad;i++){
                //SE CREA OBJETO NICHOS  
                //var objNichos={
                //     id:i+1,
                //         nro:i+1,
                //         precio:0,
                //         estado:"libre"
                // }

                /// O O O O
                // this.nichos.push(objNichos);
                // this.nichos[i].precio=0;
                // this.nichos[i].id=nroId;
                // this.nichos[i].=nro;
                // this.nichos[i]="libre";

                // Ò
                
                this.nichos.push({
                    id:i+1,
                    nro:i+1,
                    precio:0,
                    estado:"libre"
                })
            }
        }
    };
    return objPabellon;  
}
var p1= Pabellon("sanJorge",5,4,1);
p1.verPabellon();
console.log("CONSULTAR NICHOS LIBRES");
p1.consultarNichosLibres();
console.log("VENDER NICHO");
p1.venderNicho(3);
p1.verPabellon();
console.log("REPOBLAR PABELLON");
p1.repoblarPabellon();
p1.verPabellon();


// objPabellon.verPabellon();