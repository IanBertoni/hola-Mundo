import * as rls from "readline-sync";

let cuenta: number = rls.questionInt("Monto a pagar: ");

let propina: number = cuenta * 0.10;

console.log(`La propina a pagar seria ${propina}`);