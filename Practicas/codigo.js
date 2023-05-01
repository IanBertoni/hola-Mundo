/*
let string = "";
let number = 1;
let booleano = true/false;

// const = "markinhos" // se tiene que declarar e inicializar al mismo tiempo
// let permite declarar e inicializarla por separado
// undefined: La variable existe pero no esta inicializada
// null: Algo no se encuentra disponible

let nombre = prompt("Decime tu nombre: ") la respuesta del usuario se guarda en la variable "nombre"

let numero = 10; 
numero += 5; es igual a sumar numero=numero + 5

let numero = 10; 
numero -= 5; es igual a restar numero=numero - 5

// antes del signo "=" si pones un signo "*" por ejemplo, multiplicas el numero por el numero que le indiques

let saludo = "Hola markitos ";
let pregunta ="Como estas?";

let frase = saludo + pregunta;

document.write(frase);
-------------------------------------------------------------------------
nombre = "Ian Bertoni"
Frase = `soy ${nombre} y estoy practicando`

document.write(Frase)


let numero = 23;
let numero2 = 13;
let texto = "23";
let texto2 = "texto 2";


document.write(numero == numero2); False
document.write(numero != numero2); Verdadero
document.write(texto != texto2); Verdadero
document.write(numero == texto); Verdadero ya que no analiza el tipo de dato sino el valor del mismo
document.write(numero === texto); False el triple "=" se compara si son estrictamente igual

let valor = true;
let valor2 = true;

let resultado = valor && valor2; TRUE

let resultado2 = valor || valor2; TRUE

let resultado3 = !valor; FALSE

document.write(resultado, resultado2, resultado3)

----------------------------------  Condicionales  -----------------



if (condicion){
    alert("hola")
} 

 Un ejemplo: 
 if (10 < 15){
    alert("10 es menor que 15")
 }
 
  if (15 < 10){ 
    alert()
 }
 // En este caso no se ejecuta por que la condicion no es verdadera
 

let nombre = "Marcos";

if (nombre == "Ian"){
   alert(`tu nombre es ${nombre}`) // Si esta condicion no se cumple pasa a la de abajo
}

else if (nombre == "Bertoni"){
   alert(`tu apellido es ${nombre}`)  // se puede usar tantos else if como quieras pero tan solo un if y un else
}
else {
   alert("tu nombre es otro amigo") // El else se usa como condicion final de salida.
}
--------------------------------------------------------arrays---------------------------------------------------------------
// Se empieza contando de 0 las posiciones
//Ejemplo:        0    ,   1    ,   2
let frutas = ["banana","manzana","pera"];
document.write(frutas[2]) // esto muestro "pera"



let pc1 = {
   nombre: "Markitos",
   cpu: "ryzen 5 3600",
   ram: "16GB",
   espacio: "1TB"
};

// document.write(pc1["nombre"]) // a los objetos en {} se los llama no por el numero de indice sino por el nombre del mismo.



// let pc2 = ["Markitos", "ryzen 5 3600","16GB","1TB"];


// document.write(pc2[2]) // Y cuando usamos [] llamamos al objeto con el indice


let nombre = pc1 ["nombre"]
let cpu = pc1 ["cpu"]
let ram = pc1 ["ram"]
let espacio= pc1 ["espacio"]

let frase = `el nombre de mi pc es: ${nombre} <br>
            el procesador es: ${cpu} <br>
            la memoria ram es: ${ram} <br>
            el espacio en disco es: ${espacio}`;

document.write(frase);


-----------------------------------------------Bucles e Iteración----------------------------------------------------------------



numeroParaSumar = 0;

if(numeroParaSumar < 10){
   document.write(`${numeroParaSumar} es menor que 10`)
};

 if (numeroParaSumar < 10){
   numeroParaSumar++;
   document.write(`${numeroParaSumar} `); este condicional solo imprime 1, ya que en este caso necesitamos un bucle
 };
 
---------------------------------------------------------------------------------------------------------------------------------
 let numero = 0;

 while(numero < 10){              // mientras numero sea menor que 10 se le suma "1" a numero y se imprime por pantalla.
   numero++
   document.write(`${numero}`)
 };


let numero = 0; 
do {                    
   document.write(numero + "<br>");

   numero++
} while(numero <= 6)

---------------------------------------------------------------------------------------------------------------------------------------
// el do-while primero imprime la variable numero en pantalla,despues le suma uno, y al final pregunta si la condicion se cumple o no para ver si continuar o no.
---------------------------------------------------------------------------------------------------------------------------------------
// el do-while se usa cuando queremos entrar al programa como minimo, una vez.
---------------------------------------------------------------------------------------------------------------------------------------
 
let numero = 0;

while(numero < 1000){
   numero++;
   document.write(`${numero}` + "<br>")
   if (numero == 10){
      break;
   }

} 
document.write("Fin")
---------------------------------------------------------------------------------------------------------------------------------------
En este caso while se ejecutaba en tanto numero sea menor que 1000, pero en este caso
agregamos un condicional que hacia que si numero era igual a 10, salia del bucle con un break.
---------------------------------------------------------------------------------------------------------------------------------------
Dentro de cualquier bucle, con un "break" salimos del mismo.
---------------------------------------------------------------------------------------------------------------------------------------


------------------------------------------------Ciclos FOR----------------------------------------------------------------------------
-En el "for" primero se declara e inicializa al mismo tiempo,
-Se establece la condicion del buble
-Luego se le aumenta o decrementa el contador usando "++" o "--"
---------------------------------------------------------------------------------------------------------------------------------------

for (let i = 6; i >= 0; i--){
 document.write(i + "<br>");
}

for (let i = 0; i < 20; i++){ // esto muestra del 0 al 19
 
   if(i == 12){ //Aca indicamos que queremos parar el bucle a la vuelta 12, (va del 0 a 11)
      break;
   }

   document.write(i + "<br>");
}
for (let i = 0; i < 20; i++){ // Esto muestra del 0 al 19 salteando el 12, ya que se utiliza continue*.
 
   if(i == 12){ // *puedes saltar la iteracion del código para continuar con el programa.
      continue; // *en este caso se saltea el numero 12.
   }

   document.write(i + "<br>");
}
---------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------FOR IN/FOR OF-------------------------------------------------------------------

let animales = ["gato","perro","tortuga"];

for(animal in animales){  //el bucle for in se usa si necesitas saber la posición de un elemento "x" en el arreglo.
   document.write(animal + "<br>");
}

document.write("<br>");

for(animal of animales){  // el bucle for of se usa si necesitas acceder al valor de cada elemento en el arreglo.
   document.write(animal + "<br>");
}

// Creamos dos arreglos, array1 y array2
let array1 = ["maria", "jazmin", "naza"];
let array2 = ["pedro", "marcelo", array1];

// Recorremos el arreglo array2
for (let array in array2) {
  
  // Si el elemento actual es la tercera cosa en la lista (es decir, array1)...
  if (array == 2) {
    
    // Recorremos array1 y escribimos cada elemento en el documento HTML
    for (let array of array1){
      document.write(array + "<br>");
    }
  
  // Si el elemento actual no es array1, escribimos el elemento en el documento HTML
  } else {
    document.write(array2[array] + "<br>");
  }
}

*/