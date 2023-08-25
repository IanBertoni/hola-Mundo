import * as rls from "readline-sync"
class Formas {
    protected base: number;
    protected altura : number;

    constructor(){
        this.base = rls.questionInt("Ingrese el ancho: ")
        this.altura = rls.questionInt("Ingrese el largo: ")
    }
}

class Triangulo extends Formas {
    

    constructor(){
        super();
    }

    public calcularArea() {
       const area = (this.altura * this.base) / 2;
       console.log(area);
    }
}

class Rectangulo extends Formas{
    constructor(){
        super();
    }
    public calcularArea() {
        const area = this.altura * this.base;
        console.log(area);
     }

}
const trianguloArea = new Triangulo;
trianguloArea.calcularArea();
const rectanguloArea = new Rectangulo;
rectanguloArea.calcularArea();