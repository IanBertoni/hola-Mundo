import * as rls from 'readline-sync'
const arrDim: number = rls.questionInt("Ingrese la dimension del arreglo: ");
let namesArr: string[] = new Array(arrDim);
for(let i = 0; i < namesArr.length;i++){
    namesArr[i] = rls.question("Nombre: ")
}