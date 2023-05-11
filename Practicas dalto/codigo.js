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

----------------------------------  Condicionales  ---------------------------------------------------------------------------------------------



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


--------------------------------------------------------------------Funciones------------------------------------------------


let num1 = 32;
let num2 = 12;

let res = num1 + num2;

function suma (a, b){
    let resultado = a + b;
    return resultado;
}

suma(2,4);


const saludar = function(nombre){
    let frase = `hola ${nombre}, como andas?`;
    document.write(frase);
}

// Funcion flecha, primero se define el nombre de la funcion, luego los valores que acepte, y por ultimo la flecha que reemplaza a "Function"
const saludar = (nombre) => { 
    let frase = `hola ${nombre}, como andas?`;
    document.write(frase);
}



saludar("Marcos")




class animal {
  constructor(especie, nombre, edad, color, sexo) {
    // Entreparentesis van los parametros
    this.especie = especie; // this es con lo que creo la propiedad.
    this.edad = edad; //constructor(edad) != this.edad porque el primero es un parametro, y la segunda es una propiedad.
    this.color = color; // da igual como le pongas de nombre despues del punto(.), es solo para darle nombre a la propiedad.
    this.sexo = sexo; // con el this lo que hacemos es seleccionar el objeto y le decimos que va a ser igual a sexo por ejemplo.
    this.nombre = nombre;
    this.information = `hola me llamo ${this.nombre} y soy un ${this.especie}, tengo ${this.edad} años de edad, mi pelaje es de color ${this.color} y por si te lo preguntabas soy ${this.sexo}.`;
  } // el this solo se usa dentro de los objetos y solo para el constructor.
  verInfo() { 
    document.write(this.information + "<br>");
  } // las funciones que creamos adentro de un objeto, se llaman metodos, y este metodo muestra la informacion de "X" animal.
}

//ahora creemos un animal.
// cuando trabajamos en objetos es recomendable usar const en vez de let o var.

const perro = new animal("perro", "Pirata", 5, "Blanco y dorado", "macho");

const gato = new animal("gato", "Boots", 23, "Amarillo y marron", "hembra");

const leon = new animal("leon", "Leonidas", 293, "verde", "macho");


// console.log(perro.information);
// console.log(gato.information);
// console.log(leon.information);

// los console.log se puede reemplazar haciendo un metodo.

perro.verInfo();
gato.verInfo();
leon.verInfo();

// de esta manera se usa un metodo para pedir la informacion de los animales 



//--------Caracteristicas de la programacion orientada a objetos: ----------------------------------------------------------

    Abstracción: simplifica conceptos complejos:
   Es simplificar las cosas complicadas al centrarnos en lo más importante y dejar de lado los detalles innecesarios. Es como ver el panorama general en lugar de todos los pequeños detalles.
   ------------------------------------------------------------------------------------------------------------------------ 
   Modularidad: divide un sistema en partes más pequeñas y manejables: Es dividir un sistema en partes más pequeñas y fáciles de manejar. Es como construir un rompecabezas, donde cada pieza tiene una función específica y se puede trabajar en ellas por separado.
   ------------------------------------------------------------------------------------------------------------------------
    Encapsulamiento: oculta los detalles internos y expone una interfaz controlada:
    Es esconder los detalles internos y mostrar solo la parte que necesitamos. Es como tener una caja de herramientas donde solo ves las herramientas que puedes usar, pero no necesariamente cómo funcionan por dentro.
   ------------------------------------------------------------------------------------------------------------------------
   Polimorfismo: permite que los objetos tengan diferentes comportamientos sus propiedades:
    Es la capacidad de los objetos para comportarse de diferentes maneras según el contexto. Es como tener un objeto que puede hacer diferentes tareas dependiendo de lo que se le pida, como un actor que puede interpretar diferentes roles en diferentes películas.

