// Definir una variable en typescript

let miVariable:string = "Practica";
let text:string ="Ian bertoni";
let num:number=12;
let verdad:boolean = true;
let cualquiera:any = "Puedo poner lo que sea";
verdad = false;


// constantes

const nombres:string ="Ian bertoni";
// nombre = "Markinhos"   // No se puede reasignar un valor a una constante.

console.log(text, num,verdad);


// Arrays

let personas:string[] = ["Ian", "Casa", "Manzanas"]

let div_personas:HTMLElement | null = document.querySelector("#personas");
div_personas.innerHTML = "<ul>"

personas.map((persona) =>{
    div_personas.innerHTML += `<li>${persona}<li>`;


})
div_personas.innerHTML = "</ul>"