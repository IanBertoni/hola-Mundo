let autos: string[] = ["BWM", "Mercedes Benz", "Alfa romero"];

console.log(autos);

console.log(autos[0]);

console.log(autos[1]);

console.log(autos[2]);

// si queremos ver todos al mismo tiempo hacemos lo siguiente

for (let i = 0; i < autos.length; i++) {
  console.log(`${i} : ${autos[i]}`);
}

autos[1] = "Ferrari";

console.log(autos);

autos.push("Mercedes Benz");

console.log(autos);

console.log(autos.length);
autos[autos.length] = "Audi";

console.log(autos);

// poner un elemento en el indice que quieras, dejando espacios en blanco entre ellos

autos[6] = "McClaren";

console.log(autos);

console.log(typeof autos);

// De esta manera se usa el metodo array para saber si es o no
console.log(Array.isArray(autos));

//preguntamos si es una instancia del tipo array

console.log(autos instanceof Array);