------------Otros conceptos de la programacion orientada a objetos:   --------------------------------------------


  1 Herencia: Es como cuando un objeto especializado hereda características de otro objeto más general. Por ejemplo, un "Perro" hereda características de un "Animal". Así, podemos reutilizar y ampliar el código existente.

Herencia:

class Animal {
  constructor(especie, nombre, edad, color, sexo) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.sexo = sexo;
    this.nombre = nombre;
    this.information = `Hola, me llamo ${this.nombre} y soy un ${this.especie}. Tengo ${this.edad} años de edad, mi pelaje es de color ${this.color} y soy ${this.sexo}.`;
  }

  verInfo() {
    document.write(this.information + "<br>");
  }
  ladrar() { //prueba de polimorfismo junto a la llamada del metodo de abajo (.ladrar)*
    if (this.especie == "perro") {
      document.write(`woof <br>`);
    } else {
      document.write(`no puede ladrar porque es un ${this.especie} <br>`);
    }
perro.ladrar(); //*
gato.ladrar(); //*
leon.ladrar(); //*Estos 3 metodos no van adentro de la funcion, los acomode aca para poder seguir practicando sin la molestia del codigo comentado
  }
}

const perro = new Animal("perro", "Pirata", 5, "Blanco y dorado", "macho");
const gato = new Animal("gato", "Boots", 23, "Amarillo y marron", "hembra");
const leon = new Animal("leon", "Leonidas", 293, "verde", "macho");


perro.verInfo();
gato.verInfo();
leon.verInfo();
-----------------------------------------------------------------------------------------------------------------------

class Animal {
  constructor(especie, nombre, edad, color, sexo) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.sexo = sexo;
    this.nombre = nombre;
    this.information = `Hola, me llamo ${this.nombre} y soy un ${this.especie}. Tengo ${this.edad} años de edad, mi pelaje es de color ${this.color} y soy ${this.sexo}.`;
  }

  verInfo() {
    document.write(this.information + "<br>");
  }
}

class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad);
    this.raza = raza;
  }
  ladrar() {
    alert("Woof");
  }
}
//ACLARACION IMPORTANTE: Un objeto y una clase NO pueden tener el mismo nombre(por eso la clase Perro tiene la "P" mayuscula)
const perro = new Perro("perro", "Pirata", 5, "Blanco y dorado", "macho");
const gato = new Animal("gato", "Boots", 23, "Amarillo y marron", "hembra");
const leon = new Animal("leon", "Leonidas", 293, "verde", "macho");

perro.ladrar(); // "Woof"
gato.ladrar(); // gato.ladrar() its not a function.


-------------------------------------------------------------------------------------------------------------------------

 2 Métodos estáticos: Son funciones especiales que puedes usar sin necesidad de crear un objeto. Son útiles para hacer operaciones que no dependen de un objeto en particular. Puedes pensar en ellos como acciones independientes. Por ejemplo, una "Calculadora" puede tener un método estático "sumar" que puedes usar directamente sin crear una calculadora.


class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad,color);
    this.raza = raza;
  }
  static ladrar() {//se usa para crear funciones que están relacionadas con una clase en lugar de estar relacionadas con objetos específicos de esa clase. Estas funciones se pueden llamar directamente desde la clase sin necesidad de crear un objeto. Son prácticas cuando necesitas realizar una tarea sin tener que lidiar con objetos individuales.
    alert("Woof");
  }
}


Perro.ladrar(); // Sin el metodo static, no se duvuelve la alerta "Woof"

-----------------------------------------------------------------------------------------------------------
  3 
   Métodos de acceso (Getters, Setters): Son formas de obtener y modificar información de un objeto. Los getters te permiten obtener el valor de algo, como obtener el nombre de una persona. Los setters te permiten cambiar o asignar un nuevo valor, como cambiar el nombre de una persona. Son útiles para mantener el control y la seguridad de los datos de un objeto.


