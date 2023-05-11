 import * as rls from "readline-sync"
/*
let edad : number = rls.questionInt("Ingrese su edad: ");
let hora : number = rls.questionInt("Ingrese solo la hora sin minutos ni segundos: ");

if (edad >= 18 && hora < 2){
    console.log("Podes pasar pero tenes que pagar.");
    
} else if (edad >= 18 && hora > 2){
    console.log("Podes pasar y sin pagar");
    
}else{
    console.log("tomatelas, no podes pasar");
    
}
---------------------------------------------------------------------------------------------------------------------------------------
*/


const validarCliente = (edad:number, hora:number) =>{
if (edad >= 18 && hora < 2){
    console.log("Podes pasar pero tenes que pagar.");
    
} else if (edad >= 18 && hora > 2){
    console.log("Podes pasar y sin pagar");
    
}else{
    console.log("tomatelas, no podes pasar");
    

}
}

validarCliente(19,1);