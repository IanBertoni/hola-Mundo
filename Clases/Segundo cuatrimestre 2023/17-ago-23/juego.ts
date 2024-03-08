import * as rls from "readline-sync"
class Personajes{
    protected nombre: string;
    protected vida: number;
    protected energia: number;

    constructor(){
        this.nombre = rls.question("Ingrese su nombre: ")
        this.vida = 100;
        this.energia = 100;
    }

    public atacar(){
        console.log(`${this.nombre} pego una patada voladora`);
    }

    public curar(){
        if(this.vida < 100){
            this.vida = 100;
            console.log(`la vida esta en ${this.vida}%`);
            
        } else {
            console.log(`${this.nombre} ya tiene la vida llena`);
            
        }
    }
    public recibirDamage(damage : number){
            this.vida -= damage
            if(this.vida <= 0){
                this.vida = 0;
                console.log(`${this.nombre} ha sido derrotado`);
            } else {
                console.log(`${this.nombre} ha recibido un ataque. Vida restante: ${this.vida}%`);
            }
        }

        public regenerarEnergia(){
            if(this.energia >= 100){
                console.log(`No podes comer, Ya estas al 100%`);
            } else {
                this.energia = 100;
                console.log("Energia restaurada al 100%");
                
            }
        }
}

class Guerrero extends Personajes{
    private arma : string;
    private escudo : string;
    private fuerza : number

    constructor(){
        super()
        this.arma = rls.question("Ingrese el arma que le gustaria usar: ")
        this.escudo = rls.question("Ingrese que clase de escudo quiere usar: ")
        this.fuerza = 5;
    }

    public bloquear(){
        console.log(`${this.nombre} acaba de bloquear con su escudo ${this.escudo}`);
                
    }

    public atacar(){
        console.log(`${this.nombre} acaba de atacar con su ${this.arma}`);
    }

    public ataqueEspecial(){
      if(this.energia <= 19){
        console.log(`No hay energia suficiente para este ataque(Minimo 20 pts de energia)`);
      }  else{
        this.energia -= 20;
        console.log(`${this.nombre} ha usado su ataque especial`);
        console.log(`${this.energia}%`);
    }
      
    }
}

class Mago extends Personajes{
    private hechizo : string;
    private mana : number;


    constructor(){
        super();
        this.hechizo = rls.question("Ingrese el hechizo que te gustaria usar: ")
        this.mana = 100;
    }

    public lanzarHechizo(){
        if (this.mana >= 20){
            this.mana -= 20;
            console.log(`${this.nombre} ha lanzado el hechizo ${this.hechizo}`);
            console.log(`Mana restante: ${this.mana}%`);
        } else {
            console.log(`No hay suficiente mana para lanzar el hechizo`);
        }
    }
    public recargarMana() {
        if (this.mana >= 100) {
            console.log(`No puedes recargar mana, ya tienes el 100%`);
        } else {
            this.mana = 100;
            console.log("Mana recargado al 100%");
        }
    }
}

const jugadorGuerrero = new Guerrero();
const jugadorMago = new Mago();

jugadorGuerrero.atacar();
jugadorGuerrero.bloquear();
jugadorGuerrero.ataqueEspecial();
jugadorGuerrero.curar();
jugadorGuerrero.regenerarEnergia();

jugadorMago.lanzarHechizo();
jugadorMago.curar();
jugadorMago.regenerarEnergia();
jugadorMago.lanzarHechizo();