class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad,color);
    this.raza = null;
  } 
  set setRaza(newName){ //Con set modificamos el valor
      this.raza = newName;
  } 
  getRaza(){ //con el get obtenemos un valor 
    return this.raza;
  }


  perro.modificarRaza = "licha";

  document.write(perro.getRaza); // esto da como resultado licha


  -------------------------------------------------------------------------------------------------------------------
  Metodos de cadena: 



concat(): Combina dos o más cadenas y devuelve una nueva cadena resultante.
// Método concat()
var str1 = "Hola";
var str2 = "mundo";
var concatenada = str1.concat(" ", str2);
console.log(concatenada); // Salida: "Hola mundo"

startswith(): Verifica si una cadena comienza con un prefijo especificado.
// Método startsWith()
var texto = "Hola mundo";
console.log(texto.startsWith("Hola")); // Salida: true

endswith(): Verifica si una cadena termina con un sufijo especificado.
// Método endsWith()
var texto = "Hola mundo";
console.log(texto.endsWith("mundo")); // Salida: true

includes(): Verifica si una cadena contiene una subcadena específica.
// Método includes()
var texto = "Hola mundo";
console.log(texto.includes("mundo")); // Salida: true

indexof(): Devuelve la posición de la primera aparición de una subcadena.
// Método indexOf()
var texto = "Hola mundo";
console.log(texto.indexOf("mundo")); // Salida: 5

lastindexof(): Devuelve la posición de la última aparición de una subcadena.
// Método lastIndexOf()
var texto = "Hola mundo, hola";
console.log(texto.lastIndexOf("hola")); // Salida: 13

padstart(): Agrega caracteres al inicio de una cadena hasta alcanzar una longitud determinada.
// Método padStart()
var numero = "42";
console.log(numero.padStart(5, "0")); // Salida: "00042"

padend(): Agrega caracteres al final de una cadena hasta alcanzar una longitud determinada.
// Método padEnd()
var numero = "42";
console.log(numero.padEnd(5, "0")); // Salida: "42000"

repeat(): Repite una cadena un número determinado de veces.
// Método repeat()
var texto = "Hola ";
console.log(texto.repeat(3)); // Salida: "Hola Hola Hola "

split(): Divide una cadena en un arreglo de subcadenas.
// Método split()
var texto = "Hola mundo";
console.log(texto.split(" ")); // Salida: ["Hola", "mundo"]

substring(): te permite obtener una parte específica de una cadena por el índice.
El primer numero se incluye, y el segundo se excluye.
// Método substring()
var texto = "Hola a todos";
console.log(texto.substring(2, 6)); // Salida: "la a"

tolowercase(): Convierte una cadena a minúsculas.
// Método toLowerCase()
var texto = "Hola Mundo";
console.log(texto.toLowerCase()); // Salida: "hola mundo"

touppercase(): Convierte una cadena a mayúsculas.
// Método toUpperCase()
var texto = "Hola Mundo";
console.log(texto.toUpperCase()); // Salida: "HOLA MUNDO"

tostring(): Convierte un valor a una cadena de texto.
// Método toString()
var numero = 42;
console.log(numero.toString()); // Salida: "42"

trim(): Elimina los espacios en blanco al inicio y al final de una cadena.
// Método trim()
var texto = "   Hola mundo   ";
console.log(texto.trim()); // Salida: "Hola mundo"

trimEnd(): Elimina los espacios en blanco al final de una cadena.

// Método trimEnd()
var texto = "   Hola mundo   ";
console.log(texto.trimEnd()); // Salida: "   Hola mundo"

trimstart(): Elimina los espacios en blanco al inicio de una cadena.
// Método trimStart()
var texto = "   Hola mundo   ";
console.log(texto.trimStart()); // Salida: "Hola mundo"

valueof(): Devuelve el valor primitivo de un objeto.
  // Método valueOf()
var numberObject = new Number(42);
console.log(numberObject.valueOf()); // Salida: 42

*/
