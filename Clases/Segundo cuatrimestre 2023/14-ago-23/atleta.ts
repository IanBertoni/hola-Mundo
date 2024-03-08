import * as rls from "readline-sync"
class Atletas {
    protected nombre: string;
    private edad : number;
    protected deporte : string;
    private altura : number | string;

    constructor(){
        this.nombre = rls.question("Ingrese su nombre: ")
        this.edad = rls.questionInt("Ingrese su edad: ")
        this.deporte = rls.question("Disciplina: ")
        this.altura = rls.question("Ingrese su altura en CM: ")
        this.validarEdad();
    }
     

    protected validarEdad(){
        if(this.edad >= 18 && this.edad <= 99){
            console.log(`${this.nombre} tiene la edad para competir`);
        } else {
            console.log("No cumple con la edad para competir");
          }
        }

        public mostrarInformacion(){
            console.log(`nombre: ${this.nombre}`)
            console.log(`edad: ${this.edad}`)
            console.log(`deporte: ${this.deporte}`)
            console.log(`altura: ${this.altura}`);
            
        }

        public entrenamiento(){
            console.log(`${this.nombre} esta haciendo su rutina de entrenamiento`);
        }

    }

    class Futbolista extends Atletas {
        private posicion : string;

        constructor(){
            super();
            this.posicion = rls.question("Posicion en la cancha: ")
        }

        public jugarPartido(){
            console.log(`${this.nombre} esta jugando al futbol de ${this.posicion}`);
            
        }
    }
    class Nadador extends Atletas{
        private estilo: string;

        constructor(){
            super();
            this.estilo = rls.question("Estilo de nado preferido: ")
        }

        public nadar(){
            console.log(`${this.nombre} esta nadando estilo ${this.estilo}`);
        }
    }

    class Corredor extends Atletas{
        private distanciaFav : number;

        constructor(){
            super();
            this.distanciaFav = rls.questionInt("Ingrese su distancia que desea correr en metros: ")
        }

        public correr(){
            console.log(`${this.nombre} esta corriendo la distancia de ${this.distanciaFav} metros`);
            
        }
    }

    const futbolista = new Futbolista();
    futbolista.mostrarInformacion();
    futbolista.jugarPartido();

    const nadador = new Nadador();
    nadador.mostrarInformacion();
    nadador.nadar();

    const corredor = new Corredor();
    corredor.mostrarInformacion();
    corredor.correr();
