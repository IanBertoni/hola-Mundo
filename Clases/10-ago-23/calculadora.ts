class Calculadora {
    private resultado: number;

    constructor() {
        this.resultado = 0;
    }

    sumar(a: number, b: number): number {
        this.resultado = a + b;
        return this.resultado;
    }

    restar(a: number, b: number): number {
        this.resultado = a - b;
        return this.resultado;
    }

     multiplicar(a: number, b: number): number {
        this.resultado = a * b;
        return this.resultado;
    }

    dividir(a: number, b: number): number | string {
        if (a !== 0 && b !== 0) {
            this.resultado = a / b;
            return this.resultado;
        } else {
           return "no se puede dividir por 0";
           
        }
    }
}

const miCalculadora = new Calculadora();
console.log(miCalculadora.sumar(5, 3)); 
console.log(miCalculadora.restar(10, 4)); 
console.log(miCalculadora.multiplicar(32, 6)); 
console.log(miCalculadora.dividir(-32, -3)); 