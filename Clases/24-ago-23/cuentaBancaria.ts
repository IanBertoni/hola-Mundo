import * as rls from "readline-sync"
class BankAccount { 
    private owner : string;
    private balance : number;
    private accountType : string;


    constructor(){
        this.owner = rls.question("Nombre del dueño: ");
        this.balance = 0;
        this.accountType = "Especifique que cuenta va a usar";
        
    }

    public tipoCuenta(){
    console.log(`Ingrese el tipo de cuenta:
    1. Cuenta sueldo
    2. Cuenta dolares
    3. Cuenta corrienta
    4. Caja de ahorro`);
    const eleccion = rls.questionInt("Elija una opcion: ");
        
        switch(eleccion){
            case 1:
                this.accountType = "Cuenta sueldo"
                break;
                
                case 2: 
                this.accountType = "Cuenta dolares"
                break;

                case 3: 
                this.accountType = "Cuenta corrienta"
                break;

                case 4:
                    this.accountType = "Caja de ahorro"

                    break;

                    default:
                        console.log("No ingresaste ninguna opcion valida");
                        break;
        }
    }

    public deposit(): void{ 
        this.balance = rls.questionInt("Cuanto dinero desea ingresar: ")
        if(this.balance <= 0){
            console.log("No se puede depositar 0 pesos o montos negativos.");
        }else{
        console.log(`el dinero que ingreso fue de $${this.balance}`);
    }
    }
    
    public withDraw(): void {
        const montoARetirar = rls.questionInt("Cuanto dinero quiere retirar: ");
    
        if (montoARetirar <= 0) {
            console.log("La cantidad a retirar debe ser mayor que cero.");
        } else if (montoARetirar > this.balance) {
            console.log("Fondos insuficientes para realizar el retiro.");
        } else {
            this.balance -= montoARetirar;
            console.log(`Retiro exitoso. Ahora tiene $${this.balance} en su cuenta.`);
        }
    }

       public getBalance(){
            console.log(`${this.owner} en su ${this.accountType} tiene $${this.balance}`);
            
        }
    }

    const cuentaTena = new BankAccount();
    cuentaTena.tipoCuenta();
    cuentaTena.deposit();
    cuentaTena.withDraw();
    cuentaTena.getBalance();