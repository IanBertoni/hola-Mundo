function randomNumber(top: number){
return Math.floor(Math.random() * top);
}


function fillRandom(arr:number[], len: number, top: number): void{
for (let i: number = 0; i < len; i++){
    arr.push(randomNumber(top));
}
}

const numbers : number[] = []
fillRandom(numbers,10,1000);
console.log(numbers);


const bubbleSort = (arr:number[]):number[] =>{
let inner: number = 0;
let outer: number = 0;
let temp : number;
//flag
let noSwap : Boolean;

// bucle aninado con un puntero iterando de derecha a izquierda
for(let i: number = arr.length;i > 0; i--){
noSwap = true;
// otro bucle iterando de izquierda a derecha(compara los numero entre si)
for(let j: number = 0; j < i;j++){
    //comparamos las 2 posiciones.
        if (arr[j] > arr[j + 1]){
        temp = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwap = false;
        }
    }
    if (noSwap) break;
}
return arr;
}

console.log(bubbleSort(numbers));
