import * as rls from "readline-sync";

class Televisor {
   private encendido: boolean;
   private volumen: number;
   private canalActual: number;


constructor() {
    this.encendido = false;
    this.volumen = 50;
    this.canalActual = 1;
}

prender(): void{
    this.encendido = true;
    console.log("Encendiendo, espere por favor.");
    
}

apagar(): void{
    this.encendido = false;
    console.log("Apagando");
}
cambiarCanal(canal: number): void{
    if(this.encendido === true){
     canal = rls.questionInt("Ingrese un canal entre el 1 y el 100: ")
     if (canal >= 1 && canal <= 100){
        this.canalActual = canal 
     }
    } else{
        console.log("El televisor esta apagado");
    }
}
ajustarVolumen(volumen: number): void{
    if(this.encendido === true){
        volumen = rls.questionInt("Ingrese el volumen deseado: ")
        if (volumen >= 0 && volumen <= 100){
             this.volumen = volumen 
        }
    } else {
        console.log("El televisor esta apagado");
    }
}

infoTv(): void{ 
    if(this.encendido === true){
        console.log(`Canal actual: ${this.canalActual}`);
        console.log(`Volumen actual: ${this.volumen}`);
        const horaActual = new Date().toLocaleTimeString();
        console.log(`Hora: ${horaActual}`);
    } else {
        console.log("El televisor esta apagado");

    }
}
}


const miTelevisor = new Televisor();
miTelevisor.prender();
miTelevisor.cambiarCanal(5);
miTelevisor.ajustarVolumen(65);
miTelevisor.infoTv();