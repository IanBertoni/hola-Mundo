import readlineSync from 'readline-sync';
const num1:number=readlineSync.questionInt("ingrese un numero entero: ");
const num2:number=readlineSync.questionInt("ingrese un numero entero: ");
let result:number = 0;


for(let i:number = num1; i<= num2; i++){
    result = result + i;
}

console.log(`${result}`);
